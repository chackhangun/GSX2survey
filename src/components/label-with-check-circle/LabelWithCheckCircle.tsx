import { MdCheckCircle, MdCheckCircleOutline } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

export function LabelWithCheckCircle(props: {
  size: "small" | "medium" | "large";
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
  arrowIcon?: boolean;
}) {
  const { size, checked, onChange, label, arrowIcon } = props;
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      <div
        className={`${size === "small" ? "w-4 h-4" : size === "medium" ? "w-6 h-6" : "w-8 h-8"} flex justify-center items-center cursor-pointer`}
        onClick={() => {
          onChange(!checked);
        }}
      >
        {!checked ? (
          <MdCheckCircleOutline color={"#A0A0A0"} className="w-full h-full" />
        ) : (
          <MdCheckCircle color={"#1B1BB3"} className="w-full h-full" />
        )}
      </div>
      <div
        className={`flex-1 text-left w-full text-base ${size === "small" ? "" : size === "medium" ? "text-sm" : "text-lg font-semibold"} text-gray-900`}
      >
        {label}
      </div>
      {arrowIcon && (
        <div
          className={`${size === "small" ? "w-2 h-2" : size === "medium" ? "w-4 h-4" : "w-6 h-6"} flex justify-center items-center cursor-pointer`}
        >
          <FaChevronRight color={"#A0A0A0"} />
        </div>
      )}
    </div>
  );
}
