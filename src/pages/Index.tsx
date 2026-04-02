import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Truck, Shield, Star, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-mining.jpg";
import limestoneImg from "@/assets/limestone.jpg";
import dolomiteImg from "@/assets/dolomite.jpg";
import lepidoliteImg from "@/assets/lepidolite.jpg";
import processingImg from "@/assets/processing-plant.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const products = [
  { name: "Limestone", desc: "High-purity calcium carbonate for construction, agriculture, and industrial use.", img: limestoneImg, slug: "limestone" },
  { name: "Dolomite", desc: "Premium magnesium-calcium carbonate ideal for steel, glass, and agriculture.", img: dolomiteImg, slug: "dolomite" },
  { name: "Lepidolite", desc: "Lithium-bearing mica mineral essential for battery technology and ceramics.", img: lepidoliteImg, slug: "lepidolite" },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500K+", label: "Tons Processed" },
  { value: "200+", label: "Industrial Clients" },
  { value: "99.5%", label: "Purity Grade" },
];

const testimonials = [
  { name: "James Mitchell", role: "Procurement Director, BuildCorp", text: "GeoCore has been our trusted limestone supplier for over 8 years. Their consistency in quality and reliability in delivery is unmatched." },
  { name: "Sarah Chen", role: "Operations Manager, GlassTech Industries", text: "The purity of their dolomite products consistently exceeds specifications. A truly professional operation from mine to delivery." },
  { name: "Robert Okafor", role: "CEO, AgriGrow Solutions", text: "We've seen a 30% improvement in soil treatment results since switching to GeoCore's agricultural-grade limestone." },
];

const faqs = [
  { q: "What mineral products do you offer?", a: "We specialize in limestone, dolomite, and lepidolite, available in both powdered and lump forms. We also offer custom processing to meet specific particle size and purity requirements." },
  { q: "What industries do you serve?", a: "We serve construction, agriculture, steel manufacturing, glass production, ceramics, water treatment, battery technology, and many other industrial sectors." },
  { q: "Do you offer bulk supply and custom orders?", a: "Yes! We handle bulk orders of any scale and offer custom processing including specific mesh sizes, purity levels, and packaging requirements." },
  { q: "What are your quality certifications?", a: "Our operations hold ISO 9001:2015 certification, and our products undergo rigorous quality testing at every stage of processing." },
  { q: "How can I request a quote?", a: "You can request a quote through our Contact page, call us directly, or email info@geocoreminerals.com. We typically respond within 24 hours." },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="GeoCore Minerals quarry operations" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(145,35%,28%,0.85), hsla(200,10%,15%,0.75))" }} />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-4">
            Trusted Since 2000
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Premium Mineral Processing Solutions
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-8 leading-relaxed">
            Industry-leading extraction and processing of limestone, dolomite, and lepidolite. Delivering quality minerals for construction, agriculture, and industrial applications worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card border-y border-border">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="animate-count-up">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Premium Mineral Resources
          </h2>
          <p className="text-muted-foreground">Available in powdered and lump forms, processed to the highest industry standards.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link to="/products" key={p.slug} className="group rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={`${p.name} mineral product`} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Decades of Excellence in Mineral Processing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 25 years in mineral extraction and processing, GeoCore Minerals delivers unmatched quality, reliability, and service to industries across the globe.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "ISO Certified", desc: "ISO 9001:2015 quality management" },
                { icon: Factory, title: "Advanced Processing", desc: "State-of-the-art crushing & grinding" },
                { icon: Truck, title: "Reliable Logistics", desc: "On-time bulk delivery nationwide" },
                { icon: Star, title: "99.5% Purity", desc: "Stringent quality control at every stage" },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 p-4 rounded-lg bg-card border border-border">
                  <f.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{f.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={processingImg} alt="GeoCore mineral processing plant" loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-lg bg-card border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium text-foreground">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24 bg-primary">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Contact us today for a customized quote on bulk mineral supplies. Our team is ready to serve your industrial needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="tel:+1234567890">Call Us Now</a>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Index;
