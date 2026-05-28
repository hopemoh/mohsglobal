```tsx
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const HomePage = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    const { data } = await supabase
      .from("homepage_sections")
      .select("*")
      .order("sort_order");

    if (data) {
      setSections(data);
    }
  };

  return (
    <div>
      {sections.map((section) => {
        switch (section.section_type) {
          case "hero":
            return (
              <section key={section.id} className="py-20">
                <h1 className="text-5xl font-bold">
                  {section.title}
                </h1>

                <p className="mt-4 text-lg">
                  {section.subtitle}
                </p>
              </section>
            );

          case "about":
            return (
              <section key={section.id} className="py-16">
                <h2 className="text-3xl font-semibold">
                  {section.title}
                </h2>

                <p>{section.content}</p>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default HomePage;
```
