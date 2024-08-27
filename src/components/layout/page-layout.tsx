import React from "react";
import Newsletter from "../common/newsletter";
import Footer from "../common/footer";
import Header from "../common/header";

export default function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
}
