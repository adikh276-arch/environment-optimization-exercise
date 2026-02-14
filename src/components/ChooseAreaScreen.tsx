import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const areas = [
  { emoji: "🖥️", label: "One corner of your desk" },
  { emoji: "🛏️", label: "Bedside table" },
  { emoji: "🪑", label: "One chair" },
  { emoji: "🧹", label: "Small section of the floor" },
];

interface ChooseAreaScreenProps {
  onStart: () => void;
}

const ChooseAreaScreen = ({ onStart }: ChooseAreaScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 animate-fade-in">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary shadow-md" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Step 1 of 3</p>
          <h1 className="text-3xl font-heading font-bold text-foreground tracking-tight">
            Environment Optimization Exercise
          </h1>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Choose one small space near you.<br />
          Not the whole room — just <span className="text-primary font-semibold">one small area</span>.
        </p>

        <div className="space-y-3 text-left">
          {areas.map((area) => (
            <div
              key={area.label}
              className="flex items-center gap-3 bg-accent/50 rounded-xl px-4 py-3.5 border border-border/60 transition-colors hover:bg-accent/80"
            >
              <span className="text-xl">{area.emoji}</span>
              <span className="text-foreground font-body">{area.label}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-primary font-medium italic">
          Small is enough.
        </p>

        <Button
          onClick={onStart}
          className="w-full py-6 text-lg font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all gap-2"
          size="lg"
        >
          <Sparkles className="w-5 h-5" />
          Start 5-Minute Exercise
        </Button>
      </div>
    </div>
  );
};

export default ChooseAreaScreen;
