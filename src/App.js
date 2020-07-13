import React, { useState, useEffect } from "react";
import "./styles.css";
import { notes } from "./Notes";
import freq from "./freq";

export default function App() {
  const [frequency, setFrequency] = useState(440);

  const handleFrequencyChange = e => setFrequency(e.target.value);
  return (
    <div className="App">
      <div>{freq(frequency)}</div>
      <input
        type="range"
        value={frequency}
        min={27.5}
        max={14080}
        onChange={handleFrequencyChange}
        step={0.5}
      />
      <div>{frequency}hz</div>
    </div>
  );
}
