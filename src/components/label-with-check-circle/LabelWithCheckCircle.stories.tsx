import type { Meta, StoryObj } from "@storybook/react";
import { LabelWithCheckCircle } from "./LabelWithCheckCircle";
const meta = {
  title: "LabelWithCheckCircle",
  component: LabelWithCheckCircle,
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
} satisfies Meta<typeof LabelWithCheckCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    checked: false,
    label: "기억이 나지 않아요",
    onChange: () => {},
  },
};

export const Large: Story = {
  args: {
    size: "large",
    checked: true,
    label: "기억이 나지 않아요",
    onChange: () => {},
  },
};

export const LargeWithArrow: Story = {
  args: {
    size: "large",
    checked: true,
    label: "기억이 나지 않아요",
    onChange: () => {},
    arrowIcon: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    checked: false,
    label: "기억이 나지 않아요",
    onChange: () => {},
  },
};
