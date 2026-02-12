import { useState } from "react";
import ChooseAreaScreen from "@/components/ChooseAreaScreen";
import TimerScreen from "@/components/TimerScreen";
import EnergyCheckScreen from "@/components/EnergyCheckScreen";

type Screen = "choose" | "timer" | "energy";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("choose");

  if (screen === "timer") {
    return <TimerScreen onComplete={() => setScreen("energy")} />;
  }

  if (screen === "energy") {
    return <EnergyCheckScreen onFinish={() => setScreen("choose")} />;
  }

  return <ChooseAreaScreen onStart={() => setScreen("timer")} />;
};

export default Index;
