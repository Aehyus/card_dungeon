export const filterItems = (products, filter) => {

    let items = products.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
    return items;
  }
