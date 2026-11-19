import { AppButton } from "@/common/appButton/appButton";
import AppModal from "@/common/modal/AppModal";
import { CLIENT_STATUS } from "@/constants/status.constant";
import type { ClientTypes } from "./clients.types";

interface ConfirmStatusModalProps {
  client: ClientTypes | null;
  newStatus: (typeof CLIENT_STATUS)[keyof typeof CLIENT_STATUS] | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

export const ConfirmStatusModal = ({
  client,
  newStatus,
  isOpen,
  onClose,
  onConfirm,
  isLoading = false,
}: ConfirmStatusModalProps) => {

  if (!client || newStatus === null) return null;
  //   const statuslabel =
  //     newStatus === CLIENT_STATUS.ACTIVE
  //       ? t("chips.active")
  //       : t("chips.inactive");

  return (
    <AppModal
      isOpen={isOpen}
      onOpenChange={(open) => !open && onClose()}
      //   title={t(clients.change_status)}
      width="lg:w-[450px]"
      footer={
        <div className="flex justify-center gap-4">
          <AppButton
            variant="outlined"
            buttonText="Cancel"
            onClick={onClose}
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
        <p>{"Are you sure you want to change the status?"}</p>
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
