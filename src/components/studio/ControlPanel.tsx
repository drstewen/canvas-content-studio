import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ContentTypeSelector, ContentType } from "./ContentTypeSelector";

interface ControlPanelProps {
  onGenerate: (data: GenerateData) => void;
  isGenerating: boolean;
}

export interface GenerateData {
  contentType: ContentType;
  productName: string;
  targetAudience: string;
  tone: string;
  language: string;
  generateImagePrompt: boolean;
}

const toneOptions = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual & Friendly" },
  { value: "playful", label: "Playful & Fun" },
  { value: "luxury", label: "Luxury & Premium" },
  { value: "bold", label: "Bold & Confident" },
];

const languageOptions = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "pt", label: "Portuguese" },
];

export const ControlPanel = ({ onGenerate, isGenerating }: ControlPanelProps) => {
  const [contentType, setContentType] = useState<ContentType>("instagram");
  const [productName, setProductName] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [tone, setTone] = useState("casual");
  const [language, setLanguage] = useState("en");
  const [generateImagePrompt, setGenerateImagePrompt] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      contentType,
      productName,
      targetAudience,
      tone,
      language,
      generateImagePrompt,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full overflow-y-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">Create Content</h2>
          <p className="text-muted-foreground mt-1">Design sales-ready content in seconds</p>
        </div>

        {/* Content Type */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Content Type</Label>
          <ContentTypeSelector selected={contentType} onSelect={setContentType} />
        </div>

        {/* Product Name */}
        <div className="space-y-2">
          <Label htmlFor="productName" className="text-sm font-medium">
            Product / Topic
          </Label>
          <Input
            id="productName"
            placeholder="e.g., Wireless Earbuds Pro"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="h-11"
          />
        </div>

        {/* Target Audience */}
        <div className="space-y-2">
          <Label htmlFor="targetAudience" className="text-sm font-medium">
            Target Audience
          </Label>
          <Textarea
            id="targetAudience"
            placeholder="e.g., Young professionals who love music and fitness"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className="min-h-[80px] resize-none"
          />
        </div>

        {/* Tone of Voice */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Tone of Voice</Label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              {toneOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Language */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Output Language</Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languageOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Generate Image Prompt Toggle */}
        <div className="flex items-center justify-between rounded-xl border border-border bg-muted/30 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium">Generate Image Prompt</p>
              <p className="text-xs text-muted-foreground">Get AI image suggestions</p>
            </div>
          </div>
          <Switch
            checked={generateImagePrompt}
            onCheckedChange={setGenerateImagePrompt}
          />
        </div>

        {/* Generate Button */}
        <Button
          type="submit"
          variant="studio"
          size="lg"
          className="w-full"
          disabled={!productName || isGenerating}
        >
          {isGenerating ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};
