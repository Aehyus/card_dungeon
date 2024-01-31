import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useFetchProducts, fetchProducts } from '../hooks/useFetchProducts.js'
import { increaseSearchedItems, setDiscoveredItems } from '../redux/manageDiscoveredItems.js';
import { filterItems } from '../utils/filterItems.js';
import Card from '../components/Card.jsx'
import PageButtons from '../components/PageButtons.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';


export default function Home() {

  const pageLimit = 3
  const dispatch = useDispatch();
  const { items, searchedItemsNum } = useSelector(state => state.manageDiscoveredItems)

  const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  // timer is just to simulate slow loading of images
  const [timerEnded, setTimerEnded] = useState(false);

  const { data } = useFetchProducts(searchedItemsNum)

  //   const { mutateAsync } = useMutation({
  //     mutationFn: searchNewItem()
  //   })

  useEffect(() => {

    setTimeout(() => {
      setTimerEnded(true)
    }, 3000)

    // there might be an inbuilt function in useQuery
    // that lets you initialize things other than code below
    foundItems()

  }, [])


  function getItemsUpToLimit(array, limit, pageNumber) {
    return array.slice((pageNumber - 1) * limit, limit * pageNumber);
  }

  async function foundItems() {
    dispatch(setDiscoveredItems(await fetchProducts(searchedItemsNum)));
  }

  async function findNewItems(searchNum) {
    dispatch(setDiscoveredItems(await fetchProducts(searchedItemsNum + searchNum)));
    dispatch(increaseSearchedItems(searchNum));

    // want to make it so that i wont need to call explicitly the setFunction
    // therefor im trying to make it so that useQuery handles it
    // queryClient.invalidateQueries(["items"])
  }


  return (
    <div className='mainPanel'>

      <h1>Welcome to the MejPeyk Store</h1>
      <h2 className=''>Username</h2>
      <input type="text" placeholder="Username"></input>
      <h2 className=''>Products</h2>

      <input className='product__input' type="text" placeholder="Search Item" onChange={event => setFilter(event.target.value)}></input>

      <button onClick={() => findNewItems(1)}>Search New Item</button>

      <ErrorBoundary fallback={<h1>Something went wrong</h1>}>

        <PageButtons productsLength={filterItems(items, filter).length} limit={pageLimit} setPageNumber={setPageNumber}></PageButtons>

        <div className='item__list'>{getItemsUpToLimit(filterItems(items, filter), pageLimit, pageNumber).map((item, index) => {
          return <Card key={index} content={item} timerEnded={timerEnded}></Card>
        })}</div>

      </ErrorBoundary>
    </div>
  )
}

