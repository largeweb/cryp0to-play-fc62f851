xml
<project>
  <name>AI Grammar Corrector</name>
  <framework>next-on-pages</framework>
  <overview>
    <user-summary>
      AI Grammar Corrector is an application that leverages AI to correct grammatical errors in user-provided text.
    </user-summary>
    <technical-metadata>
      This application uses Next.js for the frontend and integrates with a backend AI service (mocked for this exercise) to correct grammar. Styling is handled with Tailwind CSS.  The architecture is a single-page application with client-side processing for a smooth user experience.
    </technical-metadata>
    <styling>
      The global styling will focus on a clean, professional, and easily readable design. We'll use a light color palette with clear contrasts. Font sizes will be adjusted for readability.
    </styling>
  </overview>
</project>

<component>
  <path>src/app/components/InputField.tsx</path>
  <description>
    "use client";
    A reusable input field component.
    - Props:
      - `label`: string - The label for the input field.
      - `value`: string - The current value of the input field.
      - `onChange`: (e: React.ChangeEvent<HTMLInputElement>) => void - A callback function to handle changes to the input field.
      - `type`: string - Type of input field (e.g. "text", "email"). Defaults to "text".
    - State Management: None (controlled component).
    - Mock Event Handling: The `onChange` prop is called whenever the input value changes.
    - Style: Tailwind CSS for styling (input field, label).
    - Animation: None.
    - Edge Compatibility:  Uses client-side functionality ("use client").
  </description>
</component>