import type { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  children: React.ReactNode;
  TitleStyle?: string;
}

export function Section({ title, children, TitleStyle }: SectionProps) {
  return (
    <section className=" flex justify-between ">
      {title && <span className={TitleStyle}>{title}</span>}
      {children}
    </section>
  );
}
