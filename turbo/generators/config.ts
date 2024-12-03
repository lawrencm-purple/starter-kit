import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("UIComponent", {
    description: "Create a new presentational UI component (dumb component with internal state only)",
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
        path: "{{ turbo.paths.root }}/packages/ui/src/{{ dashCase name }}/{{ dashCase name }}.tsx",
        templateFile: "templates/ui-component/component.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/src/{{ dashCase name }}/{{ dashCase name }}.stories.tsx",
        templateFile: "templates/ui-component/component.stories.hbs",
      },
    ],
  });

  plop.setGenerator("example", {
    description: "An example Turborepo generator - creates a new file at the root of the project",
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
