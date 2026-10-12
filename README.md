# Paradise Nursery — Shopping Cart Application

A responsive online houseplant store built for the IBM Full Stack Software Developer Professional Certificate final React/Redux project.

## Project overview

Paradise Nursery lets visitors browse **18 unique houseplants across three categories**, add items to a shopping cart, change quantities, remove items, and see an automatically calculated order total.

## Features

- Landing page with a plant background, the company name, and a **Get Started** button.
- Company information in `AboutUs.jsx`.
- **3 plant categories, 6 unique houseplants in each**, including thumbnails, names, prices, and light recommendations.
- Add to Cart buttons become disabled after the plant is added.
- Shared Home / Plants / Cart navigation with a live cart item count.
- Redux Toolkit slice for add, remove, increment, and decrement actions.
- Cart page displays unit price, quantity, per-item total, and full order total.
- Continue Shopping button returns to the product list.
- Checkout button displays **Coming Soon**.
- Responsive layout for desktop and mobile screens.

## Run locally

Install Node.js 18 or newer, then run:

```bash
npm install
npm run dev
```

Visit the localhost URL shown by Vite. For a production build run `npm run build`.

## Project files for assignment submission

| Task | File |
| --- | --- |
| 1 | `README.md` |
| 2 | `src/components/AboutUs.jsx` |
| 3 | `src/App.css` |
| 4 | `src/App.jsx` |
| 5 | `src/redux/CartSlice.jsx` |
| 6 | `src/components/ProductList.jsx` |
| 7 | `src/components/CartItem.jsx` |

## Notes

- Images are hosted remotely by Unsplash and require an internet connection; image fallbacks are provided for listings.
- This is a demo app: there is no real checkout or payment integration.
- Cart data lives in Redux state and resets on page refresh.
