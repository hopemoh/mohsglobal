import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    slug: "limestone-construction-guide",
    title: "The Complete Guide to Limestone in Modern Construction",
    excerpt: "Discover how limestone continues to be one of the most versatile building materials, from foundations to decorative facades, and why quality matters.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Industry Guide",
  },
  {
    slug: "dolomite-agriculture",
    title: "Dolomite in Agriculture: Boosting Soil Health Naturally",
    excerpt: "Learn how agricultural-grade dolomite improves soil pH, adds essential magnesium, and increases crop yields for sustainable farming.",
    date: "February 28, 2026",
    readTime: "4 min read",
    category: "Agriculture",
  },
  {
    slug: "lepidolite-battery-technology",
    title: "Lepidolite: The Rising Star of Battery Technology",
    excerpt: "As demand for lithium-ion batteries surges, lepidolite emerges as a critical lithium source. Here's what makes it essential for the energy transition.",
    date: "February 10, 2026",
    readTime: "6 min read",
    category: "Technology",
  },
  {
    slug: "mineral-processing-quality",
    title: "Quality Control in Mineral Processing: Our Approach",
    excerpt: "A behind-the-scenes look at how GeoCore Minerals maintains 99.5% purity standards through advanced testing and processing techniques.",
    date: "January 20, 2026",
    readTime: "4 min read",
    category: "Company",
  },
  {
    slug: "sustainable-mining-practices",
    title: "Sustainable Mining: Balancing Production and Environment",
    excerpt: "How modern mining operations can minimize environmental impact while meeting growing demand for mineral resources.",
    date: "January 5, 2026",
    readTime: "5 min read",
    category: "Sustainability",
  },
  {
    slug: "choosing-right-mineral-supplier",
    title: "How to Choose the Right Mineral Supplier for Your Business",
    excerpt: "Key factors to consider when selecting a mineral supplier — from quality certifications to logistics capabilities and customization options.",
    date: "December 18, 2025",
    readTime: "3 min read",
    category: "Business",
  },
];

const Blog = () => (
  <>
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Insights & Resources</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Industry knowledge, mineral guides, and expert insights from the GeoCore Minerals team.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="group rounded-lg bg-card border border-border overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-earth-warm flex items-center justify-center">
                <span className="text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                </div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
