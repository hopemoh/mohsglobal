import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, Truck, Settings, Beaker, Package, ArrowRight } from "lucide-react";
import { PageMeta } from "@/hooks/usePageMeta";
import processingImg from "@/assets/processing-plant.jpg";

const services = [
  {
    icon: Factory,
    title: "Mineral Processing",
    desc: "State-of-the-art crushing, grinding, and classification facilities that produce mineral products to exact specifications. Our processing plants handle limestone, dolomite, and lepidolite with precision control over particle size and purity.",
    features: ["Multi-stage crushing systems", "Ball mill and vertical mill grinding", "Air classification for fine powders", "Quality testing at every stage"],
  },
  {
    icon: Truck,
    title: "Bulk Supply & Logistics",
    desc: "Reliable bulk supply capabilities with our own fleet of transport vehicles. We manage the complete supply chain from quarry to your facility, ensuring on-time delivery and consistent quality.",
    features: ["Dedicated transport fleet", "Nationwide delivery network", "Flexible packaging options", "Just-in-time supply scheduling"],
  },
  {
    icon: Settings,
    title: "Custom Orders",
    desc: "We understand every client has unique requirements. Our custom processing services allow you to specify exact particle sizes, purity levels, chemical composition, and packaging to match your production needs.",
    features: ["Custom mesh sizes & grading", "Specified chemical composition", "Private labeling & packaging", "Sample testing before bulk orders"],
  },
  {
    icon: Beaker,
    title: "Quality Testing & Analysis",
    desc: "In-house laboratory facilities for comprehensive mineral analysis. We provide detailed test reports and certificates of analysis with every shipment to ensure your specifications are met.",
    features: ["XRF chemical analysis", "Particle size distribution", "Moisture & LOI testing", "Certificate of analysis per batch"],
  },
  {
    icon: Package,
    title: "Packaging Solutions",
    desc: "Flexible packaging options to suit your storage, handling, and transport requirements. From bulk tipper loads to precision-packed bags, we deliver your minerals ready for use.",
    features: ["25kg & 50kg bags", "1-ton jumbo bags (FIBC)", "Bulk tipper loads", "Shrink-wrapped pallets"],
  },
];

const Services = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mineral Processing & Supply Services",
    "description": "Comprehensive mineral processing, bulk supply, logistics, and custom order services for limestone, dolomite, and lepidolite.",
    "provider": {
      "@type": "Organization",
      "name": "Mohsglobal Resources",
      "url": "https://www.mohsglobal.site"
    },
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mineral Processing Services",
      "itemListElement": services.map((s, idx) => ({
        "@type": "Offer",
        "position": idx + 1,
        "name": s.title,
        "description": s.desc
      }))
    }
  };

  return (
    <>
      <PageMeta 
        title="Services"
        description="Mohsglobal Resources offers mineral processing, bulk supply, custom orders, quality testing, and flexible packaging solutions for limestone, dolomite, and lepidolite."
        keywords="mineral processing, bulk supply, custom mineral orders, quality testing, logistics, packaging solutions"
        path="/services"
        schema={schema}
      />
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive mineral processing and supply solutions tailored to your industrial requirements.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="space-y-12">
          {services.map((s, idx) => (
            <div key={s.title} className={`grid lg:grid-cols-5 gap-8 items-start p-8 rounded-lg border border-border bg-card ${idx % 2 === 1 ? "" : ""}`}>
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="font-semibold text-sm text-foreground mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Facility */}
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={processingImg} alt="Our processing facility" loading="lazy" width={1200} height={800} className="w-full h-auto object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Our Facility</p>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Modern Processing Infrastructure</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our facilities feature the latest in mineral processing technology, enabling us to produce products at scale while maintaining the highest quality standards. With a combined processing capacity of over 50,000 tons per month, we can handle orders of any size.
            </p>
            <Button asChild>
              <Link to="/contact">Schedule a Facility Tour <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;
