import { Question } from "../question";

export function Survey(props: { title: string; children: React.ReactNode }) {
  const { title, children } = props;
  return (
    <div className="w-full h-full flex-1 flex flex-col gap-8 items-center">
      {/* Header */}
      <Question>
        {title.split("\n").map((value) => (
          <div>{value}</div>
        ))}
      </Question>
      {children}
    </div>
  );
}
