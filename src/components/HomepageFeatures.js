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

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <span className={styles.featureSvg} alt={title}>
          {Svg}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={url}>
            {title}
            <svg
              width="13.5"
              height="13.5"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"
            >
              <path
                fill="currentColor"
                d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
              ></path>
            </svg>
          </Link>
        </h3>
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
