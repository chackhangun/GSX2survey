import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PrimaryButton } from "./PrimaryButton";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    children: "활성화 상태",
  },
};

export const Inactive: Story = {
  args: {
    children: "비활성화 상태",
    disabled: true,
  },
};
