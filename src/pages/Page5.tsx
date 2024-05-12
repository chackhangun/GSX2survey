import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerText } from "../components/answer-text";
import { Page } from "../components/page/Page";
import { Survey } from "../components/survey/Survey";

export function Page5() {
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
        navigate("/6");
      }}
    >
      {" "}
      <div className="w-full h-[98px]"></div>
      <Survey title="음주 습관은 어떻습니까?">
        <div className="w-full flex flex-col gap-2">
          <AnswerText
            active={activeIndex === 0}
            onClick={() => onChangeActiveIndex(0)}
          >
            전혀 안 마심
          </AnswerText>
          <AnswerText
            active={activeIndex === 1}
            onClick={() => onChangeActiveIndex(1)}
          >
            아주 가끔(몇 달에 한번)
          </AnswerText>
          <AnswerText
            active={activeIndex === 2}
            onClick={() => onChangeActiveIndex(2)}
          >
            가끔(월1-2회)
          </AnswerText>
          <AnswerText
            active={activeIndex === 3}
            onClick={() => onChangeActiveIndex(3)}
          >
            자주(주1-2회)
          </AnswerText>
          <AnswerText
            active={activeIndex === 4}
            onClick={() => onChangeActiveIndex(4)}
          >
            매우 자주(주3회 이상)
          </AnswerText>
        </div>
      </Survey>
    </Page>
  );
}
