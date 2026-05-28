import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

import { Pencil, Trash2, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CrudField {
  name: string;
  label: string;
  type: "text" | "textarea" | "number";
  required?: boolean;
}

interface CrudConfig {
  table: string;
  title: string;
  fields: CrudField[];
  sortable?: boolean;
}

interface CmsRecord {
  id: string;
  [key: string]: unknown;
}

export default function CmsSection({
  config,
}: {
  config: CrudConfig;
}) {
  const [records, setRecords] = useState<CmsRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState<CmsRecord | null>(null);

  const { toast } = useToast();

  // ---------------- FETCH ----------------
  const fetchData = async () => {
    try {
      setLoading(true);

      let query = supabase
        .from(config.table)
        .select("*");

      // Safe ordering (only if column exists)
      if (config.sortable) {
        query = query.order("sort_order", { ascending: true, nullsFirst: true });
      }

      const { data, error } = await query;

      if (error) {
        toast({
          title: "Error loading data",
          description: error.message,
          variant: "destructive",
        });
        setRecords([]);
        return;
      }

      setRecords((data as CmsRecord[]) || []);
    } catch (err) {
      toast({
        title: "Unexpected error",
        description: "Failed to load data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [config.table]);

  // ---------------- SAVE ----------------
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const values: Record<string, unknown> = {};

    config.fields.forEach((f) => {
      const val = formData.get(f.name);

      values[f.name] =
        f.type === "number" ? Number(val) : val;
    });

    try {
      // UPDATE
      if (edit?.id) {
        const { error } = await supabase
          .from(config.table)
          .update(values)
          .eq("id", edit.id);

        if (error) throw error;

        toast({ title: "Updated successfully" });
      } 
      // CREATE
      else {
        if (config.sortable) {
          values.sort_order = records.length;
        }

        const { error } = await supabase
          .from(config.table)
          .insert(values);

        if (error) throw error;

        toast({ title: "Created successfully" });
      }

      setOpen(false);
      setEdit(null);
      fetchData();
    } catch (err: any) {
      toast({
        title: "Save failed",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  // ---------------- DELETE ----------------
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;

    try {
      const { error } = await supabase
        .from(config.table)
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({ title: "Deleted" });
      fetchData();
    } catch (err: any) {
      toast({
        title: "Delete failed",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  const openCreate = () => {
    setEdit(null);
    setOpen(true);
  };

  const openEdit = (record: CmsRecord) => {
    setEdit(record);
    setOpen(true);
  };

  // ---------------- UI ----------------
  if (loading) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {config.title}
        </h2>

        <Button size="sm" onClick={openCreate}>
          <Plus className="w-4 h-4 mr-1" />
          Add
        </Button>
      </div>

      {/* LIST */}
      <div className="space-y-2">
        {records.map((r) => (
          <div
            key={r.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div className="min-w-0">
              <p className="font-medium truncate">
                {String(
                  r[config.fields[0]?.name] || "Untitled"
                )}
              </p>

              {config.fields[1] && (
                <p className="text-sm text-muted-foreground truncate">
                  {String(
                    r[config.fields[1].name] || ""
                  )}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => openEdit(r)}
              >
                <Pencil className="w-4 h-4" />
              </Button>

              <Button
                size="icon"
                variant="destructive"
                onClick={() => handleDelete(r.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {edit ? "Edit" : "Create"} {config.title}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSave} className="space-y-4">
            {config.fields.map((f) => (
              <div key={f.name} className="space-y-1">
                <Label>
                  {f.label} {f.required ? "*" : ""}
                </Label>

                {f.type === "textarea" ? (
                  <Textarea
                    name={f.name}
                    required={f.required}
                    defaultValue={
                      edit
                        ? String(edit[f.name] || "")
                        : ""
                    }
                  />
                ) : (
                  <Input
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    defaultValue={
                      edit
                        ? String(edit[f.name] || "")
                        : ""
                    }
                  />
                )}
              </div>
            ))}

            <Button type="submit" className="w-full">
              {edit ? "Update" : "Create"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
