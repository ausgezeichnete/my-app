import { AppButton } from "@/common/appButton/appButton";
import AppModal from "@/common/modal/AppModal";
import { CLIENT_STATUS } from "@/constants/status.constant";
import { useTranslation } from "react-i18next";

interface ConfirmStatusModalProps {
  client: ClientTypes | null;
  newStatus: CLIENT_STATUS | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

export const ConfirmStatusModal = ({
  client,
  newStatus,
  isOpen,
  onCLose,
  onConfirm,
  isLoading = false,
}: ConfirmStatusModalProps) => {
  const { t } = useTranslation();

  if (!client || newStatus === null) return null;
//   const statuslabel =
//     newStatus === CLIENT_STATUS.ACTIVE
//       ? t("chips.active")
//       : t("chips.inactive");

  return (
    <AppModal
      isOpen={isOpen}
      onOpenChange={(open) => !open && onCLose()}
      //   title={t(clients.change_status)}
      width="lg:w-[450px]"
      footer={
        <div className="flex justify-center gap-4">
          <AppButton
            variant="outlined"
            buttonText="Cancel"
            onClick={onCLose}
            width="short"
            disabled={isLoading}
          ></AppButton>
          <AppButton
            buttonText="Confirm"
            onClick={onConfirm}
            width="short"
            processing={isLoading}
          ></AppButton>
        </div>
      }
    >
      <div>
        <p></p>
        {/* {
        //   ("Are you sure you want to change the status?",
          {
            name: client.normalize,
            status: statuslabel,
          })
        } */}
      </div>
    </AppModal>
  );
};
