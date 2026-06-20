interface AppButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  status?: ButtonStatus;
}
export type ButtonStatus = "view" | "download" | "print";

const colorMap: Record<ButtonStatus, { background: string; color: string }> = {
  view: { background: "#007BFF", color: "white" },
  download: { background: "#28A745", color: "white" },

  print: { background: "#6C757D", color: "white" },
};

export const AppButton = ({
  text,
  onClick,
  disabled = false,
  status = "view",
}: AppButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: colorMap[status].background,
        color: colorMap[status].color,
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      {text}
    </button>
  );
};
//i defined an interface forthe buttons
//the button component takes in text, onClick function, disabled state and status as props to be able to change the color of the button based on the status
