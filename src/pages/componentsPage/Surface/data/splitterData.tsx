import Splitter from '@/components/common/Splitter/Splitter';
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
  [' withHandle ', 'bool', 'true', 'render svg on resize handler'],
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
<Splitter orientation="vertical" height="400px" className="w-[60rem]">
  <Splitter.Pane>
    <div>Left Pane content</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Right Pane content</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-[60rem]">
        <Splitter.Pane>
          <div className="text-foreground p-2">Left Pane content</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Right Pane content</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Horizontal Splitter',
    desc: 'A horizontal splitter with default 50/50 split',
    code: `
<Splitter orientation="horizontal" className="w-[60rem]">
  <Splitter.Pane>
    <div>Top Pane content</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Bottom Pane content</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="horizontal" height="400px" className="w-[60rem]">
        <Splitter.Pane>
          <div className="text-foreground p-2">Top Pane content</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Bottom Pane content</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Three-Pane Vertical Splitter',
    desc: 'A vertical splitter with three Panes',
    code: `
<Splitter orientation="vertical" height="400px" className="w-[60rem]">
  <Splitter.Pane>
    <div>Left Pane content</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Middle Pane content</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Right Pane content</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-[60rem]">
        <Splitter.Pane>
          <div className="text-foreground p-2">Left Pane content</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Middle Pane content</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Right Pane content</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Custom Initial Sizes',
    desc: 'A vertical splitter with custom initial sizes',
    code: `
<Splitter orientation="vertical" height="400px" className="w-[60rem]">
  <Splitter.Pane initialSize="30%">
    <div>Left Pane (30%)</div>
  </Splitter.Pane>
  <Splitter.Pane initialSize="70%">
    <div>Right Pane (70%)</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-[60rem]">
        <Splitter.Pane initialSize="30%">
          <div className="text-foreground p-2">Left Pane (30%)</div>
        </Splitter.Pane>
        <Splitter.Pane initialSize="70%">
          <div className="text-foreground p-2">Right Pane (70%)</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Minimum and Maximum Sizes',
    desc: 'A vertical splitter with minimum and maximum size constraints',
    code: `
<Splitter orientation="vertical" height="400px" className="w-[60rem]">
  <Splitter.Pane minSize="20%" maxSize="80%">
    <div>Left Pane (20% - 80%)</div>
  </Splitter.Pane>
  <Splitter.Pane minSize="20%" maxSize="80%">
    <div>Right Pane (20% - 80%)</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-[60rem]">
        <Splitter.Pane minSize="20%" maxSize="80%">
          <div className="text-foreground p-2">Left Pane (20% - 80%)</div>
        </Splitter.Pane>
        <Splitter.Pane minSize="20%" maxSize="80%">
          <div className="text-foreground p-2">Right Pane (20% - 80%)</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Nested Splitters',
    desc: 'A vertical splitter with a nested horizontal splitter',
    code: `
<Splitter orientation="vertical" height="400px" className="w-[60rem]">
  <Splitter.Pane>
    <div>Left Pane content</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <Splitter orientation="horizontal">
      <Splitter.Pane>
        <div>Top right Pane</div>
      </Splitter.Pane>
      <Splitter.Pane>
        <div>Bottom right Pane</div>
      </Splitter.Pane>
    </Splitter>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-[60rem]">
        <Splitter.Pane>
          <div className="text-foreground p-2">Left Pane content</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <Splitter orientation="horizontal">
            <Splitter.Pane>
              <div className="text-foreground p-2">Top right Pane</div>
            </Splitter.Pane>
            <Splitter.Pane>
              <div className="text-foreground p-2">Bottom right Pane</div>
            </Splitter.Pane>
          </Splitter>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Fixed Height Splitter',
    desc: 'A vertical splitter with a fixed height',
    code: `
<Splitter orientation="vertical" height="300px" className="w-[60rem]">
  <Splitter.Pane>
    <div>Left Pane content</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Right Pane content</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="300px" className="w-[60rem]">
        <Splitter.Pane>
          <div className="text-foreground p-2">Left Pane content</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Right Pane content</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Pixel-Based Sizes',
    desc: 'A vertical splitter with initial sizes specified in pixels',
    code: `
<Splitter orientation="vertical" height="400px" className="w-[60rem]">
  <Splitter.Pane initialSize="200px">
    <div>Left Pane (200px)</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Right Pane (remaining space)</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-[60rem]">
        <Splitter.Pane initialSize="200px">
          <div className="text-foreground p-2">Left Pane (200px)</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Right Pane (remaining space)</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Four-Pane Horizontal Splitter',
    desc: 'A horizontal splitter with four Panes',
    code: `
<Splitter orientation="horizontal" height="600px" className="w-[60rem]">
  <Splitter.Pane>
    <div>First Pane</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Second Pane</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Third Pane</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Fourth Pane</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="horizontal" height="600px" className="w-[60rem]">
        <Splitter.Pane>
          <div className="text-foreground p-2">First Pane</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Second Pane</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Third Pane</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Fourth Pane</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Uneven Three-Pane Splitter',
    desc: 'A vertical splitter with three Panes and custom initial sizes',
    code: `
<Splitter orientation="vertical" height="400px" className="w-[60rem]">
  <Splitter.Pane initialSize="20%">
    <div>Left Pane (20%)</div>
  </Splitter.Pane>
  <Splitter.Pane initialSize="60%">
    <div>Middle Pane (60%)</div>
  </Splitter.Pane>
  <Splitter.Pane initialSize="20%">
    <div>Right Pane (20%)</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-[60rem]">
        <Splitter.Pane initialSize="20%">
          <div className="text-foreground p-2">Left Pane (20%)</div>
        </Splitter.Pane>
        <Splitter.Pane initialSize="60%">
          <div className="text-foreground p-2">Middle Pane (60%)</div>
        </Splitter.Pane>
        <Splitter.Pane initialSize="20%">
          <div className="text-foreground p-2">Right Pane (20%)</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Combination of Percentage and Pixel Sizes',
    desc: 'A vertical splitter with mixed initial size units',
    code: `
<Splitter orientation="vertical" height="400px" className="w-[60rem]">
  <Splitter.Pane initialSize="25%">
    <div>Left Pane (25%)</div>
  </Splitter.Pane>
  <Splitter.Pane initialSize="300px">
    <div>Middle Pane (300px)</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <div>Right Pane (remaining space)</div>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-[60rem]">
        <Splitter.Pane initialSize="25%">
          <div className="text-foreground p-2">Left Pane (25%)</div>
        </Splitter.Pane>
        <Splitter.Pane initialSize="300px">
          <div className="text-foreground p-2">Middle Pane (300px)</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <div className="text-foreground p-2">Right Pane (remaining space)</div>
        </Splitter.Pane>
      </Splitter>
    ),
  },
  {
    title: 'Complex Nested Splitters',
    desc: 'A complex layout with nested vertical and horizontal splitters',
    code: `
<Splitter orientation="vertical" height="400px" className="w-[60rem]">
  <Splitter.Pane initialSize="30%">
    <div>Left Pane</div>
  </Splitter.Pane>
  <Splitter.Pane>
    <Splitter orientation="horizontal">
      <Splitter.Pane initialSize="60%">
        <div>Top right Pane</div>
      </Splitter.Pane>
      <Splitter.Pane>
        <Splitter>
          <Splitter.Pane>
            <div>Bottom right left Pane</div>
          </Splitter.Pane>
          <Splitter.Pane>
            <div>Bottom right right Pane</div>
          </Splitter.Pane>
        </Splitter>
      </Splitter.Pane>
    </Splitter>
  </Splitter.Pane>
</Splitter>
    `,
    snippet: (
      <Splitter orientation="vertical" height="400px" className="w-[60rem]">
        <Splitter.Pane initialSize="30%">
          <div className="text-foreground p-2">Left Pane</div>
        </Splitter.Pane>
        <Splitter.Pane>
          <Splitter orientation="horizontal">
            <Splitter.Pane initialSize="60%">
              <div className="text-foreground p-2">Top right Pane</div>
            </Splitter.Pane>
            <Splitter.Pane initialSize="40%">
              <Splitter>
                <Splitter.Pane>
                  <div className="text-foreground p-2">Bottom right left Pane</div>
                </Splitter.Pane>
                <Splitter.Pane>
                  <div className="text-foreground p-2">Bottom right right Pane</div>
                </Splitter.Pane>
              </Splitter>
            </Splitter.Pane>
          </Splitter>
        </Splitter.Pane>
      </Splitter>
    ),
  },
];
