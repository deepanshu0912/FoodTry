import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChefHat, Truck, Calendar, BookOpen, Send, Loader2, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { services } from "@/data/restaurants";

const serviceIcons: Record<string, React.ReactNode> = {
  s1: <Truck className="w-8 h-8" />,
  s2: <ChefHat className="w-8 h-8" />,
  s3: <Calendar className="w-8 h-8" />,
  s4: <BookOpen className="w-8 h-8" />,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRequest = (service: typeof services[0]) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    setLoading(true);
    setError("");

    const orderDetails = `
Service: ${selectedService.name}
Price: ${selectedService.price}
Customer: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message || "None"}
    `.trim();

    try {
      const response = await fetch("http://localhost:3000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vendor: "FoodieHub Services",
          item: orderDetails,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setDialogOpen(false);
          setSuccess(false);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        }, 2000);
      } else {
        setError("Failed to send request. Please try again.");
      }
    } catch {
      setError("Could not connect to server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Restaurants
          </Link>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
              Our <span className="text-gradient">Premium</span> Services
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
              Elevate your culinary experience with our professional food services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-card rounded-2xl p-6 shadow-warm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 gradient-warm rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                    {serviceIcons[service.id]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">
                        {service.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRequest(service)}
                      >
                        Request Service
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Request Service
            </DialogTitle>
          </DialogHeader>

          {success ? (
            <div className="py-8 text-center">
              <CheckCircle className="w-16 h-16 text-warm-sage mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Request Sent!
              </h3>
              <p className="text-muted-foreground">
                We'll contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {selectedService && (
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 gradient-warm rounded-lg flex items-center justify-center text-primary-foreground">
                      {serviceIcons[selectedService.id]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {selectedService.name}
                      </h4>
                      <p className="text-primary font-bold">
                        {selectedService.price}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-background"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <Textarea
                  placeholder="Tell us about your requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background resize-none"
                  rows={4}
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
                {loading ? "Sending..." : "Send Request"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 FoodieHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
