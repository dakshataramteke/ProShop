import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author}></meta>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{minHeight:'70vh'}}> {children}</main>
     
      <Footer />
    </>
  );
};

Layout.defaultProps ={
  title: 'Ecommerce app - shop now',
  description: 'mern stack project',
  keywords:'mern,react,node, mongodb, mongoose',
  author:"Dakshata"
}
export default Layout;
