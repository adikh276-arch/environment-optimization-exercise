import { Button } from "@/components/ui/button";

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
        {/* Decorative dot */}
        <div className="w-3 h-3 rounded-full bg-primary mx-auto animate-breathe" />

        <h1 className="text-3xl font-heading font-bold text-foreground tracking-tight">
          Reset One Small Area
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Choose one small space near you.<br />
          Not the whole room — just <span className="text-primary font-semibold">one small area</span>.
        </p>

        <div className="space-y-3 text-left">
          {areas.map((area) => (
            <div
              key={area.label}
              className="flex items-center gap-3 bg-accent/50 rounded-lg px-4 py-3 transition-colors"
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
          className="w-full py-6 text-lg font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          Start 5-Minute Reset
        </Button>
      </div>
    </div>
  );
};

export default ChooseAreaScreen;
