import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Instagram, Megaphone, Package, Clock, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const historyItems = [
  {
    id: 1,
    type: "instagram",
    title: "Wireless Earbuds Pro",
    preview: "🎧 Experience pure sound freedom with our Wireless Earbuds Pro...",
    createdAt: "2 hours ago",
  },
  {
    id: 2,
    type: "ad",
    title: "Summer Sale Campaign",
    preview: "Stop settling for ordinary. Get 50% off all premium products...",
    createdAt: "Yesterday",
  },
  {
    id: 3,
    type: "product",
    title: "Smart Watch Series X",
    preview: "Introducing the next generation of wearable technology...",
    createdAt: "3 days ago",
  },
  {
    id: 4,
    type: "instagram",
    title: "Coffee Brand Launch",
    preview: "☕ Wake up to perfection. Our new artisan coffee blend...",
    createdAt: "1 week ago",
  },
];

const typeIcons = {
  instagram: Instagram,
  ad: Megaphone,
  product: Package,
};

export default function History() {
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
              <span className="text-lg font-bold text-foreground">History</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {historyItems.map((item, index) => {
            const Icon = typeIcons[item.type as keyof typeof typeIcons];
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-4 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h3 className="font-semibold text-foreground truncate">{item.title}</h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.createdAt}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{item.preview}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {historyItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No history yet</h3>
            <p className="text-muted-foreground mb-6">Your generated content will appear here</p>
            <Link to="/studio">
              <Button variant="hero">Create your first content</Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
