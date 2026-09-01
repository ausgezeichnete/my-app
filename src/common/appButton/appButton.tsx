import type { PropsWithChildren, ButtonHTMLAttributes } from "react";

type Variant = "contained" | "outlined";
type Color = "primary" | "secondary";
type Width = "short" | "medium" | "long";

type AppButtonProps = PropsWithChildren<{
  buttonText: string;
  variant?: Variant;
  color?: Color;
  width?: Width;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const widthStyles: Record<Width, string> = {
  short: "w-[50px]",
  medium: "w-[101px]",
  long: "w-[598px]",
};

const buttonStyles: Record<Color, Record<Variant, string>> = {
  primary: {
    contained: "bg-button-primary text-white hover:bg-button-primary-hover",

    outlined: "border border-button-primary bg-transparent text-button-primary",
  },

  secondary: {
    contained: "bg-button-secondary text-white",

    outlined:
      "border border-button-secondary bg-transparent text-button-secondary ",
  },
};

export const AppButton = ({
  buttonText,
  variant = "contained",
  color = "primary",
  width,
  className = "",
  ...props
}: AppButtonProps) => {
  return (
    <button
      {...props}
      className={`
        h-9.5
        rounded-xl
        text-[16px]
        font-light
        cursor-pointer
        ${width ? widthStyles[width] : ""}
        ${buttonStyles[color][variant]}
        ${className}
      `}
    >
      {buttonText}
    </button>
  );
};
