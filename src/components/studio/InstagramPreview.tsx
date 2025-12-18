import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

interface InstagramPreviewProps {
  content: {
    caption: string;
    hashtags: string[];
    imagePrompt?: string;
  } | null;
  isLoading: boolean;
}

export const InstagramPreview = ({ content, isLoading }: InstagramPreviewProps) => {
  return (
    <div className="h-full flex flex-col bg-card">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
          <span className="text-sm font-semibold text-foreground">yourbrand</span>
        </div>
        <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Image Area */}
      <div className="aspect-square bg-muted relative overflow-hidden">
        {isLoading ? (
          <div className="absolute inset-0 skeleton-shimmer" />
        ) : content?.imagePrompt ? (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center p-4">
            <p className="text-xs text-muted-foreground text-center italic">
              {content.imagePrompt}
            </p>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-4">
          <Heart className="w-6 h-6 text-foreground" />
          <MessageCircle className="w-6 h-6 text-foreground" />
          <Send className="w-6 h-6 text-foreground" />
        </div>
        <Bookmark className="w-6 h-6 text-foreground" />
      </div>

      {/* Likes */}
      <div className="px-3 pb-1">
        <p className="text-sm font-semibold text-foreground">1,234 likes</p>
      </div>

      {/* Caption */}
      <div className="px-3 pb-3 flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded skeleton-shimmer w-full" />
            <div className="h-4 bg-muted rounded skeleton-shimmer w-3/4" />
            <div className="h-4 bg-muted rounded skeleton-shimmer w-1/2" />
          </div>
        ) : content ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-foreground">
              <span className="font-semibold">yourbrand </span>
              {content.caption}
            </p>
            <p className="text-sm text-primary mt-2">
              {content.hashtags.map(tag => `#${tag}`).join(" ")}
            </p>
          </motion.div>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            Your content will appear here...
          </p>
        )}
      </div>
    </div>
  );
};
