import { Splitter, SplitterPane } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const splitterProps = [
  [
    'orientation',
    'string',
    'vertical',
    "Specifies the orientation of the splitter. Possible values are 'vertical' and 'horizontal'.",
  ],
  ['height', 'string', '100%', 'Sets the height of the splitter container. Can be any valid CSS height value.'],
  ['children', 'node', 'required', 'The content to be rendered inside the splitter. Must be Splitter.pane components.'],
  ['withHandle', 'boolean', 'true', 'Whether to render a grip icon on the resize handle.'],
  ['className', 'string', '-', 'Additional CSS classes for the splitter container.'],
];
export const splitterPaneProps = [
  [
    'initialSize',
    'string',
    'equal distribution',
    'Sets the initial size of the pane. Can be a percentage or pixel value.',
  ],
  ['minSize', 'string', '0%', 'Sets the minimum size of the pane. Can be a percentage or pixel value.'],
  ['maxSize', 'string', '100%', 'Sets the maximum size of the pane. Can be a percentage or pixel value.'],
  ['children', 'node', 'required', 'The content to be rendered inside the pane.'],
];

export const docs: docsData[] = [
  {
    title: 'Basic Vertical Splitter',
    desc: 'A simple vertical splitter with default 50/50 split',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane>
        <div className="text-foreground p-2">Left Pane content</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Right Pane content</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane>
          <div className="text-foreground p-2">Left Pane content</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Right Pane content</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Horizontal Splitter',
    desc: 'A horizontal splitter with default 50/50 split',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="horizontal" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane>
        <div className="text-foreground p-2">Top Pane content</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Bottom Pane content</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="horizontal" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane>
          <div className="text-foreground p-2">Top Pane content</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Bottom Pane content</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Three-Pane Vertical Splitter',
    desc: 'A vertical splitter with three panes',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane>
        <div className="text-foreground p-2">Left Pane content</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Middle Pane content</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Right Pane content</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane>
          <div className="text-foreground p-2">Left Pane content</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Middle Pane content</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Right Pane content</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Custom Initial Sizes',
    desc: 'A vertical splitter with custom initial sizes',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane initialSize="30%">
        <div className="text-foreground p-2">Left Pane (30%)</div>
      </SplitterPane>
      <SplitterPane initialSize="70%">
        <div className="text-foreground p-2">Right Pane (70%)</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane initialSize="30%">
          <div className="text-foreground p-2">Left Pane (30%)</div>
        </SplitterPane>
        <SplitterPane initialSize="70%">
          <div className="text-foreground p-2">Right Pane (70%)</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Minimum and Maximum Sizes',
    desc: 'A vertical splitter with minimum and maximum size constraints',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane minSize="20%" maxSize="80%">
        <div className="text-foreground p-2">Left Pane (20% - 80%)</div>
      </SplitterPane>
      <SplitterPane minSize="20%" maxSize="80%">
        <div className="text-foreground p-2">Right Pane (20% - 80%)</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane minSize="20%" maxSize="80%">
          <div className="text-foreground p-2">Left Pane (20% - 80%)</div>
        </SplitterPane>
        <SplitterPane minSize="20%" maxSize="80%">
          <div className="text-foreground p-2">Right Pane (20% - 80%)</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Nested Splitters',
    desc: 'A vertical splitter with a nested horizontal splitter',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane>
        <div className="text-foreground p-2">Left Pane content</div>
      </SplitterPane>
      <SplitterPane>
        <Splitter orientation="horizontal">
          <SplitterPane>
            <div className="text-foreground p-2">Top right Pane</div>
          </SplitterPane>
          <SplitterPane>
            <div className="text-foreground p-2">Bottom right Pane</div>
          </SplitterPane>
        </Splitter>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane>
          <div className="text-foreground p-2">Left Pane content</div>
        </SplitterPane>
        <SplitterPane>
          <Splitter orientation="horizontal">
            <SplitterPane>
              <div className="text-foreground p-2">Top right Pane</div>
            </SplitterPane>
            <SplitterPane>
              <div className="text-foreground p-2">Bottom right Pane</div>
            </SplitterPane>
          </Splitter>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Fixed Height Splitter',
    desc: 'A vertical splitter with a fixed height',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="300px" className="w-full max-w-[60rem]">
      <SplitterPane>
        <div className="text-foreground p-2">Left Pane content</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Right Pane content</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="300px" className="w-full max-w-[60rem]">
        <SplitterPane>
          <div className="text-foreground p-2">Left Pane content</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Right Pane content</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Pixel-Based Sizes',
    desc: 'A vertical splitter with initial sizes specified in pixels',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane initialSize="200px">
        <div className="text-foreground p-2">Left Pane (200px)</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Right Pane (remaining space)</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane initialSize="200px">
          <div className="text-foreground p-2">Left Pane (200px)</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Right Pane (remaining space)</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Four-Pane Horizontal Splitter',
    desc: 'A horizontal splitter with four panes',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="horizontal" height="600px" className="w-full max-w-[60rem]">
      <SplitterPane>
        <div className="text-foreground p-2">First Pane</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Second Pane</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Third Pane</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Fourth Pane</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="horizontal" height="600px" className="w-full max-w-[60rem]">
        <SplitterPane>
          <div className="text-foreground p-2">First Pane</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Second Pane</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Third Pane</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Fourth Pane</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Uneven Three-Pane Splitter',
    desc: 'A vertical splitter with three panes and custom initial sizes',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane initialSize="20%">
        <div className="text-foreground p-2">Left Pane (20%)</div>
      </SplitterPane>
      <SplitterPane initialSize="60%">
        <div className="text-foreground p-2">Middle Pane (60%)</div>
      </SplitterPane>
      <SplitterPane initialSize="20%">
        <div className="text-foreground p-2">Right Pane (20%)</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane initialSize="20%">
          <div className="text-foreground p-2">Left Pane (20%)</div>
        </SplitterPane>
        <SplitterPane initialSize="60%">
          <div className="text-foreground p-2">Middle Pane (60%)</div>
        </SplitterPane>
        <SplitterPane initialSize="20%">
          <div className="text-foreground p-2">Right Pane (20%)</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Combination of Percentage and Pixel Sizes',
    desc: 'A vertical splitter with mixed initial size units',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane initialSize="25%">
        <div className="text-foreground p-2">Left Pane (25%)</div>
      </SplitterPane>
      <SplitterPane initialSize="300px">
        <div className="text-foreground p-2">Middle Pane (300px)</div>
      </SplitterPane>
      <SplitterPane>
        <div className="text-foreground p-2">Right Pane (remaining space)</div>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane initialSize="25%">
          <div className="text-foreground p-2">Left Pane (25%)</div>
        </SplitterPane>
        <SplitterPane initialSize="300px">
          <div className="text-foreground p-2">Middle Pane (300px)</div>
        </SplitterPane>
        <SplitterPane>
          <div className="text-foreground p-2">Right Pane (remaining space)</div>
        </SplitterPane>
      </Splitter>
    ),
  },
  {
    title: 'Complex Nested Splitters',
    desc: 'A complex layout with nested vertical and horizontal splitters',
    code: `
import { Splitter, SplitterPane } from "kalki-ui";

export default function Example() {
  return (
    <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
      <SplitterPane initialSize="30%">
        <div className="text-foreground p-2">Left Pane</div>
      </SplitterPane>
      <SplitterPane>
        <Splitter orientation="horizontal">
          <SplitterPane initialSize="60%">
            <div className="text-foreground p-2">Top right Pane</div>
          </SplitterPane>
          <SplitterPane initialSize="40%">
            <Splitter>
              <SplitterPane>
                <div className="text-foreground p-2">Bottom right left Pane</div>
              </SplitterPane>
              <SplitterPane>
                <div className="text-foreground p-2">Bottom right right Pane</div>
              </SplitterPane>
            </Splitter>
          </SplitterPane>
        </Splitter>
      </SplitterPane>
    </Splitter>
  );
}
`,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-full max-w-[60rem]">
        <SplitterPane initialSize="30%">
          <div className="text-foreground p-2">Left Pane</div>
        </SplitterPane>
        <SplitterPane>
          <Splitter orientation="horizontal">
            <SplitterPane initialSize="60%">
              <div className="text-foreground p-2">Top right Pane</div>
            </SplitterPane>
            <SplitterPane initialSize="40%">
              <Splitter>
                <SplitterPane>
                  <div className="text-foreground p-2">Bottom right left Pane</div>
                </SplitterPane>
                <SplitterPane>
                  <div className="text-foreground p-2">Bottom right right Pane</div>
                </SplitterPane>
              </Splitter>
            </SplitterPane>
          </Splitter>
        </SplitterPane>
      </Splitter>
    ),
  },
];
