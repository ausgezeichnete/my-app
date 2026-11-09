import {
  AppChipSelect,
  type AppChipOption,
  type AppChipSelectProps,
} from "@/common/appChip/appChipSelect";
import type { TFunction } from "i18next";

const statusOptions = (t: TFunction): AppChipOption<number>[] => [
  {
    value: 0,
    Label: t("inactive"),
    status: "inActive",
  },
  {
    value: 1,
    Label: t("active"),
    status: "active",
  },
];
const statusSelect = ({ value, onChange, t }: AppChipSelectProps<number>) => {
  return (
    <AppChipSelect
      value={value}
      onChange={onChange}
      options={statusOptions(t)}
    />
  );
};

export default statusSelect;
