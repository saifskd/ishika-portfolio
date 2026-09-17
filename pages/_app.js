import { MotionConfig } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
export default function App({Component,pageProps}) { return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Skip to content</a><Navbar/><Component {...pageProps}/><Footer/></MotionConfig>; }
