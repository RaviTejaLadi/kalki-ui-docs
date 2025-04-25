// FormExample.tsx
import Form, {
  Checkbox,
  FormGroup,
  Input,
  Radio,
  Textarea,
  Slider,
  FileInput,
  Submit,
  Switch,
  Select,
} from '@/components/common/Form';
import { ChangeEvent, FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
  agreeTerms: boolean;
  subscription: 'free' | 'pro' | 'enterprise';
  country: string;
  notifications: boolean;
  experience: number;
  avatar: File | null;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const FormExample = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    agreeTerms: false,
    subscription: 'free',
    country: '',
    notifications: false,
    experience: 50,
    avatar: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;

    setFormState((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'file'
          ? files?.[0] || null
          : type === 'range'
          ? parseInt(value)
          : value,
    }));
  };

  const handleSwitchChange = (name: keyof FormState, value: boolean) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) newErrors.email = 'Email is required';
    if (!formState.message) newErrors.message = 'Message is required';
    if (!formState.country) newErrors.country = 'country is required';
    if (formState.email && !/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formState);
    }
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Form</h2>

      <Form onSubmit={handleSubmit}>
        <FormGroup label="Name" labelFor="name" required error={errors.name}>
          <Input
            size="xs"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formState.name}
            onChange={handleInputChange}
            error={errors.name}
          />
        </FormGroup>

        <FormGroup label="Email" labelFor="email" required error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formState.email}
            onChange={handleInputChange}
            error={errors.email}
          />
        </FormGroup>

        <FormGroup label="Country" labelFor="country">
          <Select
            id="country"
            name="country"
            value={formState.country}
            error={errors.country}
            onChange={handleInputChange}
          >
            <Select.Option value="">Select your country</Select.Option>
            <Select.Option value="us">United States</Select.Option>
            <Select.Option value="ca">Canada</Select.Option>
            <Select.Option value="uk">United Kingdom</Select.Option>
            <Select.Option value="au">Australia</Select.Option>
          </Select>
        </FormGroup>

        <FormGroup label="Message" labelFor="message" required>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formState.message}
            onChange={handleInputChange}
            error={errors.message}
          />
        </FormGroup>

        <FormGroup label="Subscription Type">
          <div className="space-y-2">
            {(['free', 'pro', 'enterprise'] as const).map((type) => (
              <Radio
                key={type}
                id={type}
                name="subscription"
                value={type}
                label={type.charAt(0).toUpperCase() + type.slice(1)}
                checked={formState.subscription === type}
                onChange={handleInputChange}
              />
            ))}
          </div>
        </FormGroup>

        <FormGroup label="Profile Picture" labelFor="avatar">
          <FileInput id="avatar" name="avatar" onChange={handleInputChange} />
        </FormGroup>

        <FormGroup label="Experience Level" labelFor="experience">
          <div className="flex flex-col space-y-2">
            <Slider
              id="experience"
              name="experience"
              min={0}
              max={100}
              step={1}
              value={formState.experience}
              onChange={handleInputChange}
            />
            <div className="text-sm text-gray-500">{formState.experience}%</div>
          </div>
        </FormGroup>

        <FormGroup>
          <Switch
            variant="help"
            size="sm"
            label="Enable notifications"
            checked={formState.notifications}
            onCheckedChange={(checked) => handleSwitchChange('notifications', checked)}
          />
        </FormGroup>

        <FormGroup>
          <Checkbox
            id="agreeTerms"
            name="agreeTerms"
            label="I agree to the terms and conditions"
            checked={formState.agreeTerms}
            onChange={handleInputChange}
          />
        </FormGroup>

        <div className="mt-6">
          <Submit>Submit</Submit>
        </div>
      </Form>
    </div>
  );
};

export default FormExample;
