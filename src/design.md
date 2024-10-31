## Thought Process
### Define the Goal:

What’s the purpose of your app? Let’s say you want to create an e-commerce site where users can browse, search, and purchase products from the Fake Store API.

### Set Up the Environment:

- Install React and Vite for your development environment.
- Set up the project directory and install necessary dependencies.

### Plan the Features:

List the core features: product listing, product details, search functionality, user authentication, and shopping cart.

### Design the Components:

- Break down your app into components:

    - Header (with navigation and search bar)
    - Product List
    - Product Card
    - Product Detail Page
    - Shopping Cart
    - Authentication (Sign In/Sign Out)
### Fetch Data:
- Use hooks like `useEffect` and `useState` to fetch data from the Fake Store API.
- Manage state for product data, user data, and cart items.

### Implement User Actions:

Handle actions like adding/removing items from the cart, user sign-in, and search functionality.

### Styling:

Use CSS or libraries like styled-components or Tailwind CSS for styling.

### Testing:

Write tests to ensure your components work as expected.

## Design Overview
1. Header:
- Contains navigation links (Home, Cart, Sign In).
- Search bar for filtering products.
- User authentication status.

2. Product List:
- Displays all products fetched from the API.
- Each product is represented by a Product Card.

3. Product Card:
- Shows product image, name, price, and a quick view button.
- Clicking on a product redirects to the Product Detail Page.

4. Product Detail Page:
- Displays detailed information about the product.
- Button to add the product to the cart.

5. Shopping Cart:
- Lists all products added to the cart.
- Shows total price and allows for quantity adjustment or removal of products.
- Proceed to checkout button.

6. Authentication:
- Sign In and Sign Out functionality.
- Display a welcome message if the user is signed in.

## Example Directory Structure

```
my-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── logo.png
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── NavBar.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── UserMenu.tsx
│   │   │
│   │   ├── Product/
│   │   │   ├── ProductList.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   └── ProductReviews.tsx
│   │   │
│   │   ├── Cart/
│   │   │   ├── Cart.tsx
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── Checkout.tsx
│   │   │
│   │   └── Auth/
│   │       ├── SignIn.tsx
│   │       ├── SignOut.tsx
│   │       └── AuthForm.tsx
│   │
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   └── ProductContext.tsx
│   │
│   ├── hooks/
│   │   ├── useFetchProducts.ts
│   │   ├── useAuth.ts
│   │   ├── useCart.ts
│   │   └── useProduct.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProductPage.tsx
│   │   ├── CartPage.tsx
│   │   └── SignInPage.tsx
│   │
│   ├── styles/
│   │   └── main.css
│   │
│   ├── utils/
│   │   ├── api.ts
│   │   ├── formatPrice.ts
│   │   └── helpers.ts
│   │
│   ├── App.tsx
│   └── index.tsx
│
├── .env
├── tsconfig.json
├── vite.config.ts
└── package.json
```
## React Code Example to Fetch Products:

```javascript
// useFetchProducts.js
import { useState, useEffect } from 'react';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useFetchProducts;
```

## Product List Component:

```javascript

// ProductList.jsx
import React from 'react';
import useFetchProducts from './hooks/useFetchProducts';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, loading } = useFetchProducts();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
```
## Component Breakdown
- Header: Contains sub-components for navigation, search, and user menu.
- Product: Components for listing products, viewing details, and reviews.
- Cart: Components to manage the cart, display cart items, summarize, and handle checkout.
- Auth: Components for sign-in, sign-out, and authentication forms.

Contexts
- AuthContext: Manages user authentication state.
- CartContext: Manages the cart state.
- ProductContext: Manages the product state.

Hooks
- useFetchProducts: Custom hook for fetching product data.
- useAuth: Custom hook for authentication-related logic.
- useCart: Custom hook for cart operations.
- useProduct: Custom hook for product operations.

Pages
- Home: Home page displaying the product list.
- ProductPage: Detailed page for individual products.
- CartPage: Page displaying the user’s cart.
- SignInPage: Page for user sign-in.

Utilities
- api.ts: Handles API calls.
- formatPrice.ts: Utility for formatting prices.
- helpers.ts: Miscellaneous helper functions.

Example Custom Hook (useFetchProducts.ts)

```typescript
import { useState, useEffect } from 'react';
import { Product } from '../types';

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useFetchProducts;
```
Example Context (CartContext.tsx)
```typescript
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { CartItem } from '../types';

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: string;
  payload: any;
}

const initialState: CartState = {
  items: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter((item) => item.id !== action.payload.id) };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
```
