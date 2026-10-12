import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, Check, ArrowRight } from 'lucide-react';
import { addItem, selectCartItems } from '../redux/CartSlice';
import { categories } from '../data';

export default function ProductList({ navigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [activeCategory, setActiveCategory] = useState('all');
  const displayCategories = activeCategory === 'all' ? categories : categories.filter(c => c.id === activeCategory);
  const inCart = id => cartItems.some(item => item.id === id);

  return <main className="shop-page">
    <section className="shop-intro section-width"><div className="section-eyebrow">THE PLANT COLLECTION</div><h1>Find your next <em>green friend.</em></h1><p>Thoughtfully chosen houseplants for every corner, every mood, and every level of plant parenthood.</p>
      <div className="category-tabs" aria-label="Filter plants by category"><button className={activeCategory === 'all' ? 'selected' : ''} onClick={() => setActiveCategory('all')}>All plants <span>18</span></button>{categories.map(category => <button key={category.id} className={activeCategory === category.id ? 'selected' : ''} onClick={() => setActiveCategory(category.id)}>{category.name} <span>6</span></button>)}</div>
    </section>
    <div className="section-width listing-sections">{displayCategories.map(category => <section className="plant-section" key={category.id}>
      <div className="category-heading"><div><div className="section-eyebrow">{category.kicker}</div><h2>{category.name}</h2><p>{category.description}</p></div><span className="category-count">06 PLANTS</span></div>
      <div className="plant-grid">{category.plants.map(plant => <article className="plant-card" key={plant.id}><div className="plant-image"><img src={plant.image} alt={plant.name} loading="lazy" onError={e => { e.currentTarget.src = `https://placehold.co/700x800/e9efe6/385843?text=${encodeURIComponent(plant.name)}`; }} /><span className="plant-label">HOUSEPLANT</span></div><div className="plant-info"><span className="plant-light">{plant.light}</span><div className="plant-name-price"><h3>{plant.name}</h3><strong>${plant.price.toFixed(2)}</strong></div><button className={`add-button ${inCart(plant.id) ? 'added' : ''}`} disabled={inCart(plant.id)} onClick={() => dispatch(addItem(plant))}>{inCart(plant.id) ? <><Check size={17}/> Added to cart</> : <><Plus size={17}/> Add to cart</>}</button></div></article>)}</div>
    </section>)}</div>
    <section className="shop-bottom"><div className="section-width"><h2>Something caught your eye?</h2><p>Bring a little more green into your everyday.</p><button className="primary light" onClick={() => navigate('cart')}>View your cart <ArrowRight size={19}/></button></div></section>
  </main>;
}
