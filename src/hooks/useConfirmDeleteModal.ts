import { useContext } from "react";
import { ConfirmDeleteContext } from "../context/ConfirmDeleteContext";

export const useConfirmDelete = () => {
  const context = useContext(ConfirmDeleteContext);
  if (!context) {
    throw new Error(
      "useConfirmDelete must be used within an ConfirmDeleteProvider"
    );
  }
  return context;
};
