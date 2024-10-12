"use client";
// app/cart/page.tsx
import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const initialCart: Product[] = [
  { id: 1, name: 'Product 1', price: 29.99, quantity: 2, image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 19.99, quantity: 1, image: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', price: 39.99, quantity: 3, image: '/images/product3.jpg' },
];

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>(initialCart);

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between">
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-500">Price: ${product.price.toFixed(2)}</p>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                    className="w-16 p-1 border border-gray-300 rounded mt-2"
                  />
                </div>
                <button
                  onClick={() => removeItem(product.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right">
              <p className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        )}
    </div>
  );
};

export default CartPage;
