
import { useQuery } from 'react-query';


export const useFetchProducts = (searchedItemsNum) => {

  return useQuery({
      queryKey: ["items", {searchedItemsNum}],
      queryFn: () => fetchProducts(searchedItemsNum)
    })
}

export const fetchProducts = async (searchedItems) => {

  const response = await fetch(`https://dummyjson.com/products?limit=${searchedItems}`)
  const data = await response.json()

  return data.products

}
