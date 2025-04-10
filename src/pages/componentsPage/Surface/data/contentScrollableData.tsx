import ContentScrollable from '@/components/common/ContentScrollable';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'This example demonstrates the most basic usage of the ContentScrollable component. It creates a scrollable container with a fixed height.',
    code: `
      <ContentScrollable variant="info" height="200px">
        <p>This is some content that will be scrollable.</p>
        <p>If the content exceeds the height of 200px, a scrollbar will appear.</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </ContentScrollable>
      `,
    snippet: (
      <ContentScrollable variant="info" height="200px">
        <p>This is some content that will be scrollable.</p>
        <p>If the content exceeds the height of 200px, a scrollbar will appear.</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in
          the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
          generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words
          etc.
        </p>
      </ContentScrollable>
    ),
  },
  {
    title: 'Custom Width and Height',
    desc: 'This example shows how to set both custom width and height for the scrollable container.',
    code: `
      <ContentScrollable height="300px" width="50%">
        <h2>Custom Size Scrollable Content</h2>
        <p>This container has a height of 300px and a width of 50% of its parent.</p>
        {/* Imagine more content here */}
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </ContentScrollable>
      `,
    snippet: (
      <ContentScrollable height="300px" width="50%">
        <h2>Custom Size Scrollable Content</h2>
        <p>This container has a height of 300px and a width of 50% of its parent.</p>
        {/* Imagine more content here */}
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in
          the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
          generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words
          etc.
        </p>
      </ContentScrollable>
    ),
  },
  {
    title: 'With Variant',
    desc: 'This example demonstrates how to use the variant prop to apply different styles to the scrollable container.',
    code: `
      <ContentScrollable height="250px" variant="primary">
        <h3>Primary Variant Scrollable Content</h3>
        <p>This container uses the &apos;primary&apos; variant styling.</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </ContentScrollable>
      `,
    snippet: (
      <ContentScrollable height="250px" variant="primary">
        <h3>Primary Variant Scrollable Content</h3>
        <p>This container uses the &apos;primary&apos; variant styling.</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in
          the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
          generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words
          etc.
        </p>
      </ContentScrollable>
    ),
  },
  {
    title: 'With Custom Styling',
    desc: 'This advanced example shows how to apply custom styles to the ContentScrollable component using inline styles and custom CSS classes.',
    code: `
      <ContentScrollable height="400px" width="300px" className="p-2 rounded-md border-2">
        <h2>Custom Styled Scrollable Content</h2>
        <p>This container has custom styles applied using both inline styles and a custom CSS class.</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </ContentScrollable>
      `,
    snippet: (
      <ContentScrollable height="400px" width="300px" className="p-2 rounded-md border-2">
        <h2>Custom Styled Scrollable Content</h2>
        <p>This container has custom styles applied using both inline styles and a custom CSS class.</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in
          the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
          generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words
          etc.
        </p>
      </ContentScrollable>
    ),
  },
];
export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  [
    'height',
    'string',
    'undefined',
    "Specifies the height of the scrollable container. Can be any valid CSS height value (e.g., '200px', '50vh').",
  ],
  [
    'width',
    'string',
    'undefined',
    "Specifies the width of the scrollable container. Can be any valid CSS width value (e.g., '300px', '100%').",
  ],
  ['children', 'node', 'required', 'The content to be rendered inside the scrollable container.'],
  [
    'variant',
    'string',
    'undefined',
    'Specifies a variant for styling. The available variants depend on your CSS implementation.',
  ],
  ['ref', 'Ref', 'undefined', 'Allows getting a ref to the DOM node of the scrollable container.'],
  ['...rest', 'object', '{}', 'Any additional props will be spread onto the root div element.'],
];
