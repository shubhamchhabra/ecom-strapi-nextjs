// app/products/page.tsx
"use client"
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const API_URL = 'https://ecom-strapi-nextjs.onrender.com' || 'http://localhost:1337';
  useEffect(() => {
    // Fetch products from the API (we'll implement this next)
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/products?populate=*`);
        if (!res.ok) {
          notFound(); // Use next/navigation to show a 404 page if the article is not found
        }

        const response = await res.json();
        console.log(response, 'response')
        setProducts(response?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length > 0 && products.map((product) => (
            <Link key={product.id} href={`/products/${product.documentId}`}>
              <div key={product.id} className="border p-4 rounded-lg">
                <Image src={`${API_URL}${product.Image.url}`} alt={product.Name} className="w-full h-40 object-cover" />
                <h2 className="mt-2 text-lg font-medium">{product.Name}</h2>
                <p className="text-gray-600">${product.Price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
