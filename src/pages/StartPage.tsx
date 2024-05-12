import { useNavigate } from "react-router-dom";
import { Guide } from "../components/guide";
import { Page } from "../components/page/Page";
import SurveyStart from "../images/survey_start.png"; // 이미지 경로를 정확하게 지정
export function StartPage() {
  const navigate = useNavigate();
  return (
    <Page
      headerText="검사 설문 시작하기"
      buttonText="설문 시작하기"
      onClickHeaderBackIcon={() => {
        navigate(-1);
      }}
      onClickPrimaryButton={() => {
        navigate("1");
      }}
    >
      <div className="w-full h-[32px]"></div>
      <div className="w-full">
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={SurveyStart}
          alt="Survey Start"
        />
      </div>
      <Guide
        title={"구강미생물검사를 시작합니다!"}
        content={`더 자세한 검사를 위해 몇가지의\n설문조사를 진행할게요.\n함께 시작해볼까요!?`}
      />
    </Page>
  );
}
