# StyleHub

StyleHub is a modern fashion e-commerce frontend built with React and Vite. It provides a responsive shopping experience for browsing clothing, discovering brands, viewing product details, managing a cart, reviewing orders, and accessing customer account pages.

The project currently uses local mock data and simulated interactions. It does not include a backend, database, payment gateway, real authentication system, or persistent cart storage.

## Live Project

Repository:

https://github.com/muhammadshaharyaraulakh/StyleHub

## Features

- Modern fashion storefront UI
- Responsive desktop, tablet, and mobile layouts
- Animated navigation and page transitions
- Homepage hero section
- New arrivals section
- Top-selling products section
- On-sale products page
- Brand filtering
- Product category filtering UI
- Price range filter UI
- Size filter UI
- Product sorting UI
- Product pagination
- Product detail page
- Product image gallery
- Product reviews
- Product detail information
- Product FAQs
- Add-to-cart confirmation modal
- Shopping cart page
- Quantity adjustment
- Remove cart items
- Discount calculation
- Delivery fee calculation
- Mock checkout flow
- Login page
- Signup page
- Password recovery page
- Verification code page
- Customer profile page
- Email update UI
- Password update UI
- Account deletion UI
- Order history page
- Order status indicators
- Review submission modal
- Newsletter subscription UI
- Responsive mobile menu
- Responsive mobile search panel
- Animated testimonials carousel
- Brand showcase banner
- Vercel deployment configuration

## Technology Stack

### Frontend

- React 19
- React DOM
- React Router DOM
- Vite
- Tailwind CSS
- Motion
- Lucide React
- React Icons

### Fonts

- Inter
- Space Grotesk
- Archivo Black

### Code Quality

- Oxlint
- Vite production build

## Project Structure

```text
StyleHub/
├── public/
│   ├── assests/
│   │   ├── product images
│   │   ├── category images
│   │   ├── hero images
│   │   └── fashion images
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       └── ProductCard.jsx
│   │
│   ├── pages/
│   │   ├── Brands.jsx
│   │   ├── Cart.jsx
│   │   ├── ForgetPassword.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NewArrivals.jsx
│   │   ├── OnSale.jsx
│   │   ├── OrderHistory.jsx
│   │   ├── Placeholders.jsx
│   │   ├── Profile.jsx
│   │   ├── Shop.jsx
│   │   ├── Signup.jsx
│   │   ├── SingleProduct.jsx
│   │   └── Verification.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── vite.config.js
```

## Application Routes

| Route | Page |
|---|---|
| `/` | Homepage |
| `/shop` | Product shop |
| `/cart` | Shopping cart |
| `/product/:id` | Product details |
| `/login` | Login page |
| `/signup` | Signup page |
| `/forget-password` | Password recovery |
| `/verification` | Verification code page |
| `/orders` | Order history |
| `/profile` | Customer profile |
| `/sale` | Sale products |
| `/newarrivals` | New arrivals |
| `/brands` | Brand-filtered products |

## Homepage

The homepage includes:

- Fashion-focused hero section
- “Find clothes that matches your style” headline
- Shop Now call-to-action
- Store statistics
- Animated brand banner
- New arrivals
- Top-selling products
- Dress-style browsing section
- Casual category
- Formal category
- Party category
- Gym category
- Animated customer testimonials
- Newsletter subscription section

## Product Discovery

### Shop Page

The shop page includes:

- Product grid
- Category filter
- Price range filter
- Size filter
- Sorting dropdown
- Mobile filter drawer
- Pagination
- Responsive product cards

Available categories include:

- All Products
- Men's Wear
- Women's Wear
- Accessories

Available sizes include:

```text
XXS
XS
S
M
L
XL
XXL
3XL
4XL
```

Available sorting options include:

- Most Popular
- Newest
- Price: Low to High
- Price: High to Low

## Product Details

The product detail page includes:

- Product image gallery
- Product thumbnails
- Product title
- Product rating
- Current price
- Original price
- Discount badge
- Product description
- Quantity selector
- Add to Cart button
- Reviews tab
- Product Details tab
- FAQs tab
- Load More Reviews functionality
- Add-to-cart success modal

The sample product details include:

- Organic cotton material
- Heavyweight 240 GSM fabric
- Relaxed oversized fit
- Ribbed crew neckline
- Drop shoulder sleeves
- Machine wash care instructions
- Casual and streetwear use

## Shopping Cart

The cart page includes:

- Initial demo cart items
- Product image
- Product name
- Size
- Color
- Item price
- Quantity controls
- Remove item button
- Subtotal calculation
- 20% discount calculation
- Delivery fee calculation
- Total amount
- Promo code input
- Checkout button
- Order success modal
- Empty cart state

The current cart calculation uses:

```text
Subtotal = Sum of item prices × quantities
Discount = 20% of subtotal
Delivery Fee = $15
Total = Subtotal - Discount + Delivery Fee
```

Cart data is currently stored only in React component state and is reset when the page reloads.

## Authentication Pages

The project includes UI screens for:

- Login
- Signup
- Forgot password
- Verification code
- Password visibility toggle
- Loading states
- Form validation through required fields
- Navigation between authentication pages

Authentication is currently simulated with timers and does not connect to a real backend.

## Customer Profile

The profile page includes:

- Customer profile header
- Profile avatar placeholder
- Active member badge
- Email update form
- Password update form
- Account deletion section
- Profile image button

The profile actions are currently visual UI only and do not persist changes.

## Order History

The order history page includes:

- Demo orders
- Order number
- Order date
- Total amount
- Product items
- Quantity display
- Delivery status
- Processing status
- Shipped status support
- Delivered status support
- Add Review button for delivered orders
- Review popup modal

Order data is currently static mock data.

## Supported Brands

The brands page includes filtering for:

- All Brands
- VERSACE
- ZARA
- GUCCI
- PRADA
- CALVIN KLEIN

Products are displayed using reusable product cards and local image assets.

## Product Categories

The project includes visual browsing categories for:

- Casual
- Formal
- Party
- Gym

These categories currently navigate to shop URLs containing query parameters such as:

```text
/shop?style=casual
/shop?style=formal
/shop?style=party
/shop?style=gym
```

## Design System

StyleHub uses a bold modern fashion design style based on:

- Black and white color palette
- Thick borders
- Rounded cards
- High-contrast buttons
- Brutalist-inspired shadows
- Uppercase typography
- Animated transitions
- Responsive layouts
- Product-focused imagery

### Fonts

- `Inter` for general interface text
- `Space Grotesk` for headings
- `Archivo Black` for strong brand typography

### Reusable UI Components

#### Button

Located at:

```text
src/components/ui/Button.jsx
```

Supported button variants:

- `primary`
- `outline`
- `white`

Example:

```jsx
<Button variant="primary">
  Shop Now
</Button>
```

#### ProductCard

Located at:

```text
src/components/ui/ProductCard.jsx
```

The component supports:

- Product image
- Product name
- Current price
- Previous price
- Discount badge
- Product details navigation
- Motion-based reveal animation

## Requirements

Install the following before running the project:

- Node.js 20 or later
- npm 10 or later
- Git

Check installed versions:

```bash
node --version
npm --version
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/muhammadshaharyaraulakh/StyleHub.git
```

### 2. Enter the project directory

```bash
cd StyleHub
```

### 3. Install dependencies

```bash
npm install
```

For a clean installation using the lockfile:

```bash
npm ci
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display the local development URL, usually:

```text
http://localhost:5173
```

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

The generated files are placed in:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

## Vercel Deployment

The repository includes a `vercel.json` configuration file.

The configuration provides:

- Clean URLs
- SPA fallback routing
- Rewrite of all routes to `index.html`
- Long-term caching for static assets

### Deploy with Vercel CLI

Install the Vercel CLI:

```bash
npm install -g vercel
```

Login:

```bash
vercel login
```

Deploy:

```bash
vercel
```

Deploy to production:

```bash
vercel --prod
```

### Deploy through Vercel Dashboard

1. Open the Vercel dashboard.
2. Import the GitHub repository.
3. Select the `StyleHub` repository.
4. Use the default Vite settings.
5. Set the build command:

```text
npm run build
```

6. Set the output directory:

```text
dist
```

7. Deploy the project.

No environment variables are currently required.

## Static Assets

Fashion images are stored in:

```text
public/assests/
```

The project includes assets for:

- Hero banners
- Men's shirts
- Men's pants
- Men's suits
- Jackets
- Women's dresses
- Women's blouses
- Women's pants
- Children's clothing
- Casual style
- Formal style
- Party style
- Gym style
- Product thumbnails

Images are referenced using public paths:

```jsx
<img src="/assests/HeroImage.webp" alt="Fashion Couple" />
```

## Current Application Limitations

This version is a frontend prototype. The following features are currently simulated or static:

- Login
- Signup
- Password recovery
- Verification codes
- User profiles
- Email updates
- Password updates
- Account deletion
- Product search
- Product filtering logic
- Product sorting logic
- Cart persistence
- Checkout
- Payment processing
- Order creation
- Order tracking
- Newsletter subscription
- Social media links
- Product reviews
- Customer data
- Inventory management
- Product management

There is currently no:

- Backend API
- Database
- User authentication service
- Payment provider
- Real order processing
- Persistent shopping cart
- Admin dashboard
- Product CMS
- Email service
- Real-time inventory system

## Recommended Future Improvements

### Backend Integration

Add a backend using one of the following:

- Laravel
- Node.js and Express
- NestJS
- Django
- Firebase
- Supabase

### Database

Create database models for:

- Users
- Products
- Categories
- Brands
- Product variants
- Sizes
- Colors
- Carts
- Orders
- Order items
- Reviews
- Payments
- Addresses

### Authentication

Implement:

- Secure login
- User registration
- Email verification
- Password reset
- Session management
- JWT or cookie-based authentication
- Protected routes
- Logout functionality

### Commerce Features

Implement:

- Persistent cart
- Product search
- Functional filters
- Functional sorting
- Wishlist
- Product variants
- Coupons
- Checkout
- Payment processing
- Shipping addresses
- Order tracking
- Invoice generation

### Admin Features

Add an admin panel for:

- Product management
- Brand management
- Category management
- Order management
- Customer management
- Inventory management
- Discount management
- Review moderation
- Sales analytics

### Accessibility

Improve:

- Keyboard navigation
- Focus states
- Form error messages
- Screen-reader labels
- Color contrast
- Semantic HTML
- Modal accessibility
- Reduced-motion support

## Testing

Run linting:

```bash
npm run lint
```

Run the production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The project currently does not include an automated unit or end-to-end testing suite.

Recommended future testing tools:

- Vitest
- React Testing Library
- Playwright
- Cypress

## Code Quality

The project uses Oxlint with React rules.

Lint configuration:

```text
.oxlintrc.json
```

Run:

```bash
npm run lint
```

The build can be verified with:

```bash
npm run build
```

## Browser Support

The application is designed for modern browsers that support:

- ES modules
- CSS flexbox and grid
- CSS custom properties
- Modern JavaScript
- Web animations
- Responsive media queries

Recommended browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Contributing

1. Fork the repository.
2. Clone your fork.

```bash
git clone https://github.com/your-username/StyleHub.git
cd StyleHub
```

3. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

4. Install dependencies.

```bash
npm install
```

5. Make your changes.
6. Run linting.

```bash
npm run lint
```

7. Run the production build.

```bash
npm run build
```

8. Commit your changes.

```bash
git add .
git commit -m "Add your feature"
```

9. Push your branch.

```bash
git push origin feature/your-feature
```

10. Open a pull request.

## License

This project does not currently include an explicit license file.

Add a license before using StyleHub commercially or distributing it publicly.

## Author

Created and maintained by [muhammadshaharyaraulakh](https://github.com/muhammadshaharyaraulakh).

## Repository

[https://github.com/muhammadshaharyaraulakh/StyleHub](https://github.com/muhammadshaharyaraulakh/StyleHub)
