```tsx
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { useToast } from "@/hooks/use-toast";

import {
  Pencil,
  Trash2,
  Plus,
  GripVertical,
} from "lucide-react";

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
  created_at?: string;
  sort_order?: number;
  [key: string]: unknown;
}

const CmsSection = ({
  config,
}: {
  config: CrudConfig;
}) => {
  const [records, setRecords] = useState<CmsRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const [editOpen, setEditOpen] = useState(false);

  const [editRecord, setEditRecord] =
    useState<CmsRecord | null>(null);

  const { toast } = useToast();

  // =========================
  // FETCH RECORDS
  // =========================
  const fetchRecords = async () => {
    try {
      setLoading(true);

      let query = supabase
        .from(config.table)
        .select("*");

      // Optional sorting
      if (config.sortable) {
        query = query.order("sort_order", {
          ascending: true,
        });
      }

      const { data, error } = await query;

      if (error) {
        console.error(error);

        toast({
          title: "Database Error",
          description: error.message,
          variant: "destructive",
        });

        setRecords([]);
      } else {
        setRecords((data as CmsRecord[]) || []);
      }
    } catch (err) {
      console.error(err);

      toast({
        title: "Unexpected Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // INITIAL LOAD
  // =========================
  useEffect(() => {
    fetchRecords();
  }, [config.table]);

  // =========================
  // SAVE RECORD
  // =========================
  const handleSave = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const formData = new FormData(
        e.currentTarget
      );

      const values: Record<string, unknown> = {};

      config.fields.forEach((field) => {
        const val = formData.get(field.name);

        values[field.name] =
          field.type === "number"
            ? Number(val)
            : val;
      });

      // UPDATE
      if (editRecord?.id) {
        const { error } = await supabase
          .from(config.table)
          .update(values)
          .eq("id", editRecord.id);

        if (error) {
          toast({
            title: "Update Failed",
            description: error.message,
            variant: "destructive",
          });

          return;
        }

        toast({
          title: "Updated Successfully",
        });
      }

      // CREATE
      else {
        if (config.sortable) {
          values.sort_order = records.length;
        }

        const { error } = await supabase
          .from(config.table)
          .insert(values);

        if (error) {
          toast({
            title: "Create Failed",
            description: error.message,
            variant: "destructive",
          });

          return;
        }

        toast({
          title: "Created Successfully",
        });
      }

      setEditOpen(false);
      setEditRecord(null);

      fetchRecords();
    } catch (err) {
      console.error(err);

      toast({
        title: "Unexpected Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  // =========================
  // DELETE RECORD
  // =========================
  const handleDelete = async (
    id: string
  ) => {
    const confirmed = confirm(
      "Are you sure you want to delete this?"
    );

    if (!confirmed) return;

    try {
      const { error } = await supabase
        .from(config.table)
        .delete()
        .eq("id", id);

      if (error) {
        toast({
          title: "Delete Failed",
          description: error.message,
          variant: "destructive",
        });

        return;
      }

      toast({
        title: "Deleted Successfully",
      });

      fetchRecords();
    } catch (err) {
      console.error(err);

      toast({
        title: "Unexpected Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  // =========================
  // OPEN CREATE
  // =========================
  const openCreate = () => {
    setEditRecord(null);
    setEditOpen(true);
  };

  // =========================
  // OPEN EDIT
  // =========================
  const openEdit = (
    record: CmsRecord
  ) => {
    setEditRecord(record);
    setEditOpen(true);
  };

  // =========================
  // LOADING UI
  // =========================
  if (loading) {
    return (
      <div className="p-6 text-sm text-muted-foreground">
        Loading CMS data...
      </div>
    );
  }

  // =========================
  // UI
  // =========================
  return (
    <div className="space-y-5">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {config.title}
        </h2>

        <Button
          onClick={openCreate}
          size="sm"
        >
          <Plus className="mr-1 h-4 w-4" />
          Add
        </Button>
      </div>

      {/* EMPTY STATE */}
      {records.length === 0 ? (
        <div className="rounded-lg border p-6 text-sm text-muted-foreground">
          No records found.
        </div>
      ) : (

        /* RECORD LIST */
        <div className="space-y-3">
          {records.map((record) => (
            <div
              key={record.id}
              className="flex items-center gap-3 rounded-lg border bg-card p-4"
            >

              {/* SORT ICON */}
              {config.sortable && (
                <GripVertical className="h-4 w-4 text-muted-foreground" />
              )}

              {/* CONTENT */}
              <div className="min-w-0 flex-1">

                {/* TITLE */}
                <p className="truncate font-medium">
                  {String(
                    record[
                      config.fields[0].name
                    ] || "Untitled"
                  )}
                </p>

                {/* SUBTITLE */}
                {config.fields[1] && (
                  <p className="truncate text-sm text-muted-foreground">
                    {String(
                      record[
                        config.fields[1].name
                      ] || ""
                    )}
                  </p>
                )}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2">

                {/* EDIT */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    openEdit(record)
                  }
                >
                  <Pencil className="h-4 w-4" />
                </Button>

                {/* DELETE */}
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() =>
                    handleDelete(record.id)
                  }
                >
                  <Trash2 className="h-4 w-4" />
                </Button>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      <Dialog
        open={editOpen}
        onOpenChange={setEditOpen}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">

          <DialogHeader>
            <DialogTitle>
              {editRecord
                ? "Edit"
                : "Add"}{" "}
              {config.title}
            </DialogTitle>
          </DialogHeader>

          {/* FORM */}
          <form
            onSubmit={handleSave}
            className="space-y-4 pt-2"
          >

            {config.fields.map((field) => (
              <div
                key={field.name}
                className="space-y-2"
              >

                <Label
                  htmlFor={`field-${field.name}`}
                >
                  {field.label}

                  {field.required && (
                    <span className="ml-1 text-red-500">
                      *
                    </span>
                  )}
                </Label>

                {field.type ===
                "textarea" ? (
                  <Textarea
                    id={`field-${field.name}`}
                    name={field.name}
                    required={
                      field.required
                    }
                    rows={5}
                    defaultValue={
                      editRecord
                        ? String(
                            editRecord[
                              field.name
                            ] || ""
                          )
                        : ""
                    }
                  />
                ) : (
                  <Input
                    id={`field-${field.name}`}
                    name={field.name}
                    type={field.type}
                    required={
                      field.required
                    }
                    defaultValue={
                      editRecord
                        ? String(
                            editRecord[
                              field.name
                            ] || ""
                          )
                        : ""
                    }
                  />
                )}
              </div>
            ))}

            {/* SUBMIT */}
            <Button
              type="submit"
              className="w-full"
            >
              {editRecord
                ? "Update"
                : "Create"}
            </Button>

          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CmsSection;
```
