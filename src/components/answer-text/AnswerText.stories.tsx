import type { Meta, StoryObj } from "@storybook/react";
import { AnswerText } from "./AnswerText";
import { fn } from "@storybook/test";
const meta = {
  title: "AnswerText",
  component: AnswerText,
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
  args: { onClick: fn() },
} satisfies Meta<typeof AnswerText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "디폴트 Answer입니다",
    active: false,
  },
};

export const Active: Story = {
  args: {
    children: "활성화된 Answer입니다",
    active: true,
  },
};
