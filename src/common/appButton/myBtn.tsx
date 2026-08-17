import type {
  ButtonHTMLAttributes,
  CSSProperties,
  PropsWithChildren,
} from "react";

//define which Probs will be sent tofrom the parent to the component
type myBtnProps = PropsWithChildren<{
  text: string;
  variant?: Variant; //will be defined as an Object later
  size?: Size;
  color?: Color;
}> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "">;

//define the keywords wich muss be provided by the parent to the component
type Variant = "contained" | "outlined";
type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";

//now define the objects wich will be sent

const colorStyles: Record<Color, { color: string; background: string }> = {
  primary: { color: "#FFF", background: "#01C0AA" },
  secondary: { color: "#FFF", background: "#3984E3" },
};

const sizeStyles: Record<Size, { width: string; height: string }> = {
  small: { width: "50px", height: "20px" },
  medium: { width: "100px", height: "30px" },
  large: { width: "150px", height: "40px" },
};

const baseStyle = {
  borderRadius: 12,
  fontWeight: 300,
  cursor: "pointer",
  border: "3px solid transparent",
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

export const myBtn = ({
  text,
  variant = "contained",
  color = "primary",
  size,
}: myBtnProps) => {
  return (
    <button
      style={{
        ...baseStyle,
        ...variantStyles[variant](color),
        ...(sizeStyles && sizeStyles[size]),
        // ...widthStyle[width]
      }}
    >
      {text}
    </button>
  );
};
