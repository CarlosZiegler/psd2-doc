import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <Link href="/" aria-label="Home">
          <Image
            src="/N26_App_Icon.png"
            alt="N26 Logo"
            width="45"
            height="45"
          />
        </Link>
        <div className={styles.ctas}>
          <a href="https://github.com/n26/psd2-tpp-docs" aria-label="Github">
            <FaGithub color="#1A2E46" />
          </a>
          <a href="/docs/openapi">
            <TbApi color="#1A2E46" />
          </a>
          <a href="/docs" className={styles.button} style={{ marginRight: 5 }}>
            Documentation
          </a>
        </div>
      </div>
    </header>
  );
}
