import type { Meta, StoryObj } from "@storybook/react";
import { Survey } from "./Survey";
const meta = {
  title: "Survey",
  component: Survey,
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
} satisfies Meta<typeof Survey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "테스트 질문",
    children: <div>테스트 답변입니다.</div>,
  },
};
