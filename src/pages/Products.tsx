import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageMeta } from "@/hooks/usePageMeta";
import limestoneImg from "@/assets/limestone.jpg";
import dolomiteImg from "@/assets/dolomite.jpg";
import lepidoliteImg from "@/assets/lepidolite.jpg";

const products = [
  {
    name: "Limestone",
    slug: "limestone",
    img: limestoneImg,
    desc: "High-purity calcium carbonate (CaCO₃) extracted from our premium quarries and processed to exact specifications. Available in multiple grades and particle sizes.",
    forms: ["Fine Powder (200-400 mesh)", "Coarse Powder (80-200 mesh)", "Lumps (25-75mm)", "Aggregates (custom sizes)"],
    applications: ["Construction & cement manufacturing", "Agriculture (soil pH correction)", "Water treatment & purification", "Steel manufacturing (flux agent)", "Glass & ceramics production", "Paint & coatings industry"],
    specs: [
      ["CaCO₃ Content", "≥ 97.5%"],
      ["MgO", "≤ 1.0%"],
      ["SiO₂", "≤ 0.8%"],
      ["Fe₂O₃", "≤ 0.1%"],
      ["Whiteness", "≥ 92%"],
      ["Moisture", "≤ 0.5%"],
    ],
  },
  {
    name: "Dolomite",
    slug: "dolomite",
    img: dolomiteImg,
    desc: "Premium quality magnesium-calcium carbonate [CaMg(CO₃)₂] processed for industrial and agricultural applications. Known for its high purity and consistent quality.",
    forms: ["Micronized Powder (300-500 mesh)", "Standard Powder (100-200 mesh)", "Lumps (25-100mm)", "Custom-sized granules"],
    applications: ["Steel & iron production", "Glass manufacturing", "Agriculture (magnesium supplement)", "Refractory material", "Ceramics & tiles", "Environmental applications"],
    specs: [
      ["CaMg(CO₃)₂", "≥ 95%"],
      ["MgO", "18-21%"],
      ["CaO", "28-32%"],
      ["SiO₂", "≤ 1.5%"],
      ["Fe₂O₃", "≤ 0.15%"],
      ["LOI", "45-47%"],
    ],
  },
  {
    name: "Lepidolite",
    slug: "lepidolite",
    img: lepidoliteImg,
    desc: "Lithium-bearing mica mineral [K(Li,Al)₃(Si,Al)₄O₁₀(F,OH)₂] essential for modern technology. Carefully extracted and processed to preserve mineral integrity.",
    forms: ["Ultrafine Powder (400+ mesh)", "Standard Powder (200-400 mesh)", "Flakes & crystals", "Custom processing available"],
    applications: ["Lithium battery production", "Ceramics & glass manufacturing", "Specialty alloys", "Pharmaceutical industry", "Cosmetics & pigments", "Research & development"],
    specs: [
      ["Li₂O Content", "3.0-5.0%"],
      ["K₂O", "8-12%"],
      ["Al₂O₃", "20-25%"],
      ["SiO₂", "48-55%"],
      ["Fe₂O₃", "≤ 1.0%"],
      ["Particle Size", "Custom"],
    ],
  },
];

const Products = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Products - Mohsglobal Resources",
    "description": "Browse our premium mineral products including limestone, dolomite, and lepidolite. All available in multiple forms and custom specifications.",
    "url": "https://nohsglobal.site/products",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products.map((p, idx) => ({
        "@type": "Product",
        "position": idx + 1,
        "name": p.name,
        "description": p.desc,
        "url": `https://www.mohsglobal.site/products#${p.slug}`,
        "image": p.img,
      }))
    }
  };

  return (
    <>
      <PageMeta 
        title="Products"
        description="Mohsglobal Resources offers premium limestone, dolomite, and lepidolite products. High-purity minerals in powder and lump forms with custom specifications available."
        keywords="limestone powder, dolomite supplier, lepidolite powder, mineral products, bulk minerals, industrial minerals"
        path="/products"
        schema={schema}
      />
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Our Products</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Premium mineral resources processed to the highest standards. Available in powder and lump forms with custom specifications.
        </p>
      </div>
    </section>

    {products.map((product, idx) => (
      <section key={product.slug} id={product.slug} className={`py-16 md:py-24 ${idx % 2 === 1 ? "bg-muted/30" : ""}`}>
        <div className="container">
          <div className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={product.img} alt={`${product.name} mineral`} loading="lazy" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">{product.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.desc}</p>

              <h3 className="font-semibold text-foreground mb-2">Available Forms</h3>
              <ul className="mb-6 space-y-1">
                {product.forms.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-foreground mb-2">Applications</h3>
              <div className="grid grid-cols-2 gap-1 mb-6">
                {product.applications.map((a) => (
                  <span key={a} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {a}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold text-foreground mb-2">Specifications</h3>
              <div className="rounded-lg border border-border overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map(([key, val]) => (
                      <tr key={key} className="border-b border-border last:border-0">
                        <td className="px-4 py-2 font-medium text-foreground bg-muted/50">{key}</td>
                        <td className="px-4 py-2 text-muted-foreground">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="py-16 md:py-20 bg-primary">
      <div className="container text-center">
        <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Need Custom Specifications?</h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
          We offer custom processing to meet your exact particle size, purity, and packaging requirements.
        </p>
        <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/contact">Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </>
  );
};

export default Products;
