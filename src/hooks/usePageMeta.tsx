import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  path?: string;
  schema?: Record<string, any>;
}

const SITE_URL = 'https://geocoreminerals.com';
const DEFAULT_IMAGE = 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1a0029db-a55b-49f4-b929-e023376c0e3f/id-preview-0d494291--78eb7ae8-738c-4ea0-82bc-61659bc871b9.lovable.app-1775154371803.png';

export const usePageMeta = ({ 
  title, 
  description, 
  keywords = '', 
  image = DEFAULT_IMAGE, 
  path = '/',
  schema 
}: PageMetaProps) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  
  useEffect(() => {
    document.title = `${title} | GeoCore Minerals`;
  }, [title]);

  const helmetTitle = `${title} | GeoCore Minerals`;

  return {
    title: helmetTitle,
    description,
    keywords,
    image,
    canonicalUrl,
    schema,
  };
};

interface HelmetMetaProps extends PageMetaProps {
  children?: React.ReactNode;
}

export const PageMeta = ({ 
  title, 
  description, 
  keywords = '', 
  image = DEFAULT_IMAGE, 
  path = '/',
  schema,
  children
}: HelmetMetaProps) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const helmetTitle = `${title} | GeoCore Minerals`;

  const schemaStr = schema ? JSON.stringify(schema) : '';

  return (
    <Helmet>
      <title>{helmetTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={helmetTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="GeoCore Minerals" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={helmetTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {schema && schemaStr && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaStr }} />
      )}
      
      {children}
    </Helmet>
  );
};
