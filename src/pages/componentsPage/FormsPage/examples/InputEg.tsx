/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from '@/components/common/Form';
import { SetStateAction, useState } from 'react';

export const TextInput = () => {
  const [username, setUsername] = useState('');
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => setUsername(e.target.value);

  return (
    <Form.Group>
      <Form.Label size="sm" margin="5px 0px">
        Username
      </Form.Label>
      <Form.Input size="sm" name="name" placeholder="Enter your username" value={username} onChange={handleChange} />
    </Form.Group>
  );
};

export const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handleChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length > 10) setStrength('strong');
    else if (value.length > 6) setStrength('medium');
    else setStrength('weak');
  };

  return (
    <Form onSubmit={() => console.log(password)}>
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
};

export const NumberInput = () => {
  const [age, setAge] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => setAge(e.target.value);

  return (
    <Form onSubmit={() => console.log(age)}>
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
};

export const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value);

  return (
    <Form onSubmit={() => console.log(email)}>
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
};

export const DateInput = () => {
  const [birthdate, setBirthdate] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => setBirthdate(e.target.value);

  return (
    <Form onSubmit={() => console.log(birthdate)}>
      <Form.Group>
        <Form.Label size="sm" margin="5px 0px">
          Date of Birth
        </Form.Label>
        <Form.Input name="birthdate" type="date" required value={birthdate} onChange={handleChange} />
      </Form.Group>
    </Form>
  );
};
