"use client";

import ProductCard from "./components/ProductCard";
import useFetchProducts from "./hooks/useFetchProducts";

export default function Home() {
  const { dataSource } = useFetchProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-NotoSansThai">
      <div className="grid grid-cols-6 gap-4">
        {dataSource.map((source, index) => {
          return <ProductCard dataSource={source} key={index} />;
        })}
      </div>
    </main>
  );
}
