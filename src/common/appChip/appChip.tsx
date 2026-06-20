//define type union for the status variable, which can be either "active" or "inactive"
export type Status =
  | "accpepted"
  | "refused"
  | "pending"
  | "active"
  | "inactive";

//defining the type of the props that the AppChip component will receive
//chipText is a string and it is required, while status is of type Status and it is optional
interface AppChipProps {
  chipText: string;
  status?: Status;
  children?: React.ReactNode;
}
//define an object that maps the status values and record is a utility type that constructs an object type whose property keys are Keys and whose property values are Type
//record is used to define an object type with specific keys and values
const colorMap: Record<Status, { background: string; color: string }> = {
  active: { background: "#FFC24626", color: "#FFC246" },
  inactive: { background: "red", color: "white" },
  accpepted: {
    background: "green",
    color: "white",
  },
  refused: {
    background: "red",
    color: "white",
  },
  pending: {
    background: "yellow",
    color: "black",
  },
};
export const AppChip = ({
  chipText,
  status = "inactive",
  children,
}: AppChipProps) => {
  // chipText type is string, and it is required
  return (
    <div>
      {chipText}
      <span
        style={{
          backgroundColor: colorMap[status].background,
          color: colorMap[status].color,
          padding: "4px 8px",
          borderRadius: "4px",
        }}
      >
        {" "}
        {status}
      </span>
    </div>
  );
};
