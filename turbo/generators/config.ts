import { PlopTypes } from "@turbo/gen";

import sbTypes from "../../packages/storyblok/src/types/components.3000815.json";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("UIComponent", {
    description:
      "Create a new presentational UI component (dumb component with internal state only)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the new component?",
        validate: (input: string) => {
          if (!input) {
            return "component name is required";
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/src/components/{{ dashCase name }}/{{ dashCase name }}.tsx",
        templateFile: "templates/ui-component/component.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/src/components/{{ dashCase name }}/{{ dashCase name }}.stories.tsx",
        templateFile: "templates/ui-component/component.stories.hbs",
      },
    ],
  });

  plop.setGenerator("StoryblokViewModel", {
    description: "Create a new Storyblok view model component",
    prompts: [
      {
        type: "list",
        name: "StoryblokComponent",
        message: "What is the name of the Storyblok component?",
        choices: () => sbTypes.components.map((component) => component.name),
      },
      {
        type: "list",
        name: "type",
        message: "What is the type of Storyblok component?",
        choices: ["Component", "Page"],
      },
    ],

    actions: function (data) {
      var actions = [];

      if (data?.type === "Component") {
        actions.push({
          type: "add",
          path: "{{ turbo.paths.root }}/packages/storyblok/src/view-models/components/{{ dashCase StoryblokComponent }}/{{ dashCase StoryblokComponent }}-view-model.tsx",
          templateFile:
            "templates/storyblok-view-model/component-view-model.tsx.hbs",
        });
      }
      if (data?.type === "Page") {
        actions.push({
          type: "add",
          path: "{{ turbo.paths.root }}/packages/storyblok/src/view-models/pages/{{ dashCase StoryblokComponent }}/{{ dashCase StoryblokComponent }}-view-model.tsx",
          templateFile:
            "templates/storyblok-view-model/page-view-model.tsx.hbs",
        });
      }

      actions.push({
        type: "modify",
        path: "{{ turbo.paths.root }}/packages/storyblok/src/storyblok.ts",

        pattern: /(import.*?\n(?:import.*?\n)*)/,
        templateFile: "templates/storyblok-view-model/import.hbs",
      });
      // Add to components object
      actions.push({
        type: "modify",
        path: "{{ turbo.paths.root }}/packages/storyblok/src/storyblok.ts",
        pattern: /(components: {[\s\S]*?)(})/,
        templateFile: "templates/storyblok-view-model/component.hbs",
      });

      return actions;
    },
  });

  plop.setGenerator("example", {
    description:
      "An example Turborepo generator - creates a new file at the root of the project",
    prompts: [
      {
        type: "input",
        name: "file",
        message: "What is the name of the new file to create?",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "file name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "file name cannot include spaces";
          }
          if (!input) {
            return "file name is required";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "type",
        message: "What type of file should be created?",
        choices: [".md", ".txt"],
      },
      {
        type: "input",
        name: "title",
        message: "What should be the title of the new file?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/{{ dashCase file }}{{ type }}",
        templateFile: "templates/turborepo-generators.hbs",
      },
    ],
  });
}
