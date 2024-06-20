import axios from "axios";
import { IProductResponse } from "../types/product.type";
import { useQuery } from "react-query";

export interface IProductDataSource {
  productName: string;
  price: number;
  discountPrice: string;
  productImage: string[];
}

async function fetchProducts() {
  const data = await axios.get<IProductResponse>(
    "https://dummyjson.com/products"
  );
  return data.data;
}

function useFetchProducts() {
  const data = useQuery(["fetch-product"], () => fetchProducts(), {
    select: (data) => {
      return {
        ...data,
        products: data.products.map((product, index) => {
          if (index % 2 === 0) {
            return {
              ...product,
              discountPercentage: 0,
            }
          }
          return {
            ...product
          }
        })
      }
    }
  });

  return {
    dataSource: data.data?.products ?? []
  }
}

export default useFetchProducts;
