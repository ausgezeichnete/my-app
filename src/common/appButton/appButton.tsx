import type {
  PropsWithChildren,
  ButtonHTMLAttributes,
  CSSProperties,
} from "react";

type Variant = "contained" | "outlined";
type Color = "primary";
type Width = "short" | "medium" | "long";

type AppButtonProps = PropsWithChildren<{
  buttonText: string;
  variant?: Variant;
  color?: Color;
  width?: Width;
}> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "">;

const baseStyle = {
  borderRadius: 12,
  fontWeight: 300,
  cursor: "pointer",
  border: "3px solid transparent",
};

// color:   red
const widthStyle: Record<Width, CSSProperties> = {
  short: { width: "50px" },
  medium: { width: "100px" },
  long: { width: "150px" },
};

const colorStyles: Record<Color, { color: string; background: string }> = {
  primary: { color: "#FFF", background: "#01C0AA" },
};

const variantStyles: Record<Variant, (c: Color) => CSSProperties> = {
  contained: (c) => ({
    backgroundColor: colorStyles[c].background,
    color: colorStyles[c].color,
  }),

  outlined: (c) => ({
    backgroundColor: "transparent",
    color: colorStyles[c].color,
    border: `1px solid ${colorStyles[c].background}`,
  }),
};

export const AppButton = ({
  buttonText,
  variant = "contained",
  color = "primary",
  width,
}: AppButtonProps) => {
  return (
    <button
      style={{
        ...baseStyle,
        ...variantStyles[variant](color),
        ...(width && widthStyle[width]),
        // ...widthStyle[width]
      }}
    >
      {buttonText}
    </button>
  );
};
