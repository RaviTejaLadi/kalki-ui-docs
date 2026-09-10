import { useState } from 'react';
import { Splitter, SplitterPane } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup } from './PlaygroundShell';

const ORIENTATIONS = ['vertical', 'horizontal'] as const;
const INITIAL_SIZES = ['30%', '40%', '50%'] as const;

const SplitterPlayground = () => {
  const [orientation, setOrientation] = useState<(typeof ORIENTATIONS)[number]>('vertical');
  const [withHandle, setWithHandle] = useState(true);
  const [initialSize, setInitialSize] = useState<(typeof INITIAL_SIZES)[number]>('30%');

  const generateCode = () => `<Splitter orientation="${orientation}" height="300px" withHandle={${withHandle}}>
  <SplitterPane initialSize="${initialSize}" minSize="20%" maxSize="70%">
    <div>Sidebar pane</div>
  </SplitterPane>
  <SplitterPane>
    <div>Main content pane</div>
  </SplitterPane>
</Splitter>`;

  return (
    <PlaygroundShell
      preview={
        <Splitter orientation={orientation} height="300px" withHandle={withHandle} className="w-full">
          <SplitterPane initialSize={initialSize} minSize="20%" maxSize="70%">
            <div className="h-full bg-blue-100 p-4 text-sm text-blue-900 dark:bg-blue-950 dark:text-blue-100">
              Sidebar pane — drag the handle to resize
            </div>
          </SplitterPane>
          <SplitterPane>
            <div className="h-full bg-emerald-100 p-4 text-sm text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
              Main content pane
            </div>
          </SplitterPane>
        </Splitter>
      }
      controls={
        <>
          <OptionGroup label="Orientation" options={ORIENTATIONS} value={orientation} onChange={setOrientation} />
          <OptionGroup label="First pane size" options={INITIAL_SIZES} value={initialSize} onChange={setInitialSize} />
          <CheckboxGrid options={[{ label: 'Handle', checked: withHandle, onChange: setWithHandle }]} />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default SplitterPlayground;
