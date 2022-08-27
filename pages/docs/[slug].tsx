import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Head from 'next/head';
import { Header } from '../../components/Header';
import { getAllDocs, getDocBySlug } from '../../services/api';
import markdownToHtml from '../../services/markdow';

export default function Doc({ doc }: any) {
  const router = useRouter();
  if (!router.isFallback && !doc?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Header />
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div style={{ padding: '80px' }}>
          <div dangerouslySetInnerHTML={{ __html: doc.content }} />
        </div>
      )}
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const doc = getDocBySlug(params.slug, ['slug', 'content']);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      doc: {
        ...doc,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs(['slug']);

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}
