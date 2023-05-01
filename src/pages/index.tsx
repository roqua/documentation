import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          <Translate id="homepage.intro">
            Op deze site vindt u de gebruikershandleiding voor RoQua. De handleiding is opgesplitst in twee delen: de EPD-interface waarop u als medewerker inlogt vanuit uw EPD-software, en de Admin-interface waar coördinatoren, managers en applicatiebeheer de configuratie van RoQua kunnen beheren.
            Verder is er Medoq, het Mini EPD voor onderzoeksprojecten
            Naast deze handleiding voor eindgebruikers hebben we ook API-documentatie voor ontwikkelaars waarin staat beschreven hoe u uw software met RoQua kunt integreren.
          </Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
    </Layout>
  );
}
