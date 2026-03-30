import { ShoppingBag, Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            Dummy<span className="text-indigo-600">Store</span>
          </span>
        </div>

        {/* Cart badge */}
        <div className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 cursor-pointer transition-colors duration-200">
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
          <span className="text-sm font-medium hidden sm:block">Cart</span>
        </div>
      </div>
    </header>
  );
}
