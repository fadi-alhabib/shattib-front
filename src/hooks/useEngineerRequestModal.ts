import { useContext } from "react";
import { EngineerRequestContext } from "../context/EngineerRequestContext";

export const useEngineerRequest = () => {
  const context = useContext(EngineerRequestContext);
  if (!context) {
    throw new Error(
      "useEngineerRequest must be used within an EngineerRequestProvider"
    );
  }
  return context;
};
