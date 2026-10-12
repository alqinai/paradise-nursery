import { useEffect, useState } from 'react';
import { ArrowRight, ArrowDown, Sprout } from 'lucide-react';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function Home({ navigate }) {
  return <main><section className="hero"><div className="hero-overlay"/><div className="hero-content section-width"><div className="hero-kicker"><Sprout size={17}/> YOUR HOME, A LITTLE GREENER</div><h1>A little green.<br/><em>A lot of joy.</em></h1><p>Meet your new favorite houseplants. Carefully curated, easy to love, and ready to make your space feel like home.</p><button className="primary hero-cta" onClick={() => navigate('plants')}>Get Started <ArrowRight size={20}/></button><div className="hero-footnote"><span className="hero-footnote-line"/> PLANT HAPPINESS STARTS HERE</div></div><div className="hero-side-caption">GROW AT YOUR OWN PACE · PARADISE NURSERY</div></section><div className="ticker"><div className="section-width ticker-inner"><span>Curated houseplants</span><span>✳</span><span>Made for every home</span><span>✳</span><span>Plant happiness delivered</span></div></div><AboutUs/><section className="browse-banner section-width"><div><span className="section-eyebrow">READY TO GROW?</span><h2>Your indoor jungle starts here.</h2><p>Discover 18 favorites across three handpicked collections.</p></div><button className="primary" onClick={() => navigate('plants')}>Shop plants <ArrowRight size={19}/></button></section></main>;
}

export default function App() {
  const getPage = () => { const hash = window.location.hash.slice(1); return ['home', 'plants', 'cart'].includes(hash) ? hash : 'home'; };
  const [page, setPage] = useState(getPage);
  useEffect(() => { const onChange = () => setPage(getPage()); window.addEventListener('hashchange', onChange); return () => window.removeEventListener('hashchange', onChange); }, []);
  const navigate = destination => { window.location.hash = destination; setPage(destination); window.scrollTo({ top: 0, behavior: 'instant' }); };
  return <><Navbar page={page} navigate={navigate}/>{page === 'home' ? <Home navigate={navigate}/> : page === 'plants' ? <ProductList navigate={navigate}/> : <CartItem navigate={navigate}/>}<footer className="footer"><div className="section-width footer-inner"><span><Sprout size={18}/> paradise nursery</span><span>Growing a little joy, one plant at a time.</span><span>© {new Date().getFullYear()} Paradise Nursery</span></div></footer></>;
}
