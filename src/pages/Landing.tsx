import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "@/components/landing/HeroMockup";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description: "Create compelling content in seconds with advanced AI that understands your brand voice.",
  },
  {
    icon: Target,
    title: "Audience-Focused",
    description: "Tailor your message to specific audiences for maximum engagement and conversion.",
  },
  {
    icon: Palette,
    title: "Live Preview",
    description: "See your content come to life in real-time with beautiful, platform-specific previews.",
  },
  {
    icon: Zap,
    title: "Export Anywhere",
    description: "One-click export to all major platforms. Copy, download, or share instantly.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">PromptStudio</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI Content Studio</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Design sales-ready content,{" "}
              <span className="gradient-text">not just text</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Product descriptions, ads & Instagram posts — with live preview. 
              Create content that converts, in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/studio">
                <Button variant="hero" size="xl" className="group">
                  Try it free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="hero-outline" size="xl">
                  Watch demo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Mockup */}
          <HeroMockup />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need to create
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete toolkit for content creators, marketers, and businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-card rounded-3xl p-8 lg:p-16 text-center overflow-hidden border border-border"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 -z-10" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to transform your content?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of creators and businesses using PromptStudio to create high-converting content.
            </p>
            <Link to="/register">
              <Button variant="hero" size="xl" className="group">
                Start creating for free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold text-foreground">PromptStudio</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 PromptStudio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
