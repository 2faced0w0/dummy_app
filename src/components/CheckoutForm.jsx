import { useState } from 'react';
import { User, Mail, MapPin, CreditCard, Lock, Calendar, Hash } from 'lucide-react';

export default function CheckoutForm({ formData, onChange }) {
  const [focused, setFocused] = useState(null);

  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused(null);

  const fieldProps = (name) => ({
    value: formData[name],
    onChange: (e) => onChange(name, e.target.value),
    onFocus: () => handleFocus(name),
    onBlur: handleBlur,
    className: `input-field ${focused === name ? 'ring-2 ring-indigo-500 border-transparent' : ''}`,
  });

  return (
    <div className="flex-1 min-w-0">
      {/* Shipping Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-4">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-indigo-600" />
          </div>
          <h2 className="text-base font-semibold text-slate-800">Shipping Information</h2>
        </div>

        <div className="space-y-4">
          {/* Full Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="label">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                  {...fieldProps('firstName')}
                  className={`input-field pl-9 ${focused === 'firstName' ? 'ring-2 ring-indigo-500 border-transparent' : ''}`}
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="label">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                required
                {...fieldProps('lastName')}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="label">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                {...fieldProps('email')}
                className={`input-field pl-9 ${focused === 'email' ? 'ring-2 ring-indigo-500 border-transparent' : ''}`}
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="label">Street Address</label>
            <input
              id="address"
              type="text"
              placeholder="123 Main Street"
              required
              {...fieldProps('address')}
            />
          </div>

          {/* City / State / Zip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="col-span-1 sm:col-span-1">
              <label htmlFor="city" className="label">City</label>
              <input id="city" type="text" placeholder="New York" required {...fieldProps('city')} />
            </div>
            <div>
              <label htmlFor="state" className="label">State</label>
              <input id="state" type="text" placeholder="NY" required {...fieldProps('state')} />
            </div>
            <div>
              <label htmlFor="zip" className="label">ZIP Code</label>
              <input id="zip" type="text" placeholder="10001" required {...fieldProps('zip')} />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-violet-600" />
          </div>
          <h2 className="text-base font-semibold text-slate-800">Payment Details</h2>
          <div className="ml-auto flex gap-1.5">
            {['VISA', 'MC', 'AMEX'].map((card) => (
              <span key={card} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                {card}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {/* Card Number */}
          <div>
            <label htmlFor="cardNumber" className="label">Card Number</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
                {...fieldProps('cardNumber')}
                className={`input-field pl-9 tracking-widest ${focused === 'cardNumber' ? 'ring-2 ring-indigo-500 border-transparent' : ''}`}
              />
            </div>
          </div>

          {/* Expiry / CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="label">Expiry Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="expiry"
                  type="text"
                  placeholder="MM / YY"
                  maxLength={7}
                  required
                  {...fieldProps('expiry')}
                  className={`input-field pl-9 ${focused === 'expiry' ? 'ring-2 ring-indigo-500 border-transparent' : ''}`}
                />
              </div>
            </div>
            <div>
              <label htmlFor="cvv" className="label">CVV</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="cvv"
                  type="text"
                  placeholder="•••"
                  maxLength={4}
                  required
                  {...fieldProps('cvv')}
                  className={`input-field pl-9 ${focused === 'cvv' ? 'ring-2 ring-indigo-500 border-transparent' : ''}`}
                />
              </div>
            </div>
          </div>

          {/* Cardholder Name */}
          <div>
            <label htmlFor="cardName" className="label">Name on Card</label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="cardName"
                type="text"
                placeholder="John Doe"
                required
                {...fieldProps('cardName')}
                className={`input-field pl-9 ${focused === 'cardName' ? 'ring-2 ring-indigo-500 border-transparent' : ''}`}
              />
            </div>
          </div>
        </div>

        {/* Security note */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
          <Lock className="w-3.5 h-3.5" />
          <span>Your payment information is encrypted and secure.</span>
        </div>
      </div>
    </div>
  );
}
