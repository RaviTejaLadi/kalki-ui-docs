import { useState } from 'react';
import { JsonViewer } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const INDENTATIONS = ['2', '4', '8'] as const;
const SAMPLE_DATA = {
  project: 'Kalki UI',
  version: '3.1.2',
  features: ['components', 'themes', 'accessibility'],
  settings: { mode: 'dark', responsive: true },
};

const JsonViewerPlayground = () => {
  const [indentation, setIndentation] = useState<(typeof INDENTATIONS)[number]>('4');

  const generateCode = () => `<JsonViewer
  data={{
    project: "Kalki UI",
    version: "3.1.2",
    features: ["components", "themes", "accessibility"],
    settings: { mode: "dark", responsive: true },
  }}
  indentation={${indentation}}
/>`;

  return (
    <PlaygroundShell
      preview={<JsonViewer data={SAMPLE_DATA} indentation={Number(indentation)} className="w-full" />}
      controls={
        <OptionGroup label="Indentation" options={INDENTATIONS} value={indentation} onChange={setIndentation} />
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default JsonViewerPlayground;
