import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div style={{ width: "500px", height: "50px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotHasBackIcon: Story = {
  args: {
    children: "헤더 with 아이콘 없음",
  },
};

export const HasBackIcon: Story = {
  args: {
    children: "헤더 with 아이콘 있음",
    hasBackIcon: true,
  },
};
