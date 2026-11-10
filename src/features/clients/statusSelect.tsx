import {
  AppChipSelect,
  type AppChipOption,
} from "@/common/appChip/appChipSelect";
import { CLIENT_STATUS } from "@/constants/status.constant";
import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

const statusOptions = (t: TFunction): AppChipOption<number>[] => [
  {
    //value: CLIENT_STATUS.INACTIVE,
    value: 0,
    Label: t("chips.inactive"),
    status: "inActive",
  },
  {
    //value: CLIENT_STATUS.ACTIVE,
    value: 1,
    Label: t("chips.active"),
    status: "active",
  },
];
interface StatusSelectProps {
  value: number;
  onChange: (newStatus: number) => void; //it takes the new status value and calls the onChange
  // onStatusChangeRequest: (value: ClientTypes, newStatus: CLIENT_STATUS) => void;
}

export const StatusSelect = ({
  value,
  onChange,
  // onStatusChangeRequest,
}: StatusSelectProps) => {
  const { t } = useTranslation();

  return (
    <div>
      {" "}
      <AppChipSelect
        value={value}
        options={statusOptions(t)}
        onChange={onChange}
      />
    </div>
  );
};
