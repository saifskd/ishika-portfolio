import { assetPath } from '../lib/paths';
import Image from 'next/image';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="container footer">
      <BrandLogo />
      <p>© 2026 Ishika. All rights reserved.</p>
      <a href="#main">Back to top ↑</a>
      <small className="creator-credit">
        <a href="https://saifskd.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Created by Saif — visit portfolio (opens in a new tab)">
          <span>Created by Saif</span>
          <Image src={assetPath('/images/branding/saif-sf-icon.ico')} width={20} height={20} alt="SF" unoptimized />
        </a>
      </small>
    </footer>
  );
}
