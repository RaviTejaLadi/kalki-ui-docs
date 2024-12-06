interface CategoryComponent {
  label: string;
  path: string;
  description?: string;
}

interface CategorizedComponents {
  id: string;
  category: string;
  components: CategoryComponent[];
}
export const categorizedComponents: CategorizedComponents[] = [
  {
    id: 'layout',
    category: 'Layout',
    components: [
      {
        label: 'Layout',
        description:
          'A fundamental layout component used for creating containers with customizable padding, margins, and borders.',
        path: '/box',
      },
      {
        label: 'Box',
        description: '',
        path: '/box',
      },
      {
        label: 'Grid System',
        description: 'A layout framework for creating responsive, aligned designs using a system of rows and columns.',
        path: '/gridSystem',
      },
      {
        label: 'Stack',
        description:
          'A layout component for vertically or horizontally stacking child elements with consistent spacing.',
        path: '/stack',
      },
    ],
  },
  {
    id: 'forms',
    category: 'Forms',
    components: [
      {
        label: 'Forms',
        description: 'Components and utilities for creating and managing user input fields and form submissions.',
        path: '/forms',
      },
      { label: 'Input', description: '', path: '/input' },
      { label: 'Select', description: '', path: '/select' },
      { label: 'Radio', description: '', path: '/radio' },
      { label: 'Checkbox', description: '', path: '/checkbox' },
      { label: 'Textarea', description: '', path: '/textarea' },
      {
        label: 'Dropdown',
        description:
          'A UI element that allows users to select one option from a list of choices that appears when activated.',
        path: '/dropdown',
      },
      { label: 'Radio Card', description: '', path: '/radioCard' },
      { label: 'Checkbox Card', description: '', path: '/checkboxCard' },
    ],
  },
  {
    id: 'components',
    category: 'Components',
    components: [
      {
        label: 'Avatar',
        description: 'Graphical representations of users, typically displayed as profile pictures or icons.',
        path: '/avatar',
      },
      {
        label: 'Badge',
        description: 'Small visual indicators used to highlight information or notify users of a status or count.',
        path: '/badge',
      },
      {
        label: 'Tag',
        description: 'Label-like components used for categorization, filtering, or displaying metadata.',
        path: '/tag',
      },
      {
        label: 'Table',
        description:
          'Components for displaying data in rows and columns, often with sorting, filtering, and pagination capabilities.',
        path: '/table',
      },
      {
        label: 'Lists',
        description:
          'Components for displaying collections of items in various formats, such as bulleted, numbered, or custom-styled lists.',
        path: '/lists',
      },
    ],
  },
  {
    id: 'typography',
    category: 'Typography',
    components: [
      {
        label: 'Typography',
        description:
          'Documentation and examples of text styles, fonts, and formatting options available in the design system.',
        path: '/typography',
      },
      {
        label: 'Text Highlighter',
        description:
          'A utility for emphasizing specific portions of text, often used for search results or important information.',
        path: '/textHighlighter',
      },
    ],
  },
  {
    id: 'buttons',
    category: 'Buttons',
    components: [
      {
        label: 'Button',
        description: 'Interactive elements used to trigger actions or events in the user interface.',
        path: '/components/button',
      },
      {
        label: 'Link Button',
        description:
          'A hybrid component combining the functionality of a button with the navigation properties of a link.',
        path: '/linkButton',
      },
      {
        label: 'CloseButton',
        description: 'A standardized button for closing modal windows, panels, or dismissing notifications.',
        path: '/closeButton',
      },
      {
        label: 'LinkBar',
        description: 'A horizontal navigation component containing a group of related links or actions.',
        path: '/linkBar',
      },
    ],
  },
  {
    id: 'feedbackAndOverlays',
    category: 'Feedback and Overlays',
    components: [
      {
        label: 'Alert',
        description:
          'Informational messages to notify users of important information or changes in the application state.',
        path: '/alert',
      },
      {
        label: 'Modal',
        description:
          'Overlay windows that appear on top of the main content, often requiring user interaction before returning to the main view.',
        path: '/model',
      },
      {
        label: 'Popover',
        description:
          'A floating container that appears next to a trigger element, often used for tooltips or contextual information.',
        path: '/popover',
      },
      {
        label: 'Spinner',
        description: 'Animated loading indicators to show that content is being processed or loaded.',
        path: '/spinner',
      },
      {
        label: 'Toast',
        description:
          'Brief, non-intrusive notifications that appear temporarily to provide feedback or information to the user.',
        path: '/toast',
      },
    ],
  },
  {
    id: 'advancedUI',
    category: 'Advanced UI',
    components: [
      {
        label: 'Accordion',
        description:
          'A vertically stacked list of headers that can be clicked to reveal or hide associated content sections.',
        path: '/accordion',
      },
      {
        label: 'Fieldset',
        description: 'Containers used to group related form elements and provide a visual boundary and optional label.',
        path: '/fieldset',
      },
      {
        label: 'ContentScrollable',
        description: 'A component that enables smooth scrolling of content within a fixed container or viewport.',
        path: '/contentScrollable',
      },
      {
        label: 'Cards',
        description:
          'Containers for displaying content in a visually appealing and organized manner, often used in grid layouts.',
        path: '/cards',
      },
      {
        label: 'Splitter',
        description: 'A component that allows users to resize adjacent panes or sections by dragging a divider.',
        path: '/splitter',
      },
      {
        label: 'SectionHeader',
        description:
          'A component for creating consistent headings or titles for different sections of a page or application.',
        path: '/sectionHeader',
      },
      {
        label: 'Figure',
        description: 'Container for images, diagrams, or illustrations, often including a caption or description.',
        path: '/figure',
      },
      {
        label: 'Banner',
        description: 'Prominent message displays, often used for announcements or important site-wide notifications.',
        path: '/banner',
      },
      {
        label: 'JSON Viewer',
        description: 'A tool for displaying and navigating JSON data in a structured, human-readable format.',
        path: '/jsonViewer',
      },
      {
        label: 'Grid Background',
        description: 'Visual guides or patterns used to align and organize content in a grid-based layout system.',
        path: '/gridBackground',
      },
    ],
  },
  {
    id: 'interactiveFeatures',
    category: 'Interactive Features',
    components: [
      {
        label: 'Ripple',
        description:
          'A visual effect that creates an expanding circle animation when an element is clicked or touched.',
        path: '/ripple',
      },
      {
        label: 'FullScreen Toggle',
        description: 'A control to switch between normal and full-screen viewing modes for content or applications.',
        path: '/fullScreenToggle',
      },
      {
        label: 'Breadcrumb',
        description:
          "Navigation aids that show the user's current location in a hierarchical structure of the website.",
        path: '/breadCrum',
      },
      {
        label: 'Drawer',
        description:
          'A panel that slides in from the edge of the screen, typically used for navigation or additional content.',
        path: '/drawer',
      },
      {
        label: 'Tabs',
        description:
          'A navigation component that organizes content into separate views, allowing users to switch between them.',
        path: '/tabs',
      },
      { label: 'Carousel', description: '', path: '/carousel' },
    ],
  },
  {
    id: 'statesAndManagement',
    category: 'States and Management',
    components: [
      {
        label: 'NonIdealState',
        description:
          'Components for displaying empty states, errors, or other scenarios where the ideal content is not available.',
        path: '/nonIdealState',
      },
      {
        label: 'State Management',
        description: 'Tools and patterns for managing and updating application state across components and pages.',
        path: '/stateManagment',
      },
    ],
  },
  {
    id: 'guidesAndTools',
    category: 'Guides and Tools',
    components: [
      {
        label: 'Guides',
        description:
          'Documentation and tutorials providing detailed instructions on using various aspects of the component library or framework.',
        path: '/guides',
      },
      {
        label: 'Icons',
        description:
          'A library of graphical symbols used to represent actions, objects, or concepts throughout the interface.',
        path: '/icons',
      },
      {
        label: 'Hooks',
        description:
          'Reusable functions that allow functional components to use state and other React features without writing a class.',
        path: '/hooks',
      },
      { label: 'SEO', description: '', path: '/seo' },
    ],
  },
  {
    id: 'other',
    category: 'Other',
    components: [{ label: 'Other Products', description: '', path: '/otherProducts' }],
  },
];
