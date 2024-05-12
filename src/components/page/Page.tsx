import { Header } from "../header";
import { PrimaryButton } from "../primary-button";

export function Page(props: {
  headerText: string;
  children: React.ReactNode;
  buttonText: string;
  onClickHeaderBackIcon: () => void;
  onClickPrimaryButton: () => void;
}) {
  const {
    headerText,
    buttonText,
    children,
    onClickHeaderBackIcon,
    onClickPrimaryButton,
  } = props;
  return (
    <div className="w-full h-full flex flex-col items-center min-h-30">
      <Header hasBackIcon onClickBackIcon={onClickHeaderBackIcon}>
        {headerText}
      </Header>
      <div className="flex-1 w-full h-full overflow-scroll flex flex-col">
        {children}
      </div>
      <PrimaryButton onClick={onClickPrimaryButton}>{buttonText}</PrimaryButton>
    </div>
  );
}
