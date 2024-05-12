import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerTextWithImage } from "../components/answer-text-with-image";
import { Page } from "../components/page/Page";
import { Survey } from "../components/survey/Survey";
import Img1 from "../images/answerImg-1.png";
import Img2 from "../images/answerImg-2.png";
import Img3 from "../images/answerImg-3.png";

export function Page3() {
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
        navigate("/4");
      }}
    >
      <div className="w-full h-[98px]"></div>
      <Survey title={"사용하고 계시는 구강관리 도구를\n모두 체크해주세요!"}>
        <div className="w-full flex flex-col gap-2">
          <AnswerTextWithImage
            imgPath={Img1}
            active={activeIndex === 0}
            onClick={() => onChangeActiveIndex(0)}
          >
            치간칫솔
          </AnswerTextWithImage>
          <AnswerTextWithImage
            imgPath={Img2}
            active={activeIndex === 1}
            onClick={() => onChangeActiveIndex(1)}
          >
            치실
          </AnswerTextWithImage>
          <AnswerTextWithImage
            imgPath={Img3}
            active={activeIndex === 2}
            onClick={() => onChangeActiveIndex(2)}
          >
            구강세정기(워터픽)
          </AnswerTextWithImage>
        </div>
      </Survey>
    </Page>
  );
}
