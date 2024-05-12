import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LabelWithCheckBox } from "../components/label-with-check-box";
import { Page } from "../components/page/Page";
import { RangeSlider } from "../components/range-slider/RangeSlider";
import { Survey } from "../components/survey/Survey";

export function Page2() {
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);
  const [check, setCheck] = useState<boolean>(false);

  const onChange = () => setCheck((prev) => !prev);
  return (
    <Page
      headerText="검사 설문"
      buttonText="다음"
      onClickHeaderBackIcon={() => {
        navigate(-1);
      }}
      onClickPrimaryButton={() => {
        if (value === 0 && check === false) {
          alert("선택해주세요");
          return;
        }
        navigate("/3");
      }}
    >
      <div className="w-full h-[98px]"></div>
      <Survey title={"과거 흡연 및 금연 기간을\n적어주세요"}>
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-[22px]"></div>
          <div className="flex justify-center items-center text-lg font-semibold">
            과거 흡연 기간
          </div>
          <div className="w-full h-4"></div>
          <div className="flex justify-center items-center text-2xl font-semibold">
            {value}년
          </div>
          <RangeSlider
            disabled={check}
            value={value}
            onChange={(value) => setValue(value)}
            min={0}
            max={30}
          />
          <div className="flex-1 w-full h-full" />
          <div className="w-full flex justify-center items-center">
            <LabelWithCheckBox
              checked={check}
              label="기억이 나지 않아요"
              onChange={onChange}
            />
          </div>
          <div className="w-full h-4" />
        </div>
      </Survey>
    </Page>
  );
}
