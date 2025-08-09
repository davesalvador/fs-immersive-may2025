import { useState, useEffect } from "react";

export default function AutoTabSwitcher() {
  const tabs = ["Home", "Profile", "Settings"];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tabs.length]);

  return (
    <div>
      <h2> AutoTabSwitcher </h2>
      {tabs.map((tab, index) => (
        <button key={tab} onClick={() => setActiveIndex(index)}>
          {tab}
        </button>
      ))}
      <p> you are viewing: {tabs[activeIndex]}</p>
    </div>
  );
}
