import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function ComingSoon() {
  const router = useRouter();
  useEffect(() => { router.replace('/#work'); }, [router]);
  return <main id="main" className="container section"><Link href="/#work">Explore Ishika’s work →</Link></main>;
}
