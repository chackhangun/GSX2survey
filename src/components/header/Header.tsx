import { FaChevronLeft } from "react-icons/fa";

export function Header(props: {
  hasBackIcon?: boolean;
  onClickBackIcon?: () => void;
  children: React.ReactNode;
}) {
  const { hasBackIcon, onClickBackIcon, children } = props;
  return (
    <div className="relative w-full h-11 flex justify-center items-center px-4">
      {hasBackIcon && (
        <div
          className="absolute left-0 w-6 h-6 flex justify-center items-center cursor-pointer"
          onClick={onClickBackIcon}
        >
          <FaChevronLeft />
        </div>
      )}
      <div className="text-lg font-semibold">{children}</div>
    </div>
  );
}
