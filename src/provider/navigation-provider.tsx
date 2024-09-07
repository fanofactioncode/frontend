"use client";

import { useState, createContext, useContext } from "react";

export interface NavigationContextProps {
  isOpen: boolean;
  toggleNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextProps | null>(null);

export const NavigationProvider = ({ children }: React.PropsWithChildren) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

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
