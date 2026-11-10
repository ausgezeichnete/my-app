import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export type appHeaderProps = {
  title?: string;
  img?: string;
  onBackClick?: () => void;
};

export const AppHeader = ({ title, img, onBackClick }: appHeaderProps) => {
  const navigate = useNavigate();
  const handleBackCLick = () => onBackClick?.() ?? navigate(-1);
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-5">
        <h2>{title}</h2>
        {img && (
          <p>
            <img src={img} className="w-3 h-3" />
          </p>
        )}
      </div>
      <button
        onClick={handleBackCLick}
        className="flex items-center gap-2 cursor-pointer"
      >
        <span>Back</span>
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
