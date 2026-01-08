import { useState } from "react";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { MenuItem } from "@/data/restaurants";

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: MenuItem | null;
  vendorName: string;
}

export function OrderDialog({ open, onOpenChange, item, vendorName }: OrderDialogProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!item) return;

    setLoading(true);
    setError("");

    const orderDetails = `
Item: ${item.name}
Price: $${item.price.toFixed(2)}
Customer: ${name}
Phone: ${phone}
Address: ${address}
Notes: ${notes || "None"}
    `.trim();

    try {
      const response = await fetch("http://localhost:3000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vendor: vendorName,
          item: orderDetails,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          onOpenChange(false);
          setSuccess(false);
          setName("");
          setPhone("");
          setAddress("");
          setNotes("");
        }, 2000);
      } else {
        setError("Failed to place order. Please try again.");
      }
    } catch {
      setError("Could not connect to server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Place Your Order</DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <CheckCircle className="w-16 h-16 text-warm-sage mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Order Placed!
            </h3>
            <p className="text-muted-foreground">
              We'll confirm your order shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{vendorName}</p>
                  <p className="text-primary font-bold mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background"
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-background"
              />
              <Input
                placeholder="Delivery Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="bg-background"
              />
              <Textarea
                placeholder="Special instructions (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="bg-background resize-none"
                rows={3}
              />
            </div>

            {error && (
              <p className="text-destructive text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {loading ? "Placing Order..." : "Place Order"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
