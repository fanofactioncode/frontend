import React from "react";

import Footer from "../common/footer";
import Header from "../common/header";
import Newsletter from "../common/newsletter";

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
