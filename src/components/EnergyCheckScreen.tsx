import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface EnergyCheckScreenProps {
  onFinish: () => void;
}

const EnergyCheckScreen = ({ onFinish }: EnergyCheckScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 animate-fade-in">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="w-3 h-3 rounded-full bg-primary shadow-md" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Step 3 of 3</p>
          <h1 className="text-3xl font-heading font-bold text-foreground">
            Pause and Notice
          </h1>
        </div>

        <div className="space-y-6 text-left">
          <p className="text-lg text-foreground leading-relaxed">
            Look at the space again.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Does it feel even <span className="text-primary font-semibold">slightly lighter</span>?
          </p>

          <p className="text-foreground leading-relaxed">
            If one item still feels draining, move or remove just that one thing.
          </p>

          <p className="text-primary font-medium italic">
            Take one slow breath.
          </p>

          <div className="bg-accent/50 rounded-xl p-5 border border-border">
            <p className="text-foreground font-medium leading-relaxed text-center">
              You reduced mental load today.<br />
              <span className="text-primary font-semibold">That matters.</span>
            </p>
          </div>
        </div>

        <Button
          onClick={onFinish}
          className="w-full py-6 text-lg font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all gap-2"
          size="lg"
        >
          <Heart className="w-5 h-5" />
          Finish
        </Button>
      </div>
    </div>
  );
};

export default EnergyCheckScreen;
