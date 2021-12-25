import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "TypeChain",
    Svg: "🔌",
    description: <>TypeScript bindings for Ethereum smart contracts</>,
    url: "https://github.com/dethcrypto/TypeChain",
  },
  {
    title: "ethereum-code-viewer",
    Svg: "🔭",
    description: <>View source of deployed Ethereum contracts in VSCode</>,
    url: "https://github.com/dethcrypto/ethereum-code-viewer",
  },
  {
    title: "eth-sdk",
    Svg: "⚒️",
    description: <>Type-safe, lightweight SDKs for Ethereum smart contracts</>,
    url: "https://github.com/dethcrypto/eth-sdk",
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <span className={styles.featureSvg} alt={title}>
          {Svg}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
