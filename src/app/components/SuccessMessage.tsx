xml
<project>
  <name>Task Management App</name>
  <framework>next-on-pages</framework>
  <overview>
    A simple task management application allowing users to create, view, and manage their tasks.  Tasks can be marked as complete.
    Uses local storage to persist data.
  </overview>
</project>

<component>
  <path>src/app/components/Task.tsx</path>
  <description>
    "use client";
    A component to display a single task item.

    - Props:
      - `task`: { id: string, text: string, completed: boolean }
      - `onToggle`: (id: string) => void - Function to toggle task completion
      - `onDelete`: (id: string) => void - Function to delete the task
    - Style: Tailwind CSS for basic styling and layout.
    - State Management: No state management within the component.
    - Event Handling: Calls `onToggle` when the checkbox is clicked and `onDelete` when the delete button is clicked.
    - Edge Compatibility:  Uses client-side functionality ("use client").
  </description>
</component>

<component>
  <path>src/app/components/TaskList.tsx</path>
  <description>
    "use client";
    A component to display a list of tasks.

    - Props:
      - `tasks`: Array of { id: string, text: string, completed: boolean }
      - `onToggle`: (id: string) => void - Function to toggle task completion
      - `onDelete`: (id: string) => void - Function to delete the task
    - Style: Tailwind CSS for basic styling and layout.
    - State Management: No state management within the component.
    - Rendering Logic: Maps over the `tasks` prop and renders a `Task` component for each task.
    - Edge Compatibility:  Uses client-side functionality ("use client").
  </description>
</component>

<component>
  <path>src/app/components/TaskInput.tsx</path>
  <description>
    "use client";
    A component to input new tasks.

    - Purpose: Provides an input field and button for users to add new tasks.
    - Prop Interface: `onAddTask: (text: string) => void`
    - State Management: `useState` for the input field value.
    - Event Handling: Calls `onAddTask` when the form is submitted.
    - Style: Tailwind CSS for styling (input field, button, and basic layout).
  </description>
</component>

<component>
  <path>src/app/components/SuccessMessage.tsx</path>
  <description>
    "use client";
    Displays a success message when a task is added or completed.

    - Props: `message: string` - The message to display.
    - Style: Tailwind CSS for basic styling (green background, white text).
    - State Management: None.
    - Event Handling: None.
    - Animation: Use Framer Motion to fade in and fade out the message after a short delay.
  </description>
</component>