import { filterItems } from './filterItems.js';

describe(filterItems, () => {

    // Returns an array of items that match the filter string provided
    it('should return an array of items that match the filter string provided', () => {
        const products = [
          { title: 'Apple', price: 1 },
          { title: 'Banana', price: 2 },
          { title: 'Orange', price: 3 }
        ];
        const filter = 'an';
        const expected = [
          { title: 'Banana', price: 2 },
          { title: 'Orange', price: 3 }
        ];
    
        const result = filterItems(products, filter);
    
        expect(result).toEqual(expected);
      });



    // Returns an empty array if no items match the filter string provided
    it('should return an empty array if no items match the filter string provided', () => {
        const products = [
          { title: 'Apple', price: 1 },
          { title: 'Banana', price: 2 },
          { title: 'Orange', price: 3 }
        ];
        const filter = 'watermelon';
        const expected = [];
    
        const result = filterItems(products, filter);
    
        expect(result).toEqual(expected);
      });
    
})



