export function Question(props: { children: React.ReactNode }) {
  return (
    <div className="w-full text-2xl justify-center font-semibold text-gray-900">
      {props.children}
    </div>
  );
}
