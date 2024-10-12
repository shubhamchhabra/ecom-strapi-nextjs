"use client";
// app/products/[id]/page.tsx
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Rating from "@/app/components/Rating";
import Image from "next/image";
import { Product } from "@/app/types/Product";

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const documentId = params?.id;
  const baseUrl = "http://localhost:1337";
  useEffect(() => {
    if (!documentId) return;

    async function fetchProduct() {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}/api/products/${documentId}?populate=*`);
        if (!response.ok) throw new Error("Product not found");
        const res = await response.json();
        setProduct(res?.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        router.push("/products"); // Redirect if the product is not found
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [documentId, router]);
  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <Image
          src={`${baseUrl}${product?.Image?.url}`}
          alt={product?.Name}
          className="w-full md:w-1/2 h-auto object-cover"
        />
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl font-bold">{product.Name}</h1>
          <Rating initialRating={product.Rating} totalStars={5} />
          <p className="mt-2 text-gray-600">${product.Price.toFixed(2)}</p>
          <p className="mt-4">{product.Description}</p>
        </div>
      </div>
    </main>
  );
}
