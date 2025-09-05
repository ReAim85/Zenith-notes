import type { ReactElement, ReactNode } from "react";

export interface CardItemProps {
  title: string;
  startIcon: ReactElement | null;
  link: string;
  tags?: string[];
  date: string;
  type: string;
  itemId: string | number;
}

export type CardProps = {
  key: number;
  itemId: string | number;
  text: string;
  startIcon: ReactElement | null;
  link: string;
  type: string;
  tags?: string[];
};

export interface AuthProps {
  children: ReactNode;
}
export interface ContentData {
  type: string;
  link: string;
  title: string;
  tags: string[];
}

export interface RawContentFromAPI {
  _id: string;
  title: string;
  link: string;
  tags?: string;
  type: string;
}
