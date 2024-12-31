import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function VerifyEmailLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
