import type { Status } from "../appChip/appChip";
import { AppStateCard } from "./appStateCard";

export interface AppStateCardOption<T> {
    value: T;
    status?: Status;
    Label: string;
}
export interface AppStateCardSelectProps<T> {
    options: AppStateCardOption<T>[];
    onChange: (newValue: T) => void;
    status?: Status;
}

export function AppStateCardSelect<T>({ options, onChange, status }: AppStateCardSelectProps<T>) {

    //find the object in the options array that matches the value prop, if not found, return the first object in the options array
   const selectedOption = options.find((option)=>option.value==status) || options[0]; 
return (
    <div className="flex gap-2 items-center justify-center">
      <button onClick={() => {}}>
        <AppStateCard status={selectedOption} cardText={Label} />
      </button>
      <div>           
         {().map(status =>(
        <button key={} onClick={handleStatusChange(value)}>
             <AppStateCard status={status} cardText={Label} />
        </button>
     ))}

      </div>
    </div>
  );
};
