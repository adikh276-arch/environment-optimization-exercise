import { Button } from "@/components/ui/button";

interface EnergyCheckScreenProps {
  onFinish: () => void;
}

const EnergyCheckScreen = ({ onFinish }: EnergyCheckScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 animate-fade-in">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="w-3 h-3 rounded-full bg-primary mx-auto animate-breathe" />

        <h1 className="text-3xl font-heading font-bold text-foreground">
          Pause and Notice
        </h1>

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
            <p className="text-foreground font-medium leading-relaxed">
              You reduced mental load today.<br />
              <span className="text-primary font-semibold">That matters.</span>
            </p>
          </div>
        </div>

        <Button
          onClick={onFinish}
          className="w-full py-6 text-lg font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          Finish
        </Button>
      </div>
    </div>
  );
};

export default EnergyCheckScreen;
