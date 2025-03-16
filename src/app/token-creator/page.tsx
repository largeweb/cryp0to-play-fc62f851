```xml
<project>
  <name>Token Creator</name>
  <framework>next-on-pages</framework>
  <overview>
    A simple tool for generating and managing API tokens.  It provides a form to create tokens, displays a list of generated tokens, and allows users to revoke existing tokens. Uses local storage to persist tokens for this example.
  </overview>
</project>

<page>
  <path>src/app/token-creator/page.tsx</path>
  <description>
    "use client";
    This is the main page for the token creator application.

    - Layout:  A simple layout with a heading, token creation form, and a list of existing tokens.
    - State Management: useState for managing the new token description input and the list of generated tokens. Tokens are stored in local storage using useEffect to load and save.
    - Local Storage: Implement a useEffect hook to load tokens from local storage on component mount and save tokens to local storage whenever the token list changes. Use the key "apiTokens" for local storage.
    - Token Generation: A function `generateToken` that creates a unique token (e.g., using `crypto.randomUUID()`).
    - Token Revocation: A function `revokeToken` that removes a token from the list and updates local storage.
    - Style: Tailwind CSS for styling.
    - Animation: None.
  </description>
</page>