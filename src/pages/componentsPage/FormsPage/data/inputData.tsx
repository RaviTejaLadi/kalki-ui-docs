import { docsData } from '@/types/docsData';
import { DateInput, EmailInput, NumberInput, PasswordInput, TextInput } from '../examples/InputEg';

export const docs: docsData[] = [
  {
    title: 'Text Input',
    desc: 'A basic text input field.',
    code: `
import React, { useState } from "react";
import Form from "kalki-ui";

export default function TextInput() {
  const [username, setUsername] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group>
        <Form.Label size="sm" margin="5px 0px">
          Username
        </Form.Label>
        <Form.Input
          size="sm"
          name="name"
          placeholder="Enter your username"
          value={username}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}
`,
    snippet: <TextInput />,
  },
  {
    title: 'Email Input',
    desc: 'An input field for email addresses with validation.',
    code: `
import React, { useState } from "react";
import Form from "kalki-ui";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group>
        <Form.Label size="sm" margin="5px 0px">
          Email Address
        </Form.Label>
        <Form.Input
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}
`,
    snippet: <EmailInput />,
  },
  {
    title: 'Password Input',
    desc: 'A password input field with a strength meter.',
    code: `
import React, { useState } from "react";
import Form from "kalki-ui";

export default function PasswordInput() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length > 10) setStrength("strong");
    else if (value.length > 6) setStrength("medium");
    else setStrength("weak");
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group>
        <Form.Label size="sm" margin="5px 0px">
          Password
        </Form.Label>
        <Form.Input
          size="sm"
          name="password"
          placeholder="Enter your Password"
          type="password"
          required
          value={password}
          onChange={handleChange}
        />
      </Form.Group>
      {strength && <p className="text-muted-foreground">Password strength: {strength}</p>}
    </Form>
  );
}
`,
    snippet: <PasswordInput />,
  },
  {
    title: 'Number Input',
    desc: 'An input field for numeric values with min and max constraints.',
    code: `
import React, { useState } from "react";
import Form from "kalki-ui";

export default function NumberInput() {
  const [age, setAge] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group>
        <Form.Label size="sm" margin="5px 0px">
          Age
        </Form.Label>
        <Form.Input
          name="age"
          type="number"
          min="0"
          max="120"
          required
          placeholder="Enter your age"
          value={age}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}
`,
    snippet: <NumberInput />,
  },
  {
    title: 'Date Input',
    desc: 'A date input field with a date picker.',
    code: `
import React, { useState } from "react";
import Form from "kalki-ui";

export default function DateInput() {
  const [birthdate, setBirthdate] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setBirthdate(e.target.value);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group>
        <Form.Label size="sm" margin="5px 0px">
          Date of Birth
        </Form.Label>
        <Form.Input name="birthdate" type="date" required value={birthdate} onChange={handleChange} />
      </Form.Group>
    </Form>
  );
}
`,
    snippet: <DateInput />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['name', 'string', '', 'Input name and id'],
  ['label', 'string', '', 'Label text for the input'],
  ['type', 'string', 'text', "Input type (e.g., 'text', 'password', 'email')"],
  ['size', 'string', 'md', "Input size ('sm', 'md', 'lg')"],
  ['placeholder', 'string', '', 'Placeholder text for the input'],
  ['width', 'string', '', 'To set width of input'],
  ['height', 'string', '', 'To set height of input'],
  ['margin', 'string', '', 'To set margin of input'],
  ['padding', 'string', '', 'To set padding of input'],
];
