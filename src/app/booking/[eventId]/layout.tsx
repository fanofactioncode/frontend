import React from "react";

import PageLayout from "@/components/layout/page-layout";

export default function BookingLayout({ children }: React.PropsWithChildren) {
  return <PageLayout>{children}</PageLayout>;
}
