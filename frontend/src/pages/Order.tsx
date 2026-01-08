import { useState } from "react";

export default function Order() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = {
      vendor: (form.name as any).value,
      item: `Phone: ${(form.phone as any).value}\nRequest: ${
        (form.request as any).value
      }`,
    };

    const res = await fetch("http://localhost:3000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const msg = await res.text();
    alert(msg);
    setLoading(false);
    form.reset();
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-display mb-6">Place an Order</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-card p-6 rounded-lg shadow-warm"
      >
        <input
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="request"
          placeholder="What do you want?"
          rows={4}
          required
          className="w-full p-3 border rounded"
        />

        <button
          disabled={loading}
          className="w-full py-3 rounded gradient-warm text-white font-semibold"
        >
          {loading ? "Sending..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
}
