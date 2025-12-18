import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, History, CreditCard, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ControlPanel, GenerateData } from "@/components/studio/ControlPanel";
import { PreviewCanvas } from "@/components/studio/PreviewCanvas";
import { ContentType } from "@/components/studio/ContentTypeSelector";

// Mock generated content
const mockContent = {
  instagram: {
    caption: "🎧 Experience pure sound freedom with our Wireless Earbuds Pro. Crystal-clear audio meets all-day comfort. Perfect for your daily hustle, workout sessions, or those moments when you just need to escape into your favorite playlist.",
    hashtags: ["wirelessaudio", "techlife", "musiclovers", "audioexperience", "earbudspro"],
    imagePrompt: "Sleek wireless earbuds floating against a gradient purple and teal background, with soft lighting and subtle glow effects, product photography style, minimalist aesthetic",
    variants: {
      short: "🎧 Pure sound freedom. Crystal-clear audio meets all-day comfort. Your perfect audio companion.",
      medium: "🎧 Experience pure sound freedom with our Wireless Earbuds Pro. Crystal-clear audio meets all-day comfort. Perfect for your daily hustle, workout sessions, or those moments when you just need to escape into your favorite playlist.",
      long: "🎧 Experience pure sound freedom with our Wireless Earbuds Pro. Crystal-clear audio meets all-day comfort, designed for the modern lifestyle. Whether you're crushing your daily hustle, powering through an intense workout, or just need to escape into your favorite playlist — these earbuds deliver. Premium drivers. 8-hour battery life. Sweat-resistant design. Your perfect audio companion awaits.",
    },
  },
  ad: {
    caption: "Stop settling for ordinary audio. The Wireless Earbuds Pro delivers studio-quality sound in a pocket-sized package. 40% off for early adopters.",
    hashtags: ["limitedoffer", "audiotech", "wirelessfreedom"],
    imagePrompt: "Dynamic shot of premium wireless earbuds with dramatic lighting, floating particles, and a bold color gradient background",
    variants: {
      short: "Stop settling for ordinary. Wireless Earbuds Pro — 40% off.",
      medium: "Stop settling for ordinary audio. The Wireless Earbuds Pro delivers studio-quality sound in a pocket-sized package. 40% off for early adopters.",
      long: "Stop settling for ordinary audio. The Wireless Earbuds Pro delivers studio-quality sound in a pocket-sized package. Premium 13mm drivers. Active noise cancellation. 8-hour battery life. Join thousands of happy customers who've upgraded their audio experience. Limited time: 40% off for early adopters. Free shipping included.",
    },
  },
  product: {
    caption: "Introducing the next generation of personal audio. Our Wireless Earbuds Pro features custom-tuned 13mm drivers, active noise cancellation, and an ergonomic design that fits perfectly in your ear. With 8 hours of playback and a compact charging case, these earbuds are built for life on the move.",
    hashtags: ["premiumaudio", "wirelesstech", "newrelease"],
    imagePrompt: "Clean product photography of wireless earbuds on a white surface with soft shadows, showing premium materials and sleek design details",
    variants: {
      short: "Next-gen personal audio. Custom 13mm drivers. Active noise cancellation. 8-hour battery.",
      medium: "Introducing the next generation of personal audio. Our Wireless Earbuds Pro features custom-tuned 13mm drivers, active noise cancellation, and an ergonomic design that fits perfectly in your ear.",
      long: "Introducing the next generation of personal audio. Our Wireless Earbuds Pro features custom-tuned 13mm drivers, active noise cancellation, and an ergonomic design that fits perfectly in your ear. With 8 hours of playback and a compact charging case, these earbuds are built for life on the move. IPX5 water resistance. Touch controls. Voice assistant support. Premium audio has never been this accessible.",
    },
  },
};

export default function Studio() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [contentType, setContentType] = useState<ContentType>("instagram");
  const [generatedContent, setGeneratedContent] = useState<typeof mockContent.instagram | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerate = async (data: GenerateData) => {
    setContentType(data.contentType);
    setIsGenerating(true);
    setGeneratedContent(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setGeneratedContent(mockContent[data.contentType]);
    setIsGenerating(false);
    setShowPreview(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">PromptStudio</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/history">
            <Button variant="ghost" size="sm">
              <History className="w-4 h-4 mr-2" />
              History
            </Button>
          </Link>
          <Link to="/plans">
            <Button variant="ghost" size="sm">
              <CreditCard className="w-4 h-4 mr-2" />
              Plans
            </Button>
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">JD</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-card border-b border-border p-4 space-y-2"
        >
          <Link to="/history" className="block">
            <Button variant="ghost" className="w-full justify-start">
              <History className="w-4 h-4 mr-2" />
              History
            </Button>
          </Link>
          <Link to="/plans" className="block">
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="w-4 h-4 mr-2" />
              Plans
            </Button>
          </Link>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Mobile: Step-based flow */}
        <div className="lg:hidden flex-1 overflow-hidden">
          {!showPreview ? (
            <ControlPanel onGenerate={handleGenerate} isGenerating={isGenerating} />
          ) : (
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-auto">
                <PreviewCanvas
                  contentType={contentType}
                  content={generatedContent}
                  isLoading={isGenerating}
                />
              </div>
              <div className="p-4 border-t border-border bg-card">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowPreview(false)}
                >
                  Create New
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Split Layout */}
        <div className="hidden lg:flex flex-1 overflow-hidden">
          {/* Left Panel - Controls */}
          <div className="w-[420px] border-r border-border bg-studio-panel overflow-y-auto">
            <ControlPanel onGenerate={handleGenerate} isGenerating={isGenerating} />
          </div>

          {/* Right Panel - Preview Canvas */}
          <div className="flex-1 bg-studio-canvas overflow-y-auto">
            <PreviewCanvas
              contentType={contentType}
              content={generatedContent}
              isLoading={isGenerating}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
