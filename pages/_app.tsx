import '../styles/global.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { buildBreadcrumbs } from '../components/utils';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const meta = Component.layoutProps?.meta || {};
  const schema = Component.layoutProps?.schema;

  const canonicalURL = process.env.domain + router.pathname;
  const _title = meta.title ?? process.env.defaultTitle;
  const _description = meta.description ?? process.env.defaultDescription;

  useEffect(() => {
    const handleRouteChange = () => {
      // eslint-disable-next-line
      // @ts-ignore google analytics script
      ga('send', 'pageview');
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{_title}</title>
        <meta key='twitter:title' name='twitter:title' content={_title} />
        <meta name='description' content={_description} />
        <meta property='og:title' content={_title} />
        <meta property='og:description' content={_description} />

        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='apple-mobile-web-app-title' content={process.env.siteName} />
        <meta name='application-name' content={process.env.siteName} />
        <meta name='msapplication-TileColor' content='#38bdf8' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={process.env.domain} />
        <meta
          property='og:image'
          content={process.env.domain + require('../images/header.jpg?webp')}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href={canonicalURL} />
        <link rel='alternate' href={process.env.domain} hrefLang='en' />
        <link rel='alternate' href={process.env.domain + '/pl'} hrefLang='pl' />
        <link
          rel='alternate'
          href={process.env.domain + '/ru/counter-strike-download'}
          hrefLang='ru'
        />
        <link rel='alternate' href={process.env.domain + '/ro'} hrefLang='ro' />
        <link rel='alternate' href={process.env.domain + '/tr'} hrefLang='tr' />
        <link rel='alternate' href={process.env.domain + '/sr'} hrefLang='sr' />
        <link rel='alternate' href={process.env.domain + '/es'} hrefLang='es' />
        <link rel='alternate' href={process.env.domain + '/mk'} hrefLang='mk' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: buildBreadcrumbs(_title, router.pathname) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                ga('create', '${process.env.googleAnalyticsKey}', 'auto');
                ga('send', 'pageview');`
          }}
        />
        {schema ? (
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: schema }} />
        ) : null}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
