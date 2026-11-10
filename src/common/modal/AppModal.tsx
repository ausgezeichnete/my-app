import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DialogCloseButton({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogContent className="bg-white p-10 border-none w-full lg:w-169.5 max-w-max sm:max-w-1/2">
        <div className="flex flex-col items-center justify-center text-center">
          <DialogHeader className="self-baseline mb-9">{children}</DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
}
interface AppModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
  className?: string;
}

const AppModal = ({
  isOpen,
  onOpenChange,
  title,
  children,
  footer,
  width = "lg:w-169.5",
  className = "",
}: AppModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={`bg-white p-10 border-none w-full ${width} max-w-max sm:max-w-1/2 ${className}`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          {title && (
            <DialogHeader className="self-baseline mb-9">
              <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
            </DialogHeader>
          )}
          <div className="w-full">{children}</div>
          {footer && <div className="mt-8 w-full">{footer}</div>}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppModal;
