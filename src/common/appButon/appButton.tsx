interface AppButtonProps {
  text: string;
  onClick: () => void;
  status?: ButtonStatus;
}

export type ButtonStatus = "view" | "download" | "print"; //controls the style of the button based on the status value

//create an Object that maps the ButtonStatus values to their corresponding styles, using Record utility type to define the shape of the object
export const ButtonStyles: Record<
  ButtonStatus,
  { backgroundColor: string; color: string }
> = {
  view: { backgroundColor: "blue", color: "white" },
  download: { backgroundColor: "green", color: "white" },
  print: { backgroundColor: "orange", color: "white" },
};

export const AppButton = ({
  text,
  onClick,
  status = "view",
}: AppButtonProps) => {
  //: AppButtonProps is the type of props that the AppButton component will receive, it is an object with text, onClick, and status properties
  return (
    <button onClick={onClick} style={ButtonStyles[status]}>
      {text}
    </button>
  );
};

//1.create a component called AppButton that takes in props text, onClick, and status
//2.define the types of props in an interface which will be passed to the AppButton component
//3.create a type union for the status variable which can be either "view", "download", or "print"
//4.create an object that maps the ButtonStatus values to their corresponding styles, using Record utility type to define the shape of the object
//5.return a button element that has the probs i created
