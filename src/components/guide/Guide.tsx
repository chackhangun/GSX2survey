export function Guide(props: { title: string; content: string }) {
  const { title, content } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-2xl font-semibold text-primary-500">{title}</div>
      <div className="text-base font-regular">
        {content.split("\n").map((value) => (
          <div>{value}</div>
        ))}
      </div>
    </div>
  );
}
