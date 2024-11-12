"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface NavigationContextProps {
  isOpen: boolean;
  segment: string | null;
  toggleNavigation: () => void;
  openNavigation: () => void;
  closeNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextProps | null>(null);

export const NavigationProvider = ({ children }: React.PropsWithChildren) => {
  const segment = useSelectedLayoutSegment();
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  const toggleNavigation = useCallback(() => {
    setIsNavigationOpen(!isNavigationOpen);
  }, [setIsNavigationOpen, isNavigationOpen]);

  const closeNavigation = useCallback(() => {
    setIsNavigationOpen(false);
  }, []);

  const openNavigation = useCallback(() => {
    setIsNavigationOpen(true);
  }, []);

  const value: NavigationContextProps = useMemo(() => {
    return {
      isOpen: isNavigationOpen,
      segment,
      toggleNavigation,
      openNavigation,
      closeNavigation,
    };
  }, [
    isNavigationOpen,
    segment,
    toggleNavigation,
    openNavigation,
    closeNavigation,
  ]);

  return (
    <NavigationContext.Provider value={value}>
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
