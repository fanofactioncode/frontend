"use client";

import React, { ReactNode } from "react";

// Case Component
interface CaseProps {
  value: any;
  condition?: boolean;
  children: ReactNode;
}

const Case: React.FC<CaseProps> = ({ condition = true, children }) => {
  if (condition) return <>{children}</>;
  return null;
};

// Default Component
interface DefaultProps {
  children: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return <>{children}</>;
};

// Switch Component
interface SwitchProps {
  value: any;
  children: ReactNode;
}

const Switch: React.FC<SwitchProps> = ({ value, children }) => {
  let matched = false;
  let defaultCase: ReactNode = null;

  const elements = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;

    if (child.type === Default) {
      defaultCase = child;
      return null;
    }

    if (
      child.type === Case &&
      !matched &&
      (child.props.value === value || child.props.condition)
    ) {
      matched = true;
      return child;
    }

    return null;
  });

  return <>{matched ? elements : defaultCase}</>;
};

export { Case, Default, Switch };
