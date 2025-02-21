import {
  LayoutGrid,
  Box,
  Grid3x3,
  AlignVerticalSpaceAround,
  FileInput,
  Radio,
  CheckSquare,
  ChevronDown,
  IdCard,
  UserCircle2,
  Tag,
  BadgeInfo,
  Table,
  List,
  Type,
  Highlighter,
  SquareMousePointer,
  Link,
  X,
  BarChart,
  AlertTriangle,
  LayoutPanelTop,
  AlignCenter,
  Loader2,
  Layers,
  Container,
  ScrollText,
  CreditCard,
  SplitSquareVertical,
  Heading,
  Image,
  Flag,
  FileJson,
  Grid,
  Target,
  Expand,
  NavigationIcon,
  SidebarClose,
  GalleryThumbnails,
  Puzzle,
  FileQuestion,
  TextCursorInput,
  Space,
} from 'lucide-react';

import { DocumentIcon, ViewColumnsIcon, DocumentTextIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface CategoryRoutesComponentList {
  label: string;
  path: string;
  description?: string;
  Icon?: React.ElementType;
}

interface CategorizedRoutesComponents {
  id: string;
  category: string;
  path?: string;
  components: CategoryRoutesComponentList[];
  Icon?: React.ElementType;
}

export const categorizedRoutesComponents: CategorizedRoutesComponents[] = [
  {
    id: 'buttons',
    category: 'Buttons',
    path: '/components/buttons-preview',
    Icon: SquareMousePointer,
    components: [
      {
        label: 'Button',
        description: 'Interactive elements used to trigger actions or events in the user interface.',
        path: '/components/button',
        Icon: SquareMousePointer,
      },
      {
        label: 'CloseButton',
        description:
          'A standardized, semantically designed button for dismissing modals, panels, or notifications with intuitive user experience considerations.',
        path: '/components/close-button',
        Icon: X,
      },
      {
        label: 'Link Button',
        description:
          'A hybrid component combining the functionality of a button with the navigation properties of a link, enabling seamless interaction and routing within web applications.',
        path: '/components/link-button',
        Icon: Link,
      },
      {
        label: 'LinkBar',
        description:
          'A responsive horizontal navigation component containing a group of related links or actions, optimized for clear user navigation and interaction.',
        path: '/components/link-bar',
        Icon: BarChart,
      },
    ],
  },
  {
    id: 'dataDisplay',
    category: 'Data Display',
    Icon: Table,
    components: [
      {
        label: 'Avatar',
        description:
          'Graphical representations of users, typically displayed as profile pictures or icons, supporting personalization and user identification in web interfaces.',
        path: '/components/avatar',
        Icon: UserCircle2,
      },
      {
        label: 'Badge',
        description:
          'Compact visual indicators used to highlight contextual information, status updates, or numerical counts with responsive design principles.',
        path: '/components/badge',
        Icon: BadgeInfo,
      },
      {
        label: 'Lists',
        description:
          'Flexible components for rendering collections of items in various formats, supporting dynamic content rendering and accessibility standards.',
        path: '/components/lists',
        Icon: List,
      },
      {
        label: 'Table',
        description:
          'Advanced data grid components for displaying structured information with enhanced features like responsive layouts, client-side sorting, filtering, and pagination.',
        path: '/components/table',
        Icon: ViewColumnsIcon,
      },
      {
        label: 'Tag',
        description:
          'Lightweight, customizable label components used for content categorization, filtering, metadata display, and enhancing semantic markup.',
        path: '/components/tag',
        Icon: Tag,
      },
    ],
  },
  {
    id: 'feedbackAndOverlays',
    category: 'Feedback and Overlays',
    Icon: AlertTriangle,
    components: [
      {
        label: 'Alert',
        description:
          'Informational and contextual messaging system to notify users of important application states, errors, or system-wide communications with accessibility considerations.',
        path: '/components/alert',
        Icon: AlertTriangle,
      },
      {
        label: 'Modal',
        description:
          'Programmatically controlled overlay windows that interrupt the main application workflow, requiring explicit user interaction and supporting complex interaction patterns.',
        path: '/components/model',
        Icon: LayoutPanelTop,
      },
      {
        label: 'Popover',
        description:
          'Dynamically positioned floating containers that provide contextual information, tooltips, or additional details adjacent to trigger elements with responsive positioning.',
        path: '/components/popover',
        Icon: AlignCenter,
      },
      {
        label: 'Spinner',
        description:
          'Animated loading indicators providing visual feedback during asynchronous operations, improving perceived performance and user experience during data fetching or processing.',
        path: '/components/spinner',
        Icon: Loader2,
      },
    ],
  },
  {
    id: 'forms',
    category: 'Forms',
    Icon: FileInput,
    components: [
      {
        label: 'Checkbox',
        description:
          'Customizable boolean input control for selecting multiple options with enhanced accessibility and validation support.',
        path: '/components/checkbox',
        Icon: CheckSquare,
      },
      {
        label: 'Checkbox Card',
        description:
          'Enhanced checkbox variant with card-based UI, enabling more complex selection interfaces with visual feedback and improved user interaction.',
        path: '/components/checkboxCard',
        Icon: DocumentCheckIcon,
      },
      {
        label: 'Dropdown',
        description:
          'Advanced selection interface allowing users to choose from a list of options with support for search, grouping, and dynamic content rendering.',
        path: '/components/dropdown',
        Icon: ChevronDown,
      },
      {
        label: 'Form',
        description:
          'Comprehensive form management system providing validation, state management, submission handling, and cross-field interaction capabilities.',
        path: '/components/form',
        Icon: DocumentIcon,
      },
      {
        label: 'Input',
        description:
          'Flexible text input component supporting various input types, validation, masking, and advanced formatting options.',
        path: '/components/input',
        Icon: TextCursorInput,
      },
      {
        label: 'Radio',
        description:
          'Mutually exclusive selection control for choosing a single option from a group with enhanced styling and accessibility features.',
        path: '/components/radio',
        Icon: Radio,
      },
      {
        label: 'Radio Card',
        description:
          'Card-based radio button implementation enabling more complex and visually engaging single selection interfaces.',
        path: '/components/radioCard',
        Icon: IdCard,
      },
      {
        label: 'Select',
        description:
          'Advanced selection component with support for complex data sources, custom rendering, and advanced filtering mechanisms.',
        path: '/components/select',
        Icon: Space,
      },
      {
        label: 'Textarea',
        description:
          'Multi-line text input component with advanced features like auto-resizing, validation, and rich text support.',
        path: '/components/textarea',
        Icon: DocumentTextIcon,
      },
    ],
  },
  {
    id: 'layout',
    category: 'Layout',
    Icon: LayoutGrid,
    components: [
      {
        label: 'Box',
        description:
          'Fundamental layout primitive for creating flexible, responsive container components with configurable spacing and alignment.',
        path: '/components/box',
        Icon: Box,
      },
      {
        label: 'Grid Background',
        description:
          'Responsive visual grid overlay system for creating consistent layout guidelines and design alignment patterns.',
        path: '/components/gridBackground',
        Icon: Grid,
      },
      {
        label: 'Grid System',
        description:
          'Responsive layout framework implementing a flexible, mobile-first grid system with customizable breakpoints and column configurations.',
        path: '/components/gridSystem',
        Icon: Grid3x3,
      },
      {
        label: 'Layouts',
        description:
          'Comprehensive layout management system providing responsive container components with advanced styling, padding, and responsive design capabilities.',
        path: '/components/box',
        Icon: Layers,
      },
      {
        label: 'Stack',
        description:
          'Flexible layout component for creating responsive vertical or horizontal element arrangements with intelligent spacing and alignment controls.',
        path: '/components/stack',
        Icon: AlignVerticalSpaceAround,
      },
    ],
  },
  {
    id: 'navigation',
    category: 'Navigation',
    Icon: NavigationIcon,
    components: [
      {
        label: 'Breadcrumb',
        description:
          'Hierarchical navigation component providing clear user context and efficient site traversal with responsive and accessible design.',
        path: '/components/breadCrum',
        Icon: Target,
      },
      {
        label: 'Carousel',
        description:
          'Interactive content slider supporting responsive image and content presentations with advanced navigation and autoplay capabilities.',
        path: '/components/carousel',
        Icon: GalleryThumbnails,
      },
      {
        label: 'Drawer',
        description:
          'Sliding panel navigation component with advanced gesture support, providing off-canvas menu and content interaction patterns.',
        path: '/components/drawer',
        Icon: SidebarClose,
      },
      {
        label: 'FullScreen Toggle',
        description:
          'Adaptive control for managing viewport modes, supporting immersive content experiences across different device types.',
        path: '/components/fullScreenToggle',
        Icon: Expand,
      },
      {
        label: 'Tabs',
        description:
          'Flexible content organization component supporting dynamic, accessible tab interfaces with responsive design and keyboard navigation.',
        path: '/components/tabs',
        Icon: CreditCard,
      },
    ],
  },
  {
    id: 'pages',
    category: 'Pages',
    Icon: FileQuestion,
    components: [
      {
        label: 'NonIdealState',
        description:
          'Comprehensive error handling and empty state components for managing unexpected application scenarios with informative and user-friendly interfaces.',
        path: '/components/nonIdealState',
        Icon: AlertTriangle,
      },
    ],
  },
  {
    id: 'surfaces',
    category: 'Surfaces',
    Icon: Layers,
    components: [
      {
        label: 'Accordion',
        description:
          'Expandable content container supporting hierarchical information display with smooth animations and accessibility considerations.',
        path: '/components/accordion',
        Icon: ScrollText,
      },
      {
        label: 'Banner',
        description:
          'Prominent, dismissible notification surface for delivering site-wide messages, alerts, and important communications.',
        path: '/components/banner',
        Icon: Flag,
      },
      {
        label: 'Cards',
        description:
          'Flexible, modular content containers supporting various layout strategies, interactive states, and responsive design patterns.',
        path: '/components/cards',
        Icon: CreditCard,
      },
      {
        label: 'Content Scrollable',
        description:
          'Advanced scrolling container with enhanced performance, virtualization support, and smooth scrolling behavior for large content sets.',
        path: '/components/contentScrollable',
        Icon: ScrollText,
      },
      {
        label: 'Fieldset',
        description:
          'Semantic form grouping component providing visual and logical organization for related form controls with enhanced accessibility.',
        path: '/components/fieldset',
        Icon: Container,
      },
      {
        label: 'Figure',
        description:
          'Semantic media container supporting responsive image display, captions, and accessibility-enhanced content presentation.',
        path: '/components/figure',
        Icon: Image,
      },
      {
        label: 'JSON Viewer',
        description:
          'Interactive data exploration tool for rendering structured JSON data with syntax highlighting, collapsible sections, and copy functionality.',
        path: '/components/jsonViewer',
        Icon: FileJson,
      },
      {
        label: 'Section Header',
        description:
          'Responsive typography component for creating consistent, semantically structured section headings with advanced styling capabilities.',
        path: '/components/sectionHeader',
        Icon: Heading,
      },
      {
        label: 'Splitter',
        description:
          'Interactive layout divider enabling dynamic user-controlled resizing of adjacent content panes with responsive design support.',
        path: '/components/splitter',
        Icon: SplitSquareVertical,
      },
    ],
  },
  {
    id: 'typography',
    category: 'Typography',
    Icon: Type,
    components: [
      {
        label: 'Text Highlighter',
        description:
          'Advanced text annotation utility for dynamically marking and styling text segments with customizable highlighting strategies.',
        path: '/components/textHighlighter',
        Icon: Highlighter,
      },
      {
        label: 'Typography',
        description:
          'Comprehensive typographic system providing responsive type scales, font management, and consistent text styling across applications.',
        path: '/components/typography',
        Icon: Type,
      },      {
        label: 'Heading',
        description:
          'Comprehensive typographic system providing responsive type scales, font management, and consistent text styling across applications.',
        path: '/components/heading',
        Icon: Heading,
      },
    ],
  },
  {
    id: 'utils',
    category: 'Utils',
    Icon: Puzzle,
    components: [
      {
        label: 'Ripple',
        description:
          'Touch feedback utility implementing material design-inspired interactive animations for enhanced user interaction feedback.',
        path: '/components/ripple',
        Icon: Target,
      },
    ],
  },
];
