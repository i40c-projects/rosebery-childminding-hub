import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/services', label: 'Services' },
  { to: '/parents', label: 'Parents' },
  { to: '/become-a-childminder', label: 'Childminders' },
  { to: '/safety', label: 'Safety' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, dashboardPath } = useAuth();
  const location = useLocation();

  return (
    <header className="liquid-glass sticky top-0 z-40 rounded-none border-x-0 border-t-0 bg-cream/62 shadow-[0_12px_38px_rgba(122,31,77,0.08)]">
      <nav className="mx-auto flex max-w-[1480px] items-center justify-between px-4 py-3.5 sm:px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3 text-berry transition-smooth hover:text-rose">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] gradient-rose text-white shadow-lg shadow-rose/20 ring-1 ring-white/60">
            <span className="font-display text-lg">R</span>
          </span>
          <span className="font-display text-2xl tracking-wider">Rosebery</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-smooth',
                  isActive ? 'bg-white/80 text-rose shadow-sm ring-1 ring-white/70' : 'text-berry/75 hover:bg-white/55 hover:text-rose'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/register-interest">
            <Button variant="secondary" size="sm">Register Interest</Button>
          </Link>
          <Link to={isAuthenticated ? dashboardPath : '/login'}>
            <Button size="sm">{isAuthenticated ? 'Dashboard' : 'Login'}</Button>
          </Link>
        </div>

        <button
          className="lg:hidden rounded-2xl bg-white/55 p-2 text-berry shadow-sm ring-1 ring-white/70 hover:bg-white/80 transition-smooth"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden space-y-2 border-t border-white/55 bg-cream/82 px-4 py-4 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block rounded-2xl px-4 py-3 text-sm font-semibold transition-smooth',
                location.pathname === link.to ? 'bg-white/80 text-rose shadow-sm' : 'text-berry hover:bg-white/60'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-berry/10">
            <Link to="/register-interest" onClick={() => setMobileOpen(false)}>
              <Button variant="secondary" className="w-full">Register Interest</Button>
            </Link>
            <Link to={isAuthenticated ? dashboardPath : '/login'} onClick={() => setMobileOpen(false)}>
              <Button className="w-full">{isAuthenticated ? 'Dashboard' : 'Login'}</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
