import React from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../shadcn/components/ui/tabs";

interface TabItem {
  label: string;
  content: JSX.Element;
}

type TabbedContentProps = {
  tabs: TabItem[];
};

const TabbedContent: React.FC<TabbedContentProps> = ({ tabs }) => {
  const firstLabel = tabs[0]?.label ?? "";

  return (
    <Tabs
      defaultValue={firstLabel}
      orientation="vertical"
      className="my-4 w-full overflow-hidden rounded-2xl border-4 border-slate-300"
    >
      <TabsList className="w-full rounded-none bg-slate-300">
        {tabs.map(({ label }, idx) => {
          const id = `content-tab-${label.toLowerCase().replace(/ /g, "-")}`;
          return (
            <TabsTrigger
              key={idx}
              value={label}
              className="mt-0"
              id={id}
              aria-controls={id}
            >
              {label}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {tabs.map(({ label, content }, idx) => {
        const id = `content-tab-${label.toLowerCase().replace(/ /g, "-")}`;
        return (
          <TabsContent
            key={idx}
            value={label}
            aria-labelledby={id}
            className="mt-0 min-h-24 bg-white p-4"
          >
            {content}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export { TabbedContent };
export type { TabItem };
