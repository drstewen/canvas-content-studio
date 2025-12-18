import { motion } from "framer-motion";
import { Instagram, Megaphone, Package } from "lucide-react";

const contentTypes = [
  { id: "product", label: "Product", icon: Package },
  { id: "ad", label: "Ad Copy", icon: Megaphone },
  { id: "instagram", label: "Instagram", icon: Instagram },
] as const;

export type ContentType = typeof contentTypes[number]["id"];

interface ContentTypeSelectorProps {
  selected: ContentType;
  onSelect: (type: ContentType) => void;
}

export const ContentTypeSelector = ({ selected, onSelect }: ContentTypeSelectorProps) => {
  return (
    <div className="flex gap-2">
      {contentTypes.map((type) => {
        const Icon = type.icon;
        const isSelected = selected === type.id;
        
        return (
          <motion.button
            key={type.id}
            onClick={() => onSelect(type.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative flex-1 flex flex-col items-center gap-2 p-4 rounded-xl
              border-2 transition-all duration-200
              ${isSelected 
                ? "border-primary bg-primary/5 text-primary" 
                : "border-border bg-card hover:border-primary/30 text-muted-foreground hover:text-foreground"
              }
            `}
          >
            {isSelected && (
              <motion.div
                layoutId="content-type-indicator"
                className="absolute inset-0 rounded-xl bg-primary/10 border-2 border-primary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon className="w-5 h-5 relative z-10" />
            <span className="text-sm font-medium relative z-10">{type.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};
