import { Leaf, Truck, HeartHandshake } from 'lucide-react';

export default function AboutUs() {
  return <section className="about section-width" id="about">
    <div className="section-eyebrow">A LITTLE ABOUT US</div>
    <h2>We believe a greener home is a happier home.</h2>
    <p className="about-intro">Paradise Nursery is a friendly online plant shop bringing beautiful, thoughtfully selected houseplants to plant lovers of every experience level. Our mission is to make growing your indoor oasis simple, affordable, and fun.</p>
    <div className="benefits">
      <div><Leaf size={23}/><strong>Curated with care</strong><span>From easy-care favorites to statement greens.</span></div>
      <div><Truck size={23}/><strong>Delivered with love</strong><span>Plants packed to arrive happy and healthy.</span></div>
      <div><HeartHandshake size={23}/><strong>Here to help</strong><span>Friendly plant advice for every step of your journey.</span></div>
    </div>
  </section>;
}
