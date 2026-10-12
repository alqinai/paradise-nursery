import { Leaf, ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/CartSlice';

export default function Navbar({ page, navigate }) {
  const count = useSelector(selectCartCount);
  return <header className="nav-wrap"><nav className="nav section-width" aria-label="Main navigation">
    <button className="brand" onClick={() => navigate('home')} aria-label="Paradise Nursery home"><span className="brand-icon"><Leaf size={24}/></span><span>paradise<span className="brand-light">nursery</span><small>BRING NATURE HOME</small></span></button>
    <div className="nav-links">
      <button className={page === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Home</button>
      <button className={page === 'plants' ? 'active' : ''} onClick={() => navigate('plants')}>Plants</button>
      <button className={page === 'cart' ? 'active' : ''} onClick={() => navigate('cart')}>Cart</button>
    </div>
    <button className="cart-nav" onClick={() => navigate('cart')} aria-label={`Shopping cart with ${count} items`}><ShoppingBag size={22}/><span className="cart-count">{count}</span></button>
  </nav></header>;
}
