import type { Meta, StoryObj } from "@storybook/react";
import { Guide } from "./Guide";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Guide",
  component: Guide,
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
} satisfies Meta<typeof Guide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestGuide: Story = {
  args: {
    title: "테스트 가이드",
    content: "내용이 없습니다1.\n내용이 없습니다2.\n내용이 없습니다3.",
  },
};
