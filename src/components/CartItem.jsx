import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, ArrowRight, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { decrementQuantity, incrementQuantity, removeItem, selectCartCount, selectCartItems, selectCartTotal } from '../redux/CartSlice';

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const money = amount => `$${amount.toFixed(2)}`;

  return <main className="cart-page section-width"><div className="section-eyebrow">YOUR GREEN FINDS</div><h1>Shopping <em>cart.</em></h1><p className="cart-subtitle">{count === 0 ? 'Your cart is waiting for a little greenery.' : `${count} ${count === 1 ? 'plant' : 'plants'} ready for their new home.`}</p>
    {items.length === 0 ? <div className="empty-cart"><ShoppingBag size={48} strokeWidth={1.3}/><h2>Your cart is empty</h2><p>Let's find something leafy to brighten your space.</p><button className="primary" onClick={() => navigate('plants')}>Explore plants <ArrowRight size={18}/></button></div> : <div className="cart-layout"><section className="cart-items" aria-label="Items in cart"><div className="cart-head"><h2>Your plants</h2><span>{count} ITEMS</span></div>{items.map(item => <article className="cart-row" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-item-details"><h3>{item.name}</h3><p>{item.light}</p><span className="unit-price">{money(item.price)} each</span><div className="cart-row-controls"><div className="quantity" aria-label={`Quantity of ${item.name}`}><button onClick={() => dispatch(decrementQuantity(item.id))} aria-label={`Decrease ${item.name} quantity`}><Minus size={15}/></button><span>{item.quantity}</span><button onClick={() => dispatch(incrementQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}><Plus size={15}/></button></div><button className="delete" onClick={() => dispatch(removeItem(item.id))} aria-label={`Remove ${item.name}`}><Trash2 size={16}/> Remove</button></div></div><strong className="item-total">{money(item.price * item.quantity)}</strong></article>)}<button className="continue-link" onClick={() => navigate('plants')}><ArrowLeft size={17}/> Continue shopping</button></section>
      <aside className="order-summary"><div className="section-eyebrow">YOUR ORDER</div><h2>Order summary</h2><div className="summary-line"><span>Items ({count})</span><strong>{money(total)}</strong></div><div className="summary-line"><span>Shipping</span><span>Calculated at checkout</span></div><div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div><button className="primary checkout" onClick={() => window.alert('Coming Soon! Checkout will be available soon.')}>Checkout <ArrowRight size={19}/></button><p className="summary-note">Secure checkout coming soon. Thanks for growing with us!</p></aside></div>}
  </main>;
}
