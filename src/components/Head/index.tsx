import { IMetaData } from '@/types/metaData';
import { Helmet } from 'react-helmet-async';

/**
 * Head component is responsible for setting up the SEO metadata for the page.
 * It uses the `react-helmet` library to manage the document head.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the page.
 * @param {string} [props.description] - The description of the page. If not provided, a default description is used.
 *
 * @example
 * <Head title="Home Page" description="Welcome to the home page" />
 *
 * @returns {JSX.Element} The Helmet component with the SEO metadata.
 */

export default function Head({ title, description }: IMetaData) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="robots" content="noindex" />
    </Helmet>
  );
}
