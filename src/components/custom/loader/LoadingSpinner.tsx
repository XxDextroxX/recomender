import { FiRefreshCcw } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className="loading">
      <div
        className={twMerge(
          "flex w-full h-52 justify-center items-center",
          className
        )}
      >
        <FiRefreshCcw size={40} className="animate-spin" />
      </div>
    </div>
  );
};
