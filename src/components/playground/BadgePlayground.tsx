import { useState } from 'react';
import { Star } from 'lucide-react';
import { Badge, BadgeIcon } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, COLOR_VARIANTS, OptionGroup, SIZES_SM_LG } from './PlaygroundShell';

const BADGE_VARIANTS = COLOR_VARIANTS.filter((variant) => variant !== 'help');
type BadgeVariant = (typeof BADGE_VARIANTS)[number];
type BadgeSize = (typeof SIZES_SM_LG)[number];

type BadgeSettings = {
  variant: BadgeVariant;
  size: BadgeSize;
  pill: boolean;
  withIcon: boolean;
};

const BadgePlayground = () => {
  const [settings, setSettings] = useState<BadgeSettings>({
    variant: 'primary',
    size: 'md',
    pill: false,
    withIcon: false,
  });

  const generateCode = () => {
    const props = [`variant="${settings.variant}"`, `size="${settings.size}"`, settings.pill && 'pill'].filter(Boolean);

    if (!settings.withIcon) return `<Badge ${props.join(' ')}>Badge</Badge>`;

    return `<Badge ${props.join(' ')}>
  <BadgeIcon>
    <Star className="size-4" />
  </BadgeIcon>
  Badge
</Badge>`;
  };

  return (
    <PlaygroundShell
      preview={
        <Badge variant={settings.variant} size={settings.size} pill={settings.pill}>
          {settings.withIcon && (
            <BadgeIcon>
              <Star className="size-4" />
            </BadgeIcon>
          )}
          Badge
        </Badge>
      }
      controls={
        <>
          <OptionGroup
            label="Variant"
            options={BADGE_VARIANTS}
            value={settings.variant}
            onChange={(variant) => setSettings((current) => ({ ...current, variant }))}
          />
          <OptionGroup
            label="Size"
            options={SIZES_SM_LG}
            value={settings.size}
            onChange={(size) => setSettings((current) => ({ ...current, size }))}
          />
          <CheckboxGrid
            options={[
              {
                label: 'Pill',
                checked: settings.pill,
                onChange: (pill) => setSettings((current) => ({ ...current, pill })),
              },
              {
                label: 'With icon',
                checked: settings.withIcon,
                onChange: (withIcon) => setSettings((current) => ({ ...current, withIcon })),
              },
            ]}
          />
        </>
      }
      code={generateCode()}
    />
  );
};

export default BadgePlayground;
