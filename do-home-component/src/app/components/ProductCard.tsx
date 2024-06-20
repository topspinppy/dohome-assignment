/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Product } from "../types/product.type";
import Favorite from "./Favorite";

interface IProductCardProps {
  dataSource: Product;
}

function ProductCard(props: IProductCardProps) {
  const { dataSource } = props;
  return (
    <div
      className="rounded-lg shadow border border-gray-100"
      style={{ maxWidth: "400px", height: "auto" }}
    >
      <div className="flex justify-center bg-red-300 m-4">
        <img
          src={dataSource?.images[0]}
          alt="mock"
          className="object-contain h-48 w-96"
        />
      </div>
      <div className="flex justify-start m-4">
        <span className="truncate">{dataSource?.title}</span>
      </div>
      <div className="flex justify-start m-4 items-center">
        {dataSource.discountPercentage !== 0 && (
          <span className="text-red-500 font-bold mr-1 text-lg">
            {dataSource.discountPercentage.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}
          </span>
        )}
        <span className={dataSource.discountPercentage !== 0 ? 'line-through text-gray-400 text-sm' : 'text-base'}>{dataSource?.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</span>
        <span className="text-gray-400 ml-2">/ชิ้น</span>
      </div>

      <div className="flex justify-start m-4 items-center">
        <Favorite width="20" height="20" />
      </div>
    </div>
  );
}

export default ProductCard;
