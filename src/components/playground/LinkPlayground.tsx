import { useState } from 'react';
import { Link } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup } from './PlaygroundShell';

const DESTINATIONS = [
  { label: 'Docs', to: '/components' },
  { label: 'External', to: 'https://example.com' },
  { label: 'Hash', to: '#playground' },
] as const;

const TARGETS = ['_self', '_blank'] as const;

type Destination = (typeof DESTINATIONS)[number]['label'];
type Target = (typeof TARGETS)[number];

const LinkPlayground = () => {
  const [destination, setDestination] = useState<Destination>('Docs');
  const [target, setTarget] = useState<Target>('_self');
  const [download, setDownload] = useState(false);
  const selected = DESTINATIONS.find((item) => item.label === destination) ?? DESTINATIONS[0];

  const generateCode = () => {
    const props = [`to="${selected.to}"`, `target="${target}"`, download && 'download'].filter(Boolean);

    return `<Link ${props.join(' ')}>
  ${
    selected.label === 'Docs'
      ? 'Open documentation'
      : selected.label === 'External'
      ? 'Visit example.com'
      : 'Jump to section'
  }
</Link>`;
  };

  return (
    <PlaygroundShell
      preview={
        <Link to={selected.to} target={target} download={download || undefined} onClick={(e) => e.preventDefault()}>
          {selected.label === 'Docs'
            ? 'Open documentation'
            : selected.label === 'External'
            ? 'Visit example.com'
            : 'Jump to section'}
        </Link>
      }
      controls={
        <>
          <OptionGroup
            label="Destination"
            options={DESTINATIONS.map((item) => item.label)}
            value={destination}
            onChange={setDestination}
          />
          <OptionGroup label="Target" options={TARGETS} value={target} onChange={setTarget} />
          <CheckboxGrid options={[{ label: 'Download', checked: download, onChange: setDownload }]} />
        </>
      }
      code={generateCode()}
    />
  );
};

export default LinkPlayground;
