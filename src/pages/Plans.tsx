import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "10 generations / month",
      "3 content types",
      "Basic templates",
      "Copy & export",
    ],
    current: true,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ month",
    description: "For serious content creators",
    features: [
      "Unlimited generations",
      "All content types",
      "Premium templates",
      "Image prompts",
      "Priority support",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/ month",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "5 team members",
      "Brand kit",
      "Analytics dashboard",
      "Custom templates",
      "Dedicated support",
    ],
  },
];

export default function Plans() {
  const currentUsage = 7;
  const maxUsage = 10;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-16 border-b border-border bg-card flex items-center px-4 lg:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/studio">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Plans & Quota</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Usage Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-foreground">Monthly Usage</h3>
                <p className="text-sm text-muted-foreground">Generations this month</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-foreground">{currentUsage}</span>
                <span className="text-muted-foreground">/{maxUsage}</span>
              </div>
            </div>
            <Progress value={(currentUsage / maxUsage) * 100} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {maxUsage - currentUsage} generations remaining
            </p>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Popular
                  </span>
                </div>
              )}

              {plan.current && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Current Plan
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "studio" : plan.current ? "outline" : "secondary"}
                className="w-full"
                disabled={plan.current}
              >
                {plan.current ? "Current Plan" : plan.highlighted ? "Upgrade to Pro" : "Choose Plan"}
              </Button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
