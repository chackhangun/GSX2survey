import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export function LabelWithCheckBox(props: {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}) {
  const { checked, onChange, label } = props;
  return (
    <div className="flex gap-2">
      <div
        className="w-6 h-6 flex justify-center items-center cursor-pointer"
        onClick={() => {
          onChange(!checked);
        }}
      >
        {!checked ? (
          <MdCheckBoxOutlineBlank color={"#A0A0A0"} className="w-full h-full" />
        ) : (
          <MdCheckBox color={"#1B1BB3"} className="w-full h-full" />
        )}
      </div>
      <div className="text-base text-gray-800">{label}</div>
    </div>
  );
}
