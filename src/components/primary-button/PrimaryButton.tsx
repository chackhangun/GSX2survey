export function PrimaryButton(props: {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const { className, onClick, children, disabled } = props;
  return (
    <div
      onClick={onClick}
      className={
        className +
        `w-full h-[54px] box-border py-4 px-2 flex justify-center items-center text-base rounded-[16px] text-white font-regular cursor-pointer ${disabled ? "bg-gray-300" : "bg-primary-500"} ${disabled ? "" : "hover:bg-primary-400"}`
      }
    >
      {children}
    </div>
  );
}
