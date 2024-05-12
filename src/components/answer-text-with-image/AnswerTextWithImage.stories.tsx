import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AnswerTextWithImage } from "./AnswerTextWithImage";

const meta = {
  title: "AnswerTextWithImage",
  component: AnswerTextWithImage,
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
} satisfies Meta<typeof AnswerTextWithImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgPath: "https://via.placeholder.com/150",
    children: "디폴트 Answer입니다",
    active: false,
  },
};
