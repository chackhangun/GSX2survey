import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerText } from "../components/answer-text";
import { Survey } from "../components/survey/Survey";
import { Page } from "../components/page/Page";

export function Page1() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const onChangeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <Page
      headerText="검사 설문"
      buttonText="다음"
      onClickHeaderBackIcon={() => {
        navigate(-1);
      }}
      onClickPrimaryButton={() => {
        if (activeIndex === -1) {
          alert("선택해주세요");
          return;
        }
        navigate("/2");
      }}
    >
      <div className="w-full h-[98px]"></div>
      <Survey title="평소 흡연을 하고 있나요?">
        <div className="w-full flex flex-col gap-2">
          <AnswerText
            active={activeIndex === 0}
            onClick={() => onChangeActiveIndex(0)}
          >
            전혀 피운적이 없어요
          </AnswerText>
          <AnswerText
            active={activeIndex === 1}
            onClick={() => onChangeActiveIndex(1)}
          >
            지금은 금연하고 있어요
          </AnswerText>
          <AnswerText
            active={activeIndex === 2}
            onClick={() => onChangeActiveIndex(2)}
          >
            현재 피우고 있어요
          </AnswerText>
        </div>
      </Survey>
    </Page>
  );
}
