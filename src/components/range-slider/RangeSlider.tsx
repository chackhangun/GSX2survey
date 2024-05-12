import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

export function RangeSlider(props: {
  disabled?: boolean;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}) {
  const { disabled, min, max, value, onChange } = props;

  return (
    <div className="w-full overflow-hidden">
      <PrettoSlider
        disabled={disabled}
        defaultValue={20}
        value={value}
        min={min}
        max={max}
        sx={{
          "& .MuiSlider-track": { color: disabled ? "#c6c6c6" : "#505050" },
        }}
        onChange={(_, value) => onChange(value as number)}
      />
    </div>
  );
}

const PrettoSlider = styled(Slider)({
  width: "92%",
  color: "#c6c6c6",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
    color: "#505050",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.25)",
    },
    "&::before": {
      display: "none",
    },
  },
  //   "& .MuiSlider-valueLabel": {
  //     lineHeight: 1.2,
  //     fontSize: 12,
  //     background: "unset",
  //     padding: 0,
  //     width: 32,
  //     height: 32,
  //     borderRadius: "50% 50% 50% 0",
  //     backgroundColor: "#52af77",
  //     transformOrigin: "bottom left",
  //     transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
  //     "&::before": { display: "none" },
  //     "&.MuiSlider-valueLabelOpen": {
  //       transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
  //     },
  //     "& > *": {
  //       transform: "rotate(45deg)",
  //     },
  //   },
});
