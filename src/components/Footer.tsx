import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-earth-dark text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="Mohsglobal Resources"
              className="h-10 w-auto brightness-200"
            />
            <span className="font-heading text-lg font-bold">
              Mohsglobal Resources
            </span>
          </div>

          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Premium mineral processing solutions. Specializing in limestone, dolomite, and lepidolite extraction and processing.
          </p>

          {/* SOCIAL ICONS ADDED HERE */}
          <div className="flex gap-4 mt-4 items-center">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61582779271950"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                alt="Facebook"
                className="w-5 h-5 invert"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/69710289/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5 invert"
              />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-base font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Insights" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-heading text-base font-semibold mb-4">
            Our Products
          </h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Limestone Powder & Lumps</li>
            <li>Dolomite Powder & Lumps</li>
            <li>Lepidolite Powder & Lumps</li>
            <li>Custom Processing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-base font-semibold mb-4">
            Contact Info
          </h3>

          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              KM 8 Freedom Industrial Way Ikpeshi, NG 32100
            </li>

            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              +2348086448751
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              info@mohsglobal.site | mohsglobalresources@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Mohsglobal Resources. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
