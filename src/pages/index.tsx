import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          src="./img/logo.svg"
          width={250}
          height={250}
          className="object-contain"
          alt="logo"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Check our projects tutorials
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title={"WELCOME"} description={"siteConfig.description"}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
