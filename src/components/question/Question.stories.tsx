import type { Meta, StoryObj } from "@storybook/react";
import { Question } from "./Question";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Question",
  component: Question,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div style={{ width: "500px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Question>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "테스트 질문입니다.",
  },
};
