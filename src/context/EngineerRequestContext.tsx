import React, { createContext, useState, ReactNode } from "react";

interface EngineerRequestContextProps {
  isShownEngineerRequestModal: boolean;
  setIsShownEngineerRequestModal: (isShown: boolean) => void;
}

interface EngineerRequestProviderProps {
  children: ReactNode;
}

export const EngineerRequestContext = createContext<
  EngineerRequestContextProps | undefined
>(undefined);

export const EngineerRequestProvider: React.FC<
  EngineerRequestProviderProps
> = ({ children }) => {
  const [isShownEngineerRequestModal, setIsShownEngineerRequestModal] =
    useState(false);

  return (
    <EngineerRequestContext.Provider
      value={{ isShownEngineerRequestModal, setIsShownEngineerRequestModal }}
    >
      {children}
    </EngineerRequestContext.Provider>
  );
};
