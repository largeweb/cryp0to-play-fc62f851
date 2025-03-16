xml
<project>
  <name>AI Template Generator</name>
  <framework>next-on-pages</framework>
  <overview>
    This application allows users to select from a variety of pre-defined templates and generate customized content based on their selections. The frontend is built with Next.js, leveraging client-side interactivity for a dynamic user experience.
  </overview>
</project>

<component>
  <path>src/app/components/TemplateSelector.tsx</path>
  <description>
    "use client";
    This component provides a UI for users to select a template and input data.

    - Functionality: Displays a list of available templates (hardcoded for now). Allows users to select a template. Renders input fields based on the selected template. Provides a "Generate" button to trigger content generation.
    - Data: A hardcoded list of template objects. Each template object should have:
      - `id`: A unique identifier (string).
      - `name`: The display name of the template (string).
      - `description`: A brief description of the template (string).
      - `fields`: An array of field objects. Each field object should have:
        - `name`: The name of the field (string).
        - `label`: The display label for the field (string).
        - `type`: The input type ("text", "textarea", "number", etc.) (string).
    - Prop Interface: `onGenerate`: A function that is called when the "Generate" button is clicked. It takes two arguments:
      - `templateId`: The ID of the selected template (string).
      - `fieldValues`: An object containing the values entered by the user for each field in the template. The keys of this object should match the `name` property of the field objects.
    - State Management:
      - `selectedTemplate`: useState for the ID of the currently selected template (string).
      - `fieldValues`: useState for an object that stores the values entered by the user in the input fields (object).
    - Mock Event Handling: The `onGenerate` prop is called with the `selectedTemplate` and `fieldValues` when the "Generate" button is clicked.
    - Styling: Tailwind CSS for styling.
    - Animation: None.
    - Edge Compatibility:  Uses client-side functionality ("use client").
  </description>
</component>