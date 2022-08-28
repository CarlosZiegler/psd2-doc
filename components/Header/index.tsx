import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

export function Header() {
  return (
    <header className={'header'}>
      <div className={'containerHeader'}>
        <Link href="/" aria-label="Home">
          <Image
            src="/N26_App_Icon.png"
            alt="N26 Logo"
            width="45"
            height="45"
          />
        </Link>
        <div className={'ctas'}>
          <a href="https://github.com/n26/psd2-tpp-docs" aria-label="Github">
            <FaGithub color="#1A2E46" />
          </a>
          <Link href="/docs/openapi">
            <a>
              <TbApi color="#1A2E46" />
            </a>
          </Link>
          <Link href="/docs" className={'button'} style={{ marginRight: 5 }}>
            <a>Documentation</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
