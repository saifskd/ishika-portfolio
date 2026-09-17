import Link from 'next/link';
import {useState,useEffect,useRef} from 'react';
import {useRouter} from 'next/router';
import {FiMenu,FiX,FiArrowUpRight} from 'react-icons/fi';
import ThemeContainer from './ThemeContainer';
import BrandLogo from './BrandLogo';
import {navigation} from '../data/portfolioData';
export default function Navbar(){const [open,setOpen]=useState(false);const menuButton=useRef(null);const router=useRouter();useEffect(()=>{setOpen(false)},[router.asPath]);return <header className="site-header"><div className="container nav-inner"><BrandLogo priority/><nav id="portfolio-nav" aria-label="Main navigation" className={open?'nav-links is-open':'nav-links'} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);menuButton.current?.focus();}}}>{navigation.map(item=><Link key={item.title} href={item.href} onClick={()=>setOpen(false)}>{item.title}</Link>)}</nav><div className="nav-actions"><Link className="nav-contact" href="/#contact">Let’s talk <FiArrowUpRight/></Link><ThemeContainer/><button ref={menuButton} className="icon-button menu-toggle" aria-expanded={open} aria-controls="portfolio-nav" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<FiX/>:<FiMenu/>}</button></div></div></header>;}
