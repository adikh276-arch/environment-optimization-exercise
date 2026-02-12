import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";

interface TimerScreenProps {
  onComplete: () => void;
}

const TOTAL_SECONDS = 5 * 60;

const TimerScreen = ({ onComplete }: TimerScreenProps) => {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const playChime = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 528;
      osc.type = "sine";
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 2);
    } catch {
      // silently fail
    }
  }, [soundEnabled]);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, seconds]);

  useEffect(() => {
    if (seconds === 0 && isRunning) {
      setIsRunning(false);
      playChime();
      const timeout = setTimeout(onComplete, 2500);
      return () => clearTimeout(timeout);
    }
  }, [seconds, isRunning, onComplete, playChime]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const progress = ((TOTAL_SECONDS - seconds) / TOTAL_SECONDS) * 100;

  const circumference = 2 * Math.PI * 88;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 animate-fade-in">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-3xl font-heading font-bold text-foreground">
          5-Minute Reset
        </h1>

        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-4">
          <p className="text-muted-foreground text-left leading-relaxed text-sm">
            For the next 5 minutes:
          </p>
          <ul className="text-left text-foreground space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span> Remove trash
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span> Put away items that belong elsewhere
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span> Neatly place what remains
            </li>
          </ul>
          <p className="text-muted-foreground text-left text-xs italic">
            Stop when the timer ends. It does not need to be perfect.
          </p>
        </div>

        {/* Circular Timer */}
        <div className="relative w-48 h-48 mx-auto">
          <svg className="w-48 h-48 -rotate-90" viewBox="0 0 192 192">
            <circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="6"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-5xl font-heading font-bold tabular-nums ${seconds === 0 ? "text-primary animate-gentle-pulse" : "text-foreground"}`}>
              {String(minutes).padStart(2, "0")}:{String(secs).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12"
            onClick={() => {
              setIsRunning(false);
              setSeconds(TOTAL_SECONDS);
            }}
          >
            <RotateCcw className="w-5 h-5" />
          </Button>

          <Button
            size="icon"
            className="rounded-full w-16 h-16 shadow-lg"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12"
            onClick={() => setSoundEnabled(!soundEnabled)}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          {soundEnabled ? "Gentle chime when done" : "Sound off"}
        </p>
      </div>
    </div>
  );
};

export default TimerScreen;
