import { Headphones, Shield, Truck, ChevronRight, Tag } from 'lucide-react';

const ORDER_ITEMS = [
  {
    id: 'item-1',
    name: 'Wireless Headphones Pro',
    description: 'Noise-cancelling, 30h battery',
    price: 99,
    color: 'from-indigo-500 to-violet-600',
  },
];

const PROMO_DISCOUNT = 10;
const SHIPPING_COST = 0;

export default function OrderSummary({ onSubmit }) {
  const subtotal = ORDER_ITEMS.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal - PROMO_DISCOUNT + SHIPPING_COST;

  return (
    <div className="w-full lg:w-96 flex-shrink-0">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-24">
        <h2 className="text-base font-semibold text-slate-800 mb-5">Order Summary</h2>

        {/* Items */}
        <div className="space-y-4 mb-5">
          {ORDER_ITEMS.map((item) => (
            <div key={item.id} className="flex items-center gap-3.5">
              {/* Product icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                <Headphones className="w-6 h-6 text-white" />
              </div>
              {/* Details */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{item.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
              </div>
              <span className="text-sm font-bold text-slate-800">${item.price}</span>
            </div>
          ))}
        </div>

        {/* Promo code */}
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-3 py-2.5 mb-5">
          <Tag className="w-4 h-4 text-green-600 flex-shrink-0" />
          <span className="text-xs font-semibold text-green-700">SAVE10 applied</span>
          <span className="ml-auto text-xs font-bold text-green-600">-${PROMO_DISCOUNT}</span>
        </div>

        {/* Price breakdown */}
        <div className="space-y-2.5 text-sm border-t border-slate-100 pt-4 mb-4">
          <div className="flex justify-between text-slate-500">
            <span>Subtotal</span>
            <span>${subtotal}.00</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Discount</span>
            <span className="text-green-600 font-medium">-${PROMO_DISCOUNT}.00</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>
          <div className="flex justify-between font-bold text-base text-slate-900 pt-2 border-t border-slate-100">
            <span>Total</span>
            <span>${total}.00</span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-around text-xs text-slate-400 mb-5 py-3 border-y border-slate-100">
          <div className="flex flex-col items-center gap-1">
            <Shield className="w-4 h-4 text-indigo-400" />
            <span>Secure</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Truck className="w-4 h-4 text-indigo-400" />
            <span>Free Ship</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Tag className="w-4 h-4 text-indigo-400" />
            <span>Best Price</span>
          </div>
        </div>

        {/* THE CRITICAL SUBMIT BUTTON — must keep this exact id */}
        <button
          id="submit-order-btn"
          type="button"
          onClick={onSubmit}
          className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-[0.98] text-white font-semibold rounded-xl py-3.5 text-sm shadow-lg shadow-indigo-200 transition-all duration-200 cursor-pointer select-none"
        >
          <span>Place Order – ${total}.00</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <p className="mt-3 text-center text-[11px] text-slate-400">
          By placing your order you agree to our Terms of Service.
        </p>
      </div>
    </div>
  );
}
