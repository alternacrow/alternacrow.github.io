import React, {FC} from 'react';
import NextHead from 'next/head';

const SITE_NAME = 'alternacrow';
const CANONICAL_URL = 'https://alternacrow.github.io';

type Props = {
  title: string;
  description: string;
};

export const Head: FC<Props> = ({title, description, children}) => {
  const pageTitle = `${title} | ${SITE_NAME}`;

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={CANONICAL_URL} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle}></meta>
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:locale" content="ja_JP" />

      <meta
        property="og:image"
        content={'https://alternacrow.github.io/icon.svg'}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={CANONICAL_URL} />
      <meta
        name="twitter:image"
        content={'https://alternacrow.github.io/icon.svg'}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            description,
            url: CANONICAL_URL,
            '@type': 'WebSite',
            headline: pageTitle,
            name: SITE_NAME,
            '@context': 'https://schema.org',
          }),
        }}
      />

      {children}
    </NextHead>
  );
};
