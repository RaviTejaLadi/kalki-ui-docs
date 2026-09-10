import { useState } from 'react';
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid } from './PlaygroundShell';

const CardsPlayground = () => {
  const [withDescription, setWithDescription] = useState(true);
  const [withFooter, setWithFooter] = useState(true);
  const [withActions, setWithActions] = useState(true);

  const generateCode = () => `<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Project overview</CardTitle>${
      withDescription ? '\n    <CardDescription>Track progress and ship the next milestone.</CardDescription>' : ''
    }
  </CardHeader>
  <CardContent>
    Your workspace is ready. Review details and continue building.
  </CardContent>${
    withFooter
      ? `\n  <CardFooter className="flex gap-2 justify-end">${
          withActions
            ? '\n    <Button variant="outline" size="sm">Cancel</Button>\n    <Button size="sm">Continue</Button>'
            : '\n    Updated a few minutes ago'
        }\n  </CardFooter>`
      : ''
  }
</Card>`;

  return (
    <PlaygroundShell
      preview={
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Project overview</CardTitle>
            {withDescription && <CardDescription>Track progress and ship the next milestone.</CardDescription>}
          </CardHeader>
          <CardContent>Your workspace is ready. Review details and continue building.</CardContent>
          {withFooter && (
            <CardFooter className={withActions ? 'flex gap-2 justify-end' : undefined}>
              {withActions ? (
                <>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                  <Button size="sm">Continue</Button>
                </>
              ) : (
                'Updated a few minutes ago'
              )}
            </CardFooter>
          )}
        </Card>
      }
      controls={
        <CheckboxGrid
          options={[
            { label: 'Description', checked: withDescription, onChange: setWithDescription },
            { label: 'Footer', checked: withFooter, onChange: setWithFooter },
            {
              label: 'Footer actions',
              checked: withActions,
              onChange: (checked) => {
                setWithActions(checked);
                if (checked) setWithFooter(true);
              },
            },
          ]}
        />
      }
      code={generateCode()}
    />
  );
};

export default CardsPlayground;
