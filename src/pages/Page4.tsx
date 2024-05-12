import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LabelWithCheckBox } from "../components/label-with-check-box";
import { Page } from "../components/page/Page";
import { LabelWithCheckCircle } from "../components/label-with-check-circle";

export function Page4() {
  const navigate = useNavigate();

  const [check, setCheck] = useState<
    [boolean, boolean, boolean, boolean, boolean]
  >([false, false, false, false, false]);

  const onChangeCheck = (index: number) => {
    setCheck((prev) => {
      if (index === 0) {
        const newCheck = [!prev[0], !prev[0], !prev[0], !prev[0], !prev[0]];
        return newCheck as [boolean, boolean, boolean, boolean, boolean];
      } else {
        const newCheck = [...prev, !prev[index]];
        newCheck[index] = !newCheck[index];
        return newCheck as [boolean, boolean, boolean, boolean, boolean];
      }
    });
  };

  return (
    <Page
      headerText="미생물검사 동의서"
      buttonText="다음"
      onClickHeaderBackIcon={() => {
        navigate(-1);
      }}
      onClickPrimaryButton={() => {
        if (!check[0]) {
          alert("모두 동의해주세요");
          return;
        }
        navigate("/5");
      }}
    >
      <div className="w-full h-7"></div>
      <div className="flex-1 w-full h-full">
        <div className="w-full flex flex-col border border-gray-300 box-border py-4 px-2">
          <LabelWithCheckCircle
            size="large"
            checked={check[0]}
            label="개인정보 수집 동의"
            onChange={() => {
              onChangeCheck(0);
            }}
            arrowIcon
          />
        </div>
        <div className="w-full flex flex-col border-r border-l border-b border-gray-300 box-border py-3 px-3">
          <div className="w-full box-border py-2">
            <LabelWithCheckCircle
              size="medium"
              checked={check[1]}
              label="개인정보 수집 및 이용 동의"
              onChange={() => {
                onChangeCheck(1);
              }}
              arrowIcon
            />
          </div>
          <div className="w-full box-border py-2">
            <LabelWithCheckCircle
              size="medium"
              checked={check[2]}
              label="미생물 검사 개인정보 제3자 제공 동의"
              onChange={() => {
                onChangeCheck(2);
              }}
              arrowIcon
            />
          </div>{" "}
          <div className="w-full box-border py-2">
            <LabelWithCheckCircle
              size="medium"
              checked={check[3]}
              label="마크로젠 미생물 검사 민감정보 제3자 제공 동의"
              onChange={() => {
                onChangeCheck(3);
              }}
              arrowIcon
            />
          </div>{" "}
          <div className="w-full box-border py-2">
            <LabelWithCheckCircle
              size="medium"
              checked={check[4]}
              label="마크로젠 추가 미생물 검사 항목 분석 동의"
              onChange={() => {
                onChangeCheck(4);
              }}
              arrowIcon
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <LabelWithCheckBox
          checked={check[0]}
          label="모두 동의하기"
          onChange={() => {
            onChangeCheck(0);
          }}
        />
      </div>
      <div className="w-full h-4" />
    </Page>
  );
}
