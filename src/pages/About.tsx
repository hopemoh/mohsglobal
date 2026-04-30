import { Shield, Target, Eye, Award, Users, Clock } from "lucide-react";
import { PageMeta } from "@/hooks/usePageMeta";
import processingImg from "@/assets/processing-plant.jpg";
import heroImg from "@/assets/hero-mining.jpg";

const values = [
  { icon: Shield, title: "Quality Assurance", desc: "ISO 9001:2015 certified operations with rigorous testing at every processing stage." },
  { icon: Target, title: "Precision Processing", desc: "Advanced crushing and grinding technology for exact particle specifications." },
  { icon: Users, title: "Client Partnership", desc: "We work closely with clients to understand and meet their unique mineral requirements." },
  { icon: Award, title: "Industry Leadership", desc: "Recognized as a trusted supplier by leading construction and industrial firms." },
  { icon: Clock, title: "Reliable Delivery", desc: "On-time delivery with our own fleet of transport vehicles and logistics network." },
  { icon: Eye, title: "Sustainability", desc: "Responsible mining practices with environmental rehabilitation and waste minimization." },
];

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GeoCore Minerals",
    "description": "GeoCore Minerals is a premium mineral processing company specializing in limestone, dolomite, and lepidolite extraction. Established in 2000, we serve construction, agriculture, and industrial sectors globally.",
    "url": "https://geocoreminerals.com/about",
    "logo": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1a0029db-a55b-49f4-b929-e023376c0e3f/id-preview-0d494291--78eb7ae8-738c-4ea0-82bc-61659bc871b9.lovable.app-1775154371803.png",
    "sameAs": [
      "https://www.facebook.com/geocoreminerals",
      "https://www.linkedin.com/company/geocoreminerals"
    ],
    "foundingDate": "2000",
    "numberOfEmployees": "50-100"
  };

  return (
    <>
      <PageMeta 
        title="About Us"
        description="Learn about GeoCore Minerals - a premium mineral supplier with over 25 years of experience in limestone, dolomite, and lepidolite processing. ISO certified, sustainable practices."
        keywords="about GeoCore Minerals, mineral supplier, limestone processing, dolomite extraction, lepidolite supplier, mining company history"
        path="/about"
        schema={schema}
      />
    {/* Hero */}
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="GeoCore mining operations" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-earth-dark/80" />
      </div>
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">About GeoCore Minerals</h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">
          Over two decades of excellence in mineral extraction, processing, and supply.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Our Story</p>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Built on a Foundation of Quality
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2000, GeoCore Minerals began as a small limestone quarry serving local construction projects. Over the years, through strategic expansion and relentless commitment to quality, we've grown into one of the region's most trusted mineral resource companies.
              </p>
              <p>
                Today, we operate multiple quarries and state-of-the-art processing facilities, specializing in limestone, dolomite, and lepidolite. Our products serve industries ranging from construction and agriculture to advanced battery technology.
              </p>
              <p>
                Our success is built on three pillars: uncompromising quality standards, reliable logistics, and a deep understanding of our clients' needs. Every ton of mineral we process reflects our commitment to excellence.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={processingImg} alt="Our processing facility" loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg bg-card border border-border">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide the highest quality mineral resources through responsible extraction and advanced processing, enabling our clients' success while maintaining the highest environmental and safety standards.
            </p>
          </div>
          <div className="p-8 rounded-lg bg-primary text-primary-foreground">
            <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
            <p className="text-primary-foreground/85 leading-relaxed">
              To be the most trusted and innovative mineral processing company, recognized globally for quality, sustainability, and client partnership in every mineral we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Our Values</p>
          <h2 className="text-3xl font-heading font-bold text-foreground">What Drives Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <v.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export default About;
