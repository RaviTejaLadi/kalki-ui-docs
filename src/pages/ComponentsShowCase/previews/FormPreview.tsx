import Form from '@/components/common/Form';

export const FormPreviews = {
  basic: (
    <Form onSubmit={(e) => e.preventDefault()} className="max-w-xs">
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Input type="email" placeholder="you@example.com" size="sm" />
      </Form.Group>
      <Form.Submit variant="primary" size="sm">Submit</Form.Submit>
    </Form>
  ),
};
