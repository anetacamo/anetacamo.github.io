import React from 'react';
import { Helmet } from 'react-helmet';
import { slugify } from '../utils/slugify';

const MetaTags = ({ name, description, image }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{name} | AnetaCamo</title>
      <meta name='description' content={description}></meta>
      <link rel='canonical' href='https://anetacamo.github.io' />
      <meta
        name='keywords'
        content='web development, art, illustration, react, next.js, javascript, typescript'
      />
      <meta name='author' content='Aneta Camo' />
      <meta
        property='og:url'
        content={`https://anetacamo.github.io/#/${slugify(name)}`}
      />
      <meta property='og:title' content={`${name} | AnetaCamo`} />
      <meta property='og:description' content={description} />
      <meta property='og:locale' content='da_DK' />
      <meta
        property='og:image'
        content={image ? image : '../images/portrait.png'}
      />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@anetacamo' />
      <meta name='twitter:creator' content='@anetacamo' />
    </Helmet>
  );
};
export default MetaTags;
