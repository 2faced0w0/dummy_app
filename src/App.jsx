import { useState } from 'react';
import Navbar from './components/Navbar';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import { CheckCircle2, Package, ArrowRight } from 'lucide-react';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
  cardName: '',
};

function generateOrderNumber() {
  return 'DS-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function SuccessScreen({ orderNumber }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-12">
      <div
        data-testid="success-message"
        className="text-center max-w-md w-full"
      >
        {/* Animated check circle */}
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-2xl shadow-emerald-200 animate-[bounce_0.6s_ease-out]">
            <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full border-4 border-emerald-300 animate-ping opacity-30" />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Order Confirmed!</h1>
        <p className="text-slate-500 mb-6 text-base leading-relaxed">
          Thank you for your purchase. Your Wireless Headphones are on their way!
        </p>

        {/* Order number badge */}
        <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm mb-8">
          <Package className="w-5 h-5 text-indigo-500" />
          <div className="text-left">
            <p className="text-xs text-slate-400 font-medium">Order Number</p>
            <p
              data-testid="order-number"
              className="text-base font-bold text-slate-900 tracking-widest"
            >
              {orderNumber}
            </p>
          </div>
        </div>

        {/* Estimated delivery */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 mb-8 text-left">
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-1">Estimated Delivery</p>
          <p className="text-sm font-bold text-indigo-900">3 – 5 Business Days</p>
          <p className="text-xs text-indigo-400 mt-0.5">A confirmation email has been sent to you.</p>
        </div>

        {/* CTA */}
        <button
          id="continue-shopping-btn"
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-violet-600 transition-colors duration-200 cursor-pointer"
        >
          Continue Shopping
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber] = useState(generateOrderNumber);
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <SuccessScreen orderNumber={orderNumber} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Checkout</h1>
          <p className="text-sm text-slate-400 mt-1">Complete your order in just a few steps.</p>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <span className="text-indigo-600 font-semibold">Cart</span>
          <ArrowRight className="w-3 h-3" />
          <span className="text-indigo-600 font-semibold">Shipping</span>
          <ArrowRight className="w-3 h-3" />
          <span className="font-semibold text-slate-700">Payment</span>
        </div>

        {/* Split pane */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <CheckoutForm formData={formData} onChange={handleFieldChange} />
          <OrderSummary onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
}
