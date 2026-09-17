import { assetPath } from '../lib/paths';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogo({ priority = false }) {
  return (
    <Link href="/" className="brand-logo" aria-label="Ishika home">
      <Image
        className="brand-logo-dark"
        src={assetPath('/images/branding/ishika-logo-dark.png')}
        width={2172}
        height={724}
        alt="Ishika - Graphic Designer and Visual Creator"
        sizes="(max-width: 600px) 144px, 168px"
        quality={95}
        priority={priority}
      />
      <Image
        className="brand-logo-light"
        src={assetPath('/images/branding/ishika-logo-light.png')}
        width={2172}
        height={724}
        alt="Ishika - Graphic Designer and Visual Creator"
        sizes="(max-width: 600px) 144px, 168px"
        quality={95}
        priority={priority}
      />
    </Link>
  );
}
