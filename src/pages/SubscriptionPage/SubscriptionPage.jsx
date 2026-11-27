import React, { useState } from "react";

const PLANS = [
  {
    id: "5-meals",
    name: "5 Meals / Week",
    description: "Great for busy weeks or solo meals.",
    priceNote: "Price to be confirmed",
  },
  {
    id: "10-meals",
    name: "10 Meals / Week",
    description: "Ideal for households or full-week meal prep.",
    priceNote: "Price to be confirmed",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Choose a plan",
    text: "Pick a weekly meal option that fits your routine, such as 5 or 10 meals a week.",
  },
  {
    step: "2",
    title: "Pick your dishes",
    text: "Select your preferred dishes and dietary customizations for the week.",
  },
  {
    step: "3",
    title: "Get weekly delivery",
    text: "Receive your meals on a fixed delivery day, with flexibility to pause or cancel anytime.",
  },
];

const FAQS = [
  {
    q: "How does billing work right now?",
    a: "There is no automatic recurring charge yet. We collect your sign-up request and reach out directly to confirm plan details and pricing.",
  },
  {
    q: "Can I pause or cancel my subscription?",
    a: "Yes, you can pause or cancel anytime before your weekly cutoff.",
  },
  {
    q: "Is there a fixed delivery day?",
    a: "Yes, deliveries run on a set weekly schedule, which we will confirm with you when following up on your request.",
  },
];

const SubscriptionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredPlan: "5 Meals / Week",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handlePlanSelect = (planName) => {
    setFormData((prev) => ({ ...prev, preferredPlan: planName }));
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }

    // మీ backend endpoint లేదా form service ఉన్నప్పుడు ఇక్కడ POST request పంపవచ్చు
    // ఉదాహరణ: await api.post("/subscriptions/", formData);
    setSubmitted(true);
  };

  return (
    <main className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-12 space-y-16 font-inter text-black">
      {/* 1. Heading */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Eat Better Every Week
        </h1>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Simple weekly meal plans with a fixed delivery day and the freedom to pause or cancel anytime.
        </p>
      </section>

      {/* 2. How It Works (3 Steps) */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="border border-gray-200 rounded-2xl p-6 space-y-2 bg-white shadow-sm"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E6B220] text-white font-bold text-sm">
                {item.step}
              </span>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Plan Options */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl md:text-3xl font-bold">Plan Options</h2>
          <p className="text-sm text-gray-600">
            Fixed delivery day • Pause or cancel anytime • Prices to be confirmed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLANS.map((plan) => {
            const isSelected = formData.preferredPlan === plan.name;
            return (
              <div
                key={plan.id}
                onClick={() => handlePlanSelect(plan.name)}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all space-y-3 ${
                  isSelected
                    ? "border-[#E6B220] bg-[#E6B220]/5"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {plan.priceNote}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
                <ul className="text-sm text-gray-700 space-y-1 pt-1">
                  <li>• Fixed weekly delivery day</li>
                  <li>• Pause or cancel anytime</li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Short FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">FAQ</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq) => (
            <div
              key={faq.q}
              className="border border-gray-200 rounded-xl p-5 bg-white space-y-1.5"
            >
              <h3 className="font-bold text-base">{faq.q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Sign-Up Form */}
      <section className="max-w-xl mx-auto border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm space-y-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Join the Weekly Subscription</h2>
          <p className="text-sm text-gray-600">
            Submit your details and we will contact you to confirm your plan and delivery day.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-800 space-y-1">
            <p className="font-bold">Thank you for signing up!</p>
            <p>
              We received your request for <strong>{formData.preferredPlan}</strong> and will contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#E6B220]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#E6B220]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+46 70 123 45 67"
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#E6B220]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Preferred Plan</label>
              <select
                name="preferredPlan"
                value={formData.preferredPlan}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#E6B220] bg-white"
              >
                <option value="5 Meals / Week">5 Meals / Week (Price to be confirmed)</option>
                <option value="10 Meals / Week">10 Meals / Week (Price to be confirmed)</option>
              </select>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-[20px] bg-[#E6B220] text-white font-bold text-sm md:text-base hover:opacity-95 transition-opacity cursor-pointer"
            >
              Request Subscription
            </button>
          </form>
        )}
      </section>
    </main>
  );
};

export default SubscriptionPage;