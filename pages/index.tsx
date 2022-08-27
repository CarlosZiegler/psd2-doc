/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../components/Header';
import styles from '../styles/home.module.scss';

export default function index({ spec }: any) {
  return (
    <>
      <Head>
        <title>N26 PSD2 API</title>

        <link rel="canonical" href="https://brasilapi.com.br/" />
        <meta
          name="keywords"
          content="Brasil API, cep, ddd, bancos, cnpj, receita federal, ibge, feriados, tabela fipe, municípios"
        />
        <meta
          name="description"
          content="API gratuita para consultar as mais diversas informações, desde CEP até tabela FIPE!"
        />

        <meta
          property="og:description"
          content="API gratuita para consultar as mais diversas informações, desde CEP até tabela FIPE!"
        />

        <meta property="og:site_name" content="Brasil API" />
        <meta property="og:url" content="https://brasilapi.com.br/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://brasilapi.com.br/favicon-32x32.png"
        />
      </Head>
      <Header />

      <main className={styles.mainContainer}>
        <section className={styles.sectionHeader}>
          <div className={styles.content}>
            <h2>Dedicated interface</h2>
            <p>
              Our dedicated interface is the REST API compliant with version
              1.3.6 of the Berlin Group Implementation Guide(new tab).
              Authorization Protocol: oAuth 2.0(new tab). Note: Note: A valid
              QWAC certificate is required to access the Berlin Group API. The
              official list of qualified trust service providers is available on
              the European Commission's Trusted List based on the eIDAS
              Regulation(new tab). N26's dedicated PSD2 interface (API) requires
              a QWAC certificate to be issued by a qualified certificate
              authority
            </p>
            <a href="/docs" className={styles.buttonStartNow}>
              Get started
            </a>
          </div>
          <Image
            src="/N26_Logo_Black_RGB_M.jpeg"
            className={styles.schemaDesk}
            alt="API Schema"
            width="286"
            height="286"
          />
        </section>
        <section className={styles.motivation}>
          <h2>Motivation</h2>
          <p>
            The Second EU Payment Services Directive (PSD2) brings some changes
            for payment services within the European Union. The aim of PSD2 is
            to create a more unified, transparent and open EU payments market
            and to offer innovation, competition and security to all market
            participants. If you want to get access to N26's PSD2 interfaces as
            a third party, you need to be licensed by a national regulatory
            body. In Germany, this is the Federal Financial Supervisory
            Authority (BaFin) in Bonn. You also need a qualified certificate for
            website authentication (QWAC). You can apply for such certificates
            from qualified trust service providers (QTSP(new tab)).
          </p>
          <a
            href="https://vercel.com/?utm_source=brasilapi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/powered-by-vercel.svg"
              width="175"
              height="36"
              alt="Powered by Vercel"
            />
          </a>
        </section>
      </main>
    </>
  );
}
