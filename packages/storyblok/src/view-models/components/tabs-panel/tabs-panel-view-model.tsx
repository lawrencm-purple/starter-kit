import React from "react";
import { TabbedContent, TabItem } from "@com/ui";
import { storyblokEditable } from "@storyblok/react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

import {
  TabPanelStoryblok,
  TabsPanelStoryblok,
} from "../../../types/storyblok-component-types";

type TabsPanelViewModelProps = {
  blok: TabsPanelStoryblok;
};

const RenderTabbedContent = (blok: TabPanelStoryblok) => {
  console.log(blok);
  return <StoryblokServerComponent blok={blok.tabBody!} />;
};

const buildTabs = (inputTabs?: TabPanelStoryblok[]): TabItem[] => {
  if (!inputTabs) return [];
  ``;
  const tabs: TabItem[] = [];

  inputTabs.forEach((t) => {
    tabs.push({
      label: t.tabLabel as string,
      content: RenderTabbedContent(t),
    });
  });

  return tabs;
};

const TabsPanelViewModel = ({ blok }: TabsPanelViewModelProps) => {
  const tabs = buildTabs(blok.tabs);

  const RenderContent = (t: TabPanelStoryblok) => {
    return (
      <div>
        {t.tabBody?.map((b) => (
          <StoryblokServerComponent key={b._uid} blok={b} />
        ))}
      </div>
    );
  };

  const f = blok.tabs?.map((t) => ({
    label: t.tabLabel as string,
    content: RenderContent(t),
  }));

  return (
    <div {...storyblokEditable(blok)}>
      <TabbedContent tabs={f!} />

      {/* {blok.tabs?.map((t) => (
        <StoryblokServerComponent blok={t} key={t._uid} />
      ))} */}
    </div>
  );
};

export default TabsPanelViewModel;
