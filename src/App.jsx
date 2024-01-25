import { useEffect, useRef, useState } from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx';
import PageButtons from './components/PageButtons.jsx';
import './App.css'

function App() {

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [addedItems, setAddedItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  // timer is just to simulate slow loading of images
  const [timerEnded, setTimerEnded] = useState(false);

  const pageLimit = 3


  useEffect(() => {
    fetchProducts()
    setTimeout(() => {
      setTimerEnded(true)
    }, 3000)
    
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=10`)
    const data = await response.json()

    setProducts(data.products)

  }
  
  function getItemsUpToLimit(array, limit, pageNumber) {
    console.log("Page number: " + pageNumber)
    return array.slice((pageNumber - 1) * limit, limit * pageNumber);
  }

  function filteredItems(products) {
    
    let items = products.filter(item=>item.title.toLowerCase().includes(filter.toLowerCase()))
    return items;
  }

  


  return (
    <>

      <Navbar inventory={addedItems}/>

      <div className='mainPanel'>

        <h1>Welcome to the MejPeyk Store</h1>
        

        <h2 className=''>Username</h2>
          <input type="text" placeholder="Username"></input>
        <h2 className=''>Products</h2>

        <input className='product__input' type="text" placeholder="Search Item" onChange={ event => setFilter(event.target.value) }></input>

        <PageButtons productsLength={filteredItems(products).length} limit={pageLimit} setPageNumber={setPageNumber}></PageButtons>

        <div className='item__list'>{getItemsUpToLimit(filteredItems(products),pageLimit, pageNumber).map(item => {
          return <Card key={item.index} content={item} timerEnded={timerEnded} setAddedItems={setAddedItems} addedItems={addedItems}></Card>
        })}</div>

        

      </div>

    </>
  )
}
export default App


