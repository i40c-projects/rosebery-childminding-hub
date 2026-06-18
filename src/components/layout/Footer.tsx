import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/55 bg-white/35 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-3xl text-berry">Rosebery</Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-berry/70">
              Rosebery Childminding Hub is a community childcare initiative operating under Liverpool Muslim Society.
              Supporting families, independent childminders and community benefit.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-berry">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-berry/70">
              <li><Link to="/about" className="hover:text-rose transition-smooth">About</Link></li>
              <li><Link to="/how-it-works" className="hover:text-rose transition-smooth">How It Works</Link></li>
              <li><Link to="/services" className="hover:text-rose transition-smooth">Services</Link></li>
              <li><Link to="/safety" className="hover:text-rose transition-smooth">Safety</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-berry">Get Started</h4>
            <ul className="mt-4 space-y-2 text-sm text-berry/70">
              <li><Link to="/parents" className="hover:text-rose transition-smooth">For Parents</Link></li>
              <li><Link to="/become-a-childminder" className="hover:text-rose transition-smooth">Become a Childminder</Link></li>
              <li><Link to="/register-interest" className="hover:text-rose transition-smooth">Register Interest</Link></li>
              <li><Link to="/contact" className="hover:text-rose transition-smooth">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-berry/10 pt-8 text-sm text-berry/50 sm:flex-row">
          <p>Copyright {new Date().getFullYear()} Rosebery Childminding Hub. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <Heart className="h-4 w-4 text-rose" />
            Operating under Liverpool Muslim Society
          </p>
        </div>
      </div>
    </footer>
  );
}
