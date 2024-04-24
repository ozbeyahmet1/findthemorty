import Head from "next/head";

export default function HeadLayout() {
  return (
    <Head>
      {/* Meta tags */}
      <title>Rick and Morty Search | Find your favorite characters!</title>
      <meta name="description" content="Explore characters from the Rick and Morty universe." />
      <meta name="keywords" content="Rick and Morty, characters, search, universe" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="https://res.cloudinary.com/droheqpxn/image/upload/v1713917214/Screenshot_2024-04-24_at_03.05.28_gwupbp.png" />

      {/* Open Graph tags */}
      <meta property="og:title" content="Rick and Morty Search | Find your favorite characters!" />
      <meta property="og:description" content="Explore characters from the Rick and Morty universe." />
      <meta property="og:image" content="/rick-and-morty-og-image.png" />
      <meta property="og:type" content="website" />

      {/* Twitter tags */}
      <meta name="twitter:title" content="Rick and Morty Search | Find your favorite characters!" />
      <meta name="twitter:description" content="Explore characters from the Rick and Morty universe." />
      <meta name="twitter:image" content="https://res.cloudinary.com/droheqpxn/image/upload/v1713918653/Screenshot_2024-04-24_at_03.05.28-removebg-preview_pyieib.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
