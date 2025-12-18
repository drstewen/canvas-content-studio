import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, FileText, Download, Wand2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PhoneFrame } from "./PhoneFrame";
import { InstagramPreview } from "./InstagramPreview";
import { ContentType } from "./ContentTypeSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GeneratedContent {
  caption: string;
  hashtags: string[];
  imagePrompt?: string;
  variants?: {
    short: string;
    medium: string;
    long: string;
  };
}

interface PreviewCanvasProps {
  contentType: ContentType;
  content: GeneratedContent | null;
  isLoading: boolean;
}

export const PreviewCanvas = ({ contentType, content, isLoading }: PreviewCanvasProps) => {
  const [copied, setCopied] = useState(false);
  const [activeVariant, setActiveVariant] = useState<"short" | "medium" | "long">("medium");

  const handleCopy = async () => {
    if (!content) return;
    const textToCopy = content.variants?.[activeVariant] || content.caption;
    await navigator.clipboard.writeText(textToCopy + "\n\n" + content.hashtags.map(t => `#${t}`).join(" "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getVariantContent = () => {
    if (!content?.variants) return content?.caption;
    return content.variants[activeVariant];
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 lg:p-12">
      {/* Canvas Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md mb-6 flex items-center justify-between"
      >
        <h3 className="text-lg font-semibold text-foreground">Live Preview</h3>
        <div className="flex items-center gap-2">
          {content && (
            <>
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </>
          )}
        </div>
      </motion.div>

      {/* Phone Preview */}
      <AnimatePresence mode="wait">
        {contentType === "instagram" && (
          <PhoneFrame key="instagram">
            <InstagramPreview
              content={content ? { ...content, caption: getVariantContent() || "" } : null}
              isLoading={isLoading}
            />
          </PhoneFrame>
        )}

        {contentType === "ad" && (
          <motion.div
            key="ad"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md bg-card rounded-2xl shadow-lg border border-border overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              {isLoading ? (
                <div className="w-full h-full skeleton-shimmer" />
              ) : (
                <Wand2 className="w-12 h-12 text-primary/30" />
              )}
            </div>
            <div className="p-6">
              {isLoading ? (
                <div className="space-y-3">
                  <div className="h-6 bg-muted rounded skeleton-shimmer w-3/4" />
                  <div className="h-4 bg-muted rounded skeleton-shimmer w-full" />
                  <div className="h-4 bg-muted rounded skeleton-shimmer w-2/3" />
                </div>
              ) : content ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h4 className="text-xl font-bold text-foreground mb-2">Your Ad Headline</h4>
                  <p className="text-muted-foreground">{getVariantContent()}</p>
                </motion.div>
              ) : (
                <p className="text-muted-foreground italic">Your ad preview will appear here...</p>
              )}
            </div>
          </motion.div>
        )}

        {contentType === "product" && (
          <motion.div
            key="product"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md bg-card rounded-2xl shadow-lg border border-border overflow-hidden"
          >
            <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              {isLoading ? (
                <div className="w-full h-full skeleton-shimmer" />
              ) : (
                <FileText className="w-16 h-16 text-muted-foreground/30" />
              )}
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">NEW ARRIVAL</span>
                <span className="text-lg font-bold text-foreground">$99.00</span>
              </div>
              {isLoading ? (
                <div className="space-y-2">
                  <div className="h-5 bg-muted rounded skeleton-shimmer w-2/3" />
                  <div className="h-4 bg-muted rounded skeleton-shimmer w-full" />
                  <div className="h-4 bg-muted rounded skeleton-shimmer w-full" />
                  <div className="h-4 bg-muted rounded skeleton-shimmer w-3/4" />
                </div>
              ) : content ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h4 className="text-lg font-bold text-foreground">Product Name</h4>
                  <p className="text-muted-foreground text-sm mt-2">{getVariantContent()}</p>
                </motion.div>
              ) : (
                <p className="text-muted-foreground italic text-sm">Product description will appear here...</p>
              )}
              <Button variant="studio" className="w-full">Add to Cart</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Variant Selector */}
      {content?.variants && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <Tabs value={activeVariant} onValueChange={(v) => setActiveVariant(v as typeof activeVariant)}>
            <TabsList className="bg-muted/50">
              <TabsTrigger value="short">Short</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="long">Long</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
      )}

      {/* Image Prompt Section */}
      {content?.imagePrompt && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 w-full max-w-md"
        >
          <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-accent">Image Prompt</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(content.imagePrompt || "");
                }}
              >
                <Copy className="w-3 h-3" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{content.imagePrompt}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};
