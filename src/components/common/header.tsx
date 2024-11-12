import MobileNavigation from "./mobile-navigation";
import { Navbar } from "./navbar";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-md">
        <Navbar />
      </header>

      <MobileNavigation />
    </>
  );
}
