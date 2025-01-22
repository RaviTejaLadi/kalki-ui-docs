import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description?: string;
};

const APP_TITLE = import.meta.env.VITE_APP_TITLE;
const APP_DESCRIPTION = import.meta.env.VITE_APP_DESCRIPTION;

/**
 * SeoMetaData component is responsible for setting up the SEO metadata for the page.
 * It uses the `react-helmet` library to manage the document head.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the page.
 * @param {string} [props.description] - The description of the page. If not provided, a default description is used.
 *
 * @example
 * <SeoMetaData title="Home Page" description="Welcome to the home page" />
 *
 * @returns {JSX.Element} The Helmet component with the SEO metadata.
 */

export default function SeoMetaData({ title, description }: Props) {
  return (
    <Helmet>
      <title>{`${title} | ${APP_TITLE}`}</title>
      <meta name="description" content={description ?? `This is ${APP_DESCRIPTION}`} />
      <meta property="og:title" content={`${title} | ${APP_TITLE}`} />
      <meta property="og:description" content={description ?? `This is ${APP_DESCRIPTION}`} />
      <meta name="robots" content="noindex" />
    </Helmet>
  );
}
