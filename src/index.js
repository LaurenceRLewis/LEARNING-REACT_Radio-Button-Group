import React from "react";
import { createRoot } from "react-dom/client";
import "./radio-group.css";
import RadioGroup from "./radio-group";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RadioGroup />
  </React.StrictMode>
);
