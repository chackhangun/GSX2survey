export function AnswerText(props: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  const { children, active, onClick } = props;
  return (
    <div
      className={`w-full box-border p-4 flex justify-center items-center border border-gray-300 rounded-[8px] text-base font-medium cursor-pointer
    ${active ? "bg-primary-50 border-primary-500 text-primary-500" : "text-gray-500 hover:border-primary-500 hover:text-primary-500 hover:font-semibold"}
    `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
