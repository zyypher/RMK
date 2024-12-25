import Head from 'next/head';
const Meta = () => {
   return (
      <Head>
         {/* <!-- HTML Meta Tags --> */}
         <title>Educax - A Modern LMS and Kindergarten React js, Next.js Template for Online Learning and Personalized Education</title>
         <meta name="description" content="Educax, a leading Learning Management System (LMS) and Kindergarten React.js/Next.js Template, crafted by Tork, revolutionizes online learning and personalized education. Unleash the power of a modern platform designed for seamless education delivery and enriched by Tork's expertise" />

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://educax-next.thetork.com/" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content="Educax - A Modern LMS and Kindergarten React js, Next.js Template for Online Learning and Personalized Education" />
         <meta property="og:description" content="Educax, a leading Learning Management System (LMS) and Kindergarten React.js/Next.js Template, crafted by Tork, revolutionizes online learning and personalized education. Unleash the power of a modern platform designed for seamless education delivery and enriched by Tork's expertise" />
         <meta property="og:image" content="/images/og.png" />

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta property="twitter:domain" content="educax-next.thetork.com" />
         <meta property="twitter:url" content="https://educax-next.thetork.com/" />
         <meta name="twitter:title" content="Educax - A Modern LMS and Kindergarten React js, Next.js Template for Online Learning and Personalized Education" />
         <meta name="twitter:description" content="Educax, a leading Learning Management System (LMS) and Kindergarten React.js/Next.js Template, crafted by Tork, revolutionizes online learning and personalized education. Unleash the power of a modern platform designed for seamless education delivery and enriched by Tork's expertise" />
         <meta name="twitter:image" content="/images/og.png" />


         <meta charSet="UTF-8" />
         <meta name="keywords" content="title, meta, next.js, react js" />
         <meta name="author" content="thetork.com" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />

      </Head>
   );
};

export default Meta;