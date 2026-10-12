// Eighteen distinct plants, across three categories (six per category).
// Unsplash images are loaded from the internet; plant names/prices are demo data.
const img = (id, width = 700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const categories = [
  {
    id: 'leafy', name: 'Lush & Leafy', kicker: 'BOLD GREENS', description: 'Statement foliage that brings the outdoors in.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 32, light: 'Indirect sunlight', image: img('photo-1501004318641-b39e6451bec6') },
      { id: 'fiddle', name: 'Fiddle Leaf Fig', price: 45, light: 'Bright filtered light', image: img('photo-1485955900006-10f4d324d411') },
      { id: 'pothos', name: 'Golden Pothos', price: 18, light: 'Low to medium light', image: img('photo-1463320726281-696a485928c7') },
      { id: 'rubber', name: 'Rubber Plant', price: 29, light: 'Indirect sunlight', image: img('photo-1497250681960-ef046c08a56e') },
      { id: 'philodendron', name: 'Heartleaf Philodendron', price: 24, light: 'Medium indirect light', image: img('photo-1416879595882-3373a0480b5b') },
      { id: 'alocasia', name: 'Alocasia Polly', price: 34, light: 'Bright indirect light', image: img('photo-1459156212016-c812468e2115') }
    ]
  },
  {
    id: 'easy', name: 'Easy-Care Favorites', kicker: 'LOW MAINTENANCE', description: 'Beautiful greenery for busy schedules and beginners.',
    plants: [
      { id: 'snake', name: 'Snake Plant', price: 22, light: 'Low to bright light', image: img('photo-1593482892290-f54927ae2b7a') },
      { id: 'zz', name: 'ZZ Plant', price: 28, light: 'Low light friendly', image: img('photo-1518531933037-91b2f5f229cc') },
      { id: 'spider', name: 'Spider Plant', price: 16, light: 'Indirect sunlight', image: img('photo-1493455199128-7d57e6b0f1c5') },
      { id: 'peace', name: 'Peace Lily', price: 26, light: 'Low to medium light', image: img('photo-1520412099551-62b6bafeb5bb') },
      { id: 'dracaena', name: 'Dracaena Marginata', price: 31, light: 'Filtered sunlight', image: img('photo-1463936575829-25148e1db1b8') },
      { id: 'castiron', name: 'Cast Iron Plant', price: 25, light: 'Low light', image: img('photo-1470252649378-9c29740c9fa8') }
    ]
  },
  {
    id: 'desert', name: 'Succulents & More', kicker: 'SUN LOVERS', description: 'Sculptural plants with a little extra personality.',
    plants: [
      { id: 'aloe', name: 'Aloe Vera', price: 14, light: 'Bright direct light', image: img('photo-1509423350716-97f9360b4e09') },
      { id: 'jade', name: 'Jade Plant', price: 19, light: 'Bright sunlight', image: img('photo-1444021465936-c6ca81d39b84') },
      { id: 'echeveria', name: 'Echeveria', price: 12, light: 'Full to partial sun', image: img('photo-1459156212016-c812468e2115') },
      { id: 'cactus', name: 'Golden Barrel Cactus', price: 21, light: 'Full sun', image: img('photo-1509223197845-458d87318791') },
      { id: 'haworthia', name: 'Haworthia Zebra', price: 15, light: 'Bright indirect light', image: img('photo-1483794344563-d27a8d18014e') },
      { id: 'stringpearls', name: 'String of Pearls', price: 20, light: 'Bright indirect light', image: img('photo-1497250681960-ef046c08a56e') }
    ]
  }
];
