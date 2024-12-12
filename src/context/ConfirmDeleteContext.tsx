import React, { createContext, useState, ReactNode } from "react";

// Define the structure of your context props
interface ConfirmDeleteContextProps {
  isShownConfirmDeleteModal: boolean;
  setIsShownConfirmDeleteModal: (isShown: boolean) => void;
  id: number | null;
  setId: (id: number | null) => void;
  endpoint: string; // Add the endpoint to store dynamic endpoints
  setEndpoint: (endpoint: string) => void; // Add a function to set the endpoint
}

interface ConfirmDeleteProviderProps {
  children: ReactNode;
}

// Create the context with default value as undefined
export const ConfirmDeleteContext = createContext<
  ConfirmDeleteContextProps | undefined
>(undefined);

export const ConfirmDeleteProvider: React.FC<ConfirmDeleteProviderProps> = ({
  children,
}) => {
  // States to store modal visibility, item ID, and the endpoint
  const [isShownConfirmDeleteModal, setIsShownConfirmDeleteModal] =
    useState(false);
  const [id, setId] = useState<number | null>(null);
  const [endpoint, setEndpoint] = useState<string>(""); // New state for endpoint

  return (
    <ConfirmDeleteContext.Provider
      value={{
        isShownConfirmDeleteModal,
        setIsShownConfirmDeleteModal,
        id,
        setId,
        endpoint, // Provide the endpoint
        setEndpoint, // Provide the setEndpoint function
      }}
    >
      {children}
    </ConfirmDeleteContext.Provider>
  );
};
