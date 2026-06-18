import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { ROLE_LABELS, type UserRole } from '@/types';
import { mockUsers } from '@/data/mockData';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { GrainOverlay } from '@/components/ui/GrainOverlay';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginAsRole, dashboardPath, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(dashboardPath, { replace: true });
    }
  }, [isAuthenticated, dashboardPath, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const success = await login(email, password);
    setLoading(false);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use a demo account below with password "demo1234".');
    }
  };

  const roles: UserRole[] = ['owner', 'admin', 'manager', 'finance', 'childminder', 'assistant', 'parent'];

  return (
    <div className="min-h-screen flex items-center justify-center gradient-warm relative overflow-hidden p-4">
      <div className="ghost-text absolute inset-x-0 top-1/3 text-center pointer-events-none" aria-hidden="true">LOGIN</div>
      <GrainOverlay />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-3xl text-berry">Rosebery</Link>
          <p className="mt-2 text-berry/60">Sign in to your portal</p>
        </div>
        <form onSubmit={handleSubmit} className="glass rounded-[var(--radius-panel)] p-8 space-y-6">
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} helperText="Demo password: demo1234" required />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</Button>
        </form>
        <div className="mt-8 glass rounded-[var(--radius-card)] p-6">
          <p className="text-sm font-semibold text-berry mb-4">Quick Demo Login</p>
          <div className="grid grid-cols-2 gap-2">
            {roles.map((role) => {
              const user = mockUsers.find((u) => u.role === role);
              return (
                <button
                  key={role}
                  onClick={() => { loginAsRole(role); navigate(`/dashboard/${role}`); }}
                  className="rounded-xl px-3 py-2 text-xs font-medium text-berry bg-white/60 hover:bg-rose/10 hover:text-rose transition-smooth text-left"
                >
                  <span className="block font-semibold">{ROLE_LABELS[role]}</span>
                  <span className="text-berry/50 truncate block">{user?.email}</span>
                </button>
              );
            })}
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-berry/60">
          New family? <Link to="/register-interest" className="text-rose font-semibold hover:underline">Register Interest</Link>
        </p>
      </div>
    </div>
  );
}
