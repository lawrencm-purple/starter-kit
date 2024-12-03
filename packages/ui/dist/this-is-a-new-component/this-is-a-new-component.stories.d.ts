import type { StoryObj } from "@storybook/react";
import React from "react";
declare const meta: {
    title: string;
    component: React.FC<{
        text?: string;
    }>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithCustomText: Story;
//# sourceMappingURL=this-is-a-new-component.stories.d.ts.map