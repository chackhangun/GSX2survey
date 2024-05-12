import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Page } from "./Page";
import { MemoryRouter } from "react-router-dom";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Page",
  component: Page,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClickHeaderBackIcon: fn(), onClickPrimaryButton: fn() },
  decorators: [
    (Story) => (
      <div style={{ width: "800px", height: "900px" }}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defulat: Story = {
  args: {
    headerText: "테스트 페이지",
    buttonText: "테스트 버튼",
    children: <div>테스트 페이지입니다.</div>,
  },
};
