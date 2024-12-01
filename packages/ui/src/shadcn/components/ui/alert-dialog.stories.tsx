import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, waitFor } from "@storybook/test";
import { within, userEvent } from "@storybook/test";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "./alert-dialog";
import { Button } from "./button";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

const AlertDialogDemo = ({
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
  cancelText = "Cancel",
  actionText = "Continue",
  variant = "default",
  disabled = false,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="">
        <Button data-testid="alert-trigger">Open Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent data-testid="alert-content" id="alertcontent">
        <AlertDialogHeader>
          <AlertDialogTitle data-testid="alert-title">{title}</AlertDialogTitle>
          <AlertDialogDescription data-testid="alert-description">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel data-testid="alert-cancel" disabled={disabled}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction data-testid="alert-action" disabled={disabled}>
            {actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const Default: Story = {
  render: () => <AlertDialogDemo />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Dialog should be initially closed", async () => {
      const dialog = document.querySelector('[data-testid="alert-content"]');
      expect(dialog).toBeNull();
    });

    await step("Dialog should open when trigger is clicked", async () => {
      const trigger = canvas.getByTestId("alert-trigger");
      await userEvent.click(trigger);

      // wait for the dialog to be in the document
      await waitFor(
        () => {
          const dialog = document.querySelector('[data-testid="alert-content"]');
          expect(dialog).toBeInTheDocument();
        },
        { timeout: 2000 }
      );
    });

    await step("Dialog should display correct content", async () => {
      await waitFor(
        () => {
          const title = document.querySelector('[data-testid="alert-title"]');
          const description = document.querySelector('[data-testid="alert-description"]');
          const cancelButton = document.querySelector('[data-testid="alert-cancel"]');
          const actionButton = document.querySelector('[data-testid="alert-action"]');

          expect(title).toHaveTextContent(/are you absolutely sure\?/i);
          expect(description).toHaveTextContent(/this action cannot be undone/i);
          expect(cancelButton).toHaveTextContent(/cancel/i);
          expect(actionButton).toHaveTextContent(/continue/i);
        },
        { timeout: 2000 }
      );
    });

    await step("Dialog should close when Cancel is clicked", async () => {
      await waitFor(
        () => {
          const cancelButton = document.querySelector('[data-testid="alert-cancel"]') as HTMLInputElement;
          userEvent.click(cancelButton);

          const dialog = canvas.queryByTestId("alert-content");
          expect(dialog).toBeNull();
        },
        { timeout: 2000 }
      );
    });
  },
};

export const CustomContent: Story = {
  render: () => <AlertDialogDemo title="Delete Project" description="Are you sure you want to delete this project? All of your data will be permanently removed. This action cannot be undone." cancelText="Keep Project" actionText="Delete Project" />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Should display custom content correctly", async () => {
      const trigger = canvas.getByTestId("alert-trigger");
      await userEvent.click(trigger);

      await waitFor(() => {
        const title = document.querySelector('[data-testid="alert-title"]');
        const cancelButton = document.querySelector('[data-testid="alert-cancel"]');
        const actionButton = document.querySelector('[data-testid="alert-action"]');

        expect(title).toHaveTextContent(/delete project/i);
        expect(cancelButton).toHaveTextContent(/keep project/i);
        expect(actionButton).toHaveTextContent(/delete project/i);
      });
    });
  },
};

// ... other story variants remain the same ...

export const ComplexLayout: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger className="">
        <Button data-testid="complex-alert-trigger">Open Complex Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent data-testid="complex-alert-content" className="max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle data-testid="complex-alert-title" className="flex items-center gap-2">
            <span className="text-red-500">⚠️</span>
            System Maintenance Required
          </AlertDialogTitle>
          <AlertDialogDescription data-testid="complex-alert-description">
            <div className="space-y-4">
              <p>The system requires immediate maintenance for the following components:</p>
              <ul className="list-disc pl-6 space-y-2" data-testid="maintenance-list">
                <li>Database optimization (Est. 2 hours)</li>
                <li>Cache clearing (Est. 30 minutes)</li>
                <li>Index rebuilding (Est. 1 hour)</li>
              </ul>
              <p className="font-semibold">Total estimated downtime: 3.5 hours</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <input type="checkbox" id="confirm" data-testid="confirmation-checkbox" />
            <label htmlFor="confirm">I understand the implications of this action</label>
          </div>
          <div className="flex justify-end gap-2">
            <AlertDialogCancel data-testid="complex-alert-cancel">Schedule Later</AlertDialogCancel>
            <AlertDialogAction data-testid="complex-alert-action" className="bg-red-500 hover:bg-red-600">
              Start Maintenance Now
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Should handle complex layout interactions", async () => {
      const trigger = canvas.getByTestId("complex-alert-trigger");
      await userEvent.click(trigger);

      await waitFor(() => {
        const title = document.querySelector('[data-testid="complex-alert-title"]');
        const list = document.querySelector('[data-testid="maintenance-list"]');
        const checkbox = document.querySelector('[data-testid="confirmation-checkbox"]');

        expect(title).toHaveTextContent(/system maintenance required/i);
        expect(list).toBeInTheDocument();
        expect((list as HTMLElement).children.length).toBe(3); // Type assertion added
        expect(checkbox).not.toBeChecked();
      });

      const checkbox = document.querySelector('[data-testid="confirmation-checkbox"]') as HTMLInputElement;
      await userEvent.click(checkbox);

      await waitFor(() => {
        expect(checkbox).toBeChecked();
      });

      const cancelButton = document.querySelector('[data-testid="complex-alert-cancel"]') as HTMLInputElement;
      await userEvent.click(cancelButton);

      await waitFor(() => {
        const dialog = document.querySelector('[data-testid="complex-alert-content"]');
        expect(dialog).toBeNull();
      });
    });
  },
};

export const KeyboardInteraction: Story = {
  render: () => <AlertDialogDemo />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Should close on Escape key press", async () => {
      const trigger = canvas.getByTestId("alert-trigger");
      await userEvent.click(trigger);

      await waitFor(() => {
        const dialog = document.querySelector('[data-testid="alert-content"]');
        expect(dialog).toBeInTheDocument();
      });

      await userEvent.keyboard("{Escape}");

      await waitFor(() => {
        const dialog = document.querySelector('[data-testid="alert-content"]');
        expect(dialog).toBeNull();
      });
    });
  },
};
