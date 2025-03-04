import { useEffect } from "@lynx-js/react";

import "./App.css";

export function App() {
  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  return (
    <text>
      Thank you for helping us improve by providing a clear reproduction!
    </text>
  );
}
