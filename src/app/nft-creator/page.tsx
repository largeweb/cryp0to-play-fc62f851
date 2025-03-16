xml
<project>
  <name>NFT Creator</name>
  <framework>next-on-pages</framework>
  <overview>
    <user-summary>
      NFT Creator is a simple tool allowing users to generate unique NFT images from a set of customizable properties and download them.
    </user-summary>
    <technical-metadata>
      This application uses Next.js with client-side rendering for the image generation. The core functionality involves composing different image layers based on user selections.  Styling is done with Tailwind CSS.  The application focuses on a clean user interface and provides download functionality.
    </technical-metadata>
    <styling>
      The color palette uses a dark background with light, vibrant accents.  The layout will be centered and responsive.  Interactive elements should have clear hover states.  A modern sans-serif font will be used throughout the application.
    </styling>
  </overview>
</project>

<page>
  <path>src/app/nft-creator/page.tsx</path>
  <description>
    "use client";
    This is the main page of the NFT creator application.

    - Layout: A centered layout with sections for property selection, image preview, and download. Responsive design using Tailwind CSS.
    - State Management: useState hooks for each customizable property (e.g., background color, character, accessory) and for the generated image URL.
    - Image Composition: A function `generateNFTImage` that takes the selected properties and combines the corresponding image layers to generate the final NFT image. This is a mock implementation that generates a static image URL.
    - Mock Assets: The page will use mock image assets for the different properties. Include placeholder URLs for now.
    - Download: An "a" tag with the download attribute to allow downloading of the generated image.
    - Event Handling:  onChange handlers for the select elements to update the corresponding state variables.
    - Animation: None.
    - No API calls are made.
    - Responsiveness
      - Mobile: Stacking layout for properties and generated image.
      - Tablet: Side-by-side layout where feasible.
      - Desktop: Comfortable spacing and sizing.
  </description>
</page>

<asset>
  <path>public/assets/backgrounds/bg1.png</path>
  <description>Mock background image 1</description>
</asset>
<asset>
  <path>public/assets/characters/char1.png</path>
  <description>Mock character image 1</description>
</asset>
<asset>
  <path>public/assets/accessories/acc1.png</path>
  <description>Mock accessory image 1</description>
</asset>