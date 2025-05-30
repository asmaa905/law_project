// app/font-awesome-provider.jsx
"use client";

import { library } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const addAllIcons = (iconSet) => {
  return Object.keys(iconSet)
    .filter((key) => key !== "prefix" && key !== "fa" && key.startsWith("fa"))
    .map((icon) => iconSet[icon]);
};

library.add(
  ...addAllIcons(solidIcons),
  ...addAllIcons(regularIcons),
  ...addAllIcons(brandIcons)
);

export default function FontAwesomeProvider({ children }) {
  return children;
}
