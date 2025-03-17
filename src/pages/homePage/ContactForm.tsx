// // Example usage with react-hook-form and zod
// import { useForm, SubmitHandler, Controller, FieldErrors } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import {
//   Form,
//   FormField,
//   FormLabel,
//   FormInput,
//   FormTextarea,
//   FormCheckbox,
//   FormRadioGroup,
//   FormRadio,
//   FormSelect,
//   FormSwitch,
//   FormButton,
//   FormDescription,
// } from '@/components/common/Form/TestForm';

// // Define the schema for form validation
// const formSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   email: z.string().email('Please enter a valid email address'),
//   message: z.string().min(10, 'Message must be at least 10 characters'),
//   agreeToTerms: z.boolean().refine((val) => val === true, {
//     message: 'You must agree to the terms and conditions',
//   }),
//   preferredContact: z.enum(['email', 'phone', 'post']),
//   department: z.string().min(1, 'Please select a department'),
//   notifications: z.boolean().optional(),
//   phoneNumber: z
//     .string()
//     .optional()
//     .refine((val) => !val || /^\d{10}$/.test(val), { message: 'Phone number must be 10 digits' }),
// });

// type FormValues = z.infer<typeof formSchema>;

// function convertFormErrors(errors: FieldErrors<FormValues>): Record<string, string> {
//   const result: Record<string, string> = {};

//   for (const key in errors) {
//     if (errors[key as keyof FormValues]?.message) {
//       result[key] = errors[key as keyof FormValues]?.message as string;
//     }
//   }

//   return result;
// }
// const departments = [
//   { value: 'sales', label: 'Sales' },
//   { value: 'marketing', label: 'Marketing' },
//   { value: 'support', label: 'Customer Support' },
//   { value: 'technical', label: 'Technical' },
// ];

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors, isSubmitting },
//   } = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       message: '',
//       agreeToTerms: false,
//       preferredContact: 'email',
//       department: '',
//       notifications: false,
//       phoneNumber: '',
//     },
//   });

//   const formattedErrors = convertFormErrors(errors);
//   const onSubmit: SubmitHandler<FormValues> = async (data) => {
//     // Simulate API call
//     console.log('Form submitted:', data);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     alert('Form submitted successfully!');
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

//       <Form onSubmit={handleSubmit(onSubmit)} errors={formattedErrors}>
//         <FormField name="name">
//           <FormLabel required>Name</FormLabel>
//           <FormInput placeholder="Your name" {...register('name')} />
//           <FormDescription>Please enter your full name.</FormDescription>
//         </FormField>

//         <FormField name="email">
//           <FormLabel required>Email</FormLabel>
//           <FormInput type="email" placeholder="email@example.com" {...register('email')} />
//         </FormField>

//         <FormField name="phoneNumber">
//           <FormLabel>Phone Number</FormLabel>
//           <FormInput placeholder="1234567890" {...register('phoneNumber')} />
//           <FormDescription>Optional, but required if phone is your preferred contact method.</FormDescription>
//         </FormField>

//         <FormField name="department">
//           <FormLabel required>Department</FormLabel>
//           <FormSelect {...register('department')} options={departments} />
//         </FormField>

//         <FormField name="preferredContact">
//           <FormLabel required>Preferred Contact Method</FormLabel>
//           <FormRadioGroup>
//             <FormRadio id="email-contact" value="email" label="Email" {...register('preferredContact')} />
//             <FormRadio id="phone-contact" value="phone" label="Phone" {...register('preferredContact')} />
//             <FormRadio id="post-contact" value="post" label="Post" {...register('preferredContact')} />
//           </FormRadioGroup>
//         </FormField>

//         <FormField name="message">
//           <FormLabel required>Message</FormLabel>
//           <FormTextarea placeholder="Please type your message here..." rows={5} {...register('message')} />
//         </FormField>

//         <FormField name="notifications">
//           <Controller
//             name="notifications"
//             control={control}
//             render={({ field }) => (
//               <FormSwitch
//                 label="Receive notifications about our updates and offers"
//                 checked={field.value}
//                 onChange={field.onChange}
//               />
//             )}
//           />
//         </FormField>

//         <FormField name="agreeToTerms">
//           <FormCheckbox id="terms" label="I agree to the Terms and Conditions" {...register('agreeToTerms')} />
//         </FormField>

//         <div className="flex justify-end space-x-4 mt-8">
//           <FormButton type="button" variant="outline" onClick={() => window.location.reload()}>
//             Cancel
//           </FormButton>
//           <FormButton type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </FormButton>
//         </div>
//       </Form>
//     </div>
//   );
// }
