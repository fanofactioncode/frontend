"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";

export interface NavigationContextProps {
  isOpen: boolean;
  toggleNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextProps | null>(null);

export const NavigationProvider = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const showNavigation = useCallback(() => {
    router.push("?open-menu=true");
    setIsNavigationOpen(true);
  }, []);

  const hideNavigation = useCallback(() => {
    router.refresh();
    setIsNavigationOpen(false);
  }, []);

  useEffect(() => {
    // Close the rolldown menu when the browser's back button has been pressed
    if (isNavigationOpen && !searchParams.has("open-menu")) {
      hideNavigation();
    }
  }, [pathname, searchParams, isNavigationOpen, hideNavigation]);

  useEffect(() => {
    if (isNavigationOpen) showNavigation();
    else hideNavigation();
  }, [isNavigationOpen]);

  return (
    <NavigationContext.Provider
      value={{ isOpen: isNavigationOpen, toggleNavigation }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext<NavigationContextProps | null>(NavigationContext);

  if (context === null) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
};
