import { ReactNode } from "react";

export interface ProjectBoxProps {
  name: string;
  role: string;
  text: ReactNode;
  image: string;
  customCss?: string;
}
