import React from "react";

import YearProvider from "contexts/YearContext";
import { Year } from "components";

export default function Home() {
  return (
    <YearProvider yearNumber={2022}>
      <Year />
    </YearProvider>
  );
}
