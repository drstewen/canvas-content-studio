import { motion } from "framer-motion";
import { Sparkles, Instagram, Package, Megaphone } from "lucide-react";

export const HeroMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-5xl mx-auto"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-3xl -z-10 scale-110" />
      
      {/* Main Container */}
      <div className="bg-card rounded-2xl lg:rounded-3xl shadow-lg border border-border overflow-hidden">
        {/* Window Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-muted rounded-md px-4 py-1 text-xs text-muted-foreground">
              app.promptstudio.ai
            </div>
          </div>
        </div>

        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[500px]">
          {/* Left Panel - Controls */}
          <div className="lg:w-[380px] p-6 border-b lg:border-b-0 lg:border-r border-border bg-studio-panel">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Content Type</h4>
                <div className="flex gap-2">
                  {[
                    { icon: Instagram, label: "Instagram", active: true },
                    { icon: Megaphone, label: "Ad" },
                    { icon: Package, label: "Product" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex-1 flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 transition-colors ${
                        item.active
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Product / Topic</label>
                <div className="h-10 rounded-lg border border-border bg-background px-3 flex items-center text-sm text-muted-foreground">
                  Wireless Earbuds Pro
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Target Audience</label>
                <div className="h-20 rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted-foreground">
                  Young professionals who love music
                </div>
              </div>

              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-primary text-primary-foreground rounded-xl py-3 px-6 text-center font-semibold shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Generate
              </motion.div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="flex-1 p-6 lg:p-8 flex items-center justify-center bg-studio-canvas">
            <div className="phone-frame w-[200px] lg:w-[240px]">
              <div className="phone-notch scale-75" />
              <div className="phone-screen aspect-[9/19.5]">
                <div className="h-full flex flex-col bg-card">
                  {/* IG Header */}
                  <div className="flex items-center gap-2 p-2 border-b border-border">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent" />
                    <span className="text-xs font-semibold text-foreground">yourbrand</span>
                  </div>
                  
                  {/* IG Image */}
                  <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5" />
                  
                  {/* IG Actions */}
                  <div className="p-2 space-y-1">
                    <div className="flex gap-3">
                      <div className="w-4 h-4 rounded-sm bg-foreground/20" />
                      <div className="w-4 h-4 rounded-sm bg-foreground/20" />
                      <div className="w-4 h-4 rounded-sm bg-foreground/20" />
                    </div>
                    <p className="text-[10px] font-semibold text-foreground">1,234 likes</p>
                    <p className="text-[10px] text-foreground line-clamp-3">
                      <span className="font-semibold">yourbrand </span>
                      🎧 Experience pure sound freedom with our Wireless Earbuds Pro...
                    </p>
                    <p className="text-[10px] text-primary">#wirelessaudio #techlife</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
