import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerText } from "../components/answer-text";
import { AnswerTextWithImage } from "../components/answer-text-with-image";
import { Page } from "../components/page/Page";
import { Survey } from "../components/survey/Survey";
import Img1 from "../images/answerImg-1.png";
import Img2 from "../images/answerImg-2.png";
import Img3 from "../images/answerImg-3.png";

export function Page6() {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [activeIndex2, setActiveIndex2] = useState<number>(-1);

  const onChangeActiveIndex = (index: number) => {
    if (index !== 2) setActiveIndex2(-1);
    setActiveIndex(index);
  };

  const onChangeActiveIndex2 = (index: number) => {
    setActiveIndex2(index);
  };

  return (
    <Page
      headerText="검사 설문"
      buttonText="다음"
      onClickHeaderBackIcon={() => {
        navigate(-1);
      }}
      onClickPrimaryButton={() => {
        if (activeIndex === -1 || (activeIndex === 2 && activeIndex2 === -1)) {
          alert("선택해주세요");
          return;
        }
        navigate("/end");
      }}
    >
      {" "}
      <div className="w-full h-[98px]"></div>
      <Survey title={"양치질 외 사용하는\n구강관리법이 있으십니까?"}>
        <div className="w-full flex flex-col gap-2">
          <AnswerText
            active={activeIndex === 0}
            onClick={() => onChangeActiveIndex(0)}
          >
            전혀 없음
          </AnswerText>
          <AnswerText
            active={activeIndex === 1}
            onClick={() => onChangeActiveIndex(1)}
          >
            구강유산균 복용
          </AnswerText>
          <AnswerText
            active={activeIndex === 2}
            onClick={() => onChangeActiveIndex(2)}
          >
            구강관리용품 사용(치실, 치간칫솔 등)
          </AnswerText>
        </div>
        {activeIndex === 2 && (
          <div className="w-full flex flex-col gap-2">
            <AnswerTextWithImage
              imgPath={Img1}
              active={activeIndex2 === 0}
              onClick={() => onChangeActiveIndex2(0)}
            >
              치간칫솔
            </AnswerTextWithImage>
            <AnswerTextWithImage
              imgPath={Img2}
              active={activeIndex2 === 1}
              onClick={() => onChangeActiveIndex2(1)}
            >
              치실
            </AnswerTextWithImage>
            <AnswerTextWithImage
              imgPath={Img3}
              active={activeIndex2 === 2}
              onClick={() => onChangeActiveIndex2(2)}
            >
              구강세정기(워터픽)
            </AnswerTextWithImage>
            <div className="w-full h-5"></div>
          </div>
        )}
      </Survey>
    </Page>
  );
}
