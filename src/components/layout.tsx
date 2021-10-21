import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "reset-css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Footer from "./sections/universal/Footer-section";
import Header from "./sections/universal/Header-section";
import ContextState from "../context/todoContext/contextState";

const Layout: React.FC<any> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <ContextState>
      <GlobalStyles />
      <Typography />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </ContextState>
  );
};

export default Layout;
