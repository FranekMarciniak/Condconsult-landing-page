import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ height: "50vh", textAlign: "center", marginTop: "150px" }}>
      <h1>Page under construction</h1>
    </div>
  </Layout>
);

export default NotFoundPage;
