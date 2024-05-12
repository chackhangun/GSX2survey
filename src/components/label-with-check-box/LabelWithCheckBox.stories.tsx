import type { Meta, StoryObj } from "@storybook/react";
import { LabelWithCheckBox } from "./LabelWithCheckBox";
const meta = {
  title: "LabelWithCheckBox",
  component: LabelWithCheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "500px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LabelWithCheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    label: "기억이 나지 않아요",
    onChange: () => {},
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "기억이 나지 않아요",
    onChange: () => {},
  },
};
