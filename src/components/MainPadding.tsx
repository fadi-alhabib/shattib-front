import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainPadding = ({ children }: Props) => {
  return <main className="px-32 py-12">{children}</main>;
};

export default MainPadding;
