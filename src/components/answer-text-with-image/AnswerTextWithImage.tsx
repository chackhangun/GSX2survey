import { useState } from "react";

export function AnswerTextWithImage(props: {
  imgPath: string;
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  const { imgPath, children, active, onClick } = props;
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`w-full box-border flex gap-4 items-center border border-gray-300 rounded-[8px] text-base font-medium cursor-pointer
    ${active ? "bg-primary-50 border-primary-500 text-primary-500" : "text-gray-500 hover:border-primary-500 hover:text-primary-500 hover:font-semibold"}
    `}
      onClick={onClick}
    >
      <div
        className={`w-[100px] border-r ${hover ? "border-primary-500" : "border-gray-300"}`}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={imgPath}
        />
      </div>
      {children}
    </div>
  );
}
