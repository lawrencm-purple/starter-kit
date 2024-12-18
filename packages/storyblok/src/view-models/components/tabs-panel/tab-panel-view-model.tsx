"use client";

import React from "react";
import { storyblokEditable } from "@storyblok/react";

import { TabPanelStoryblok } from "../../../types/storyblok-component-types";

type TabPanelViewModelProps = {
  blok: TabPanelStoryblok;
};

const TabPanelViewModel = ({ blok }: TabPanelViewModelProps) => {
  return <div {...storyblokEditable(blok)}>TabPanel</div>;
};

export default TabPanelViewModel;
