import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Documentation</h1>
          <p className="hero-subtitle">
            Comprehensive guides and documentation to help you get the most out
            of our platform. Whether you're a beginner or an experienced user,
            you'll find everything you need here.
          </p>
          <div className="hero-buttons">
            <Link className="hero-button" to="/docs/category/getting-started">
              Get Started →
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
