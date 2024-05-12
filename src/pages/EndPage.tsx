import { Guide } from "../components/guide";
import { Header } from "../components/header";
import { PrimaryButton } from "../components/primary-button";
import SurveyEnd from "../images/survey_end.png"; // 이미지 경로를 정확하게 지정
import { useNavigate } from "react-router-dom";

export function EndPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-between min-h-30">
      <Header
        hasBackIcon
        onClickBackIcon={() => {
          navigate(-1);
        }}
      >
        검사 설문 완료!
      </Header>
      <div className="w-80">
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={SurveyEnd}
          alt="Survey End"
        />
      </div>
      <Guide
        title={"감사합니다\n구강미생물검사를 준비하고 있어요."}
        content={`구강미생물 검사는 1-2주 정도의\n기간이 소요될 예정입니다.\n검사가 끝나면 알림으로 알려드릴게요!`}
      />
      <PrimaryButton
        onClick={() => {
          navigate("/");
        }}
      >
        메인페이지로 돌아가기
      </PrimaryButton>
    </div>
  );
}
