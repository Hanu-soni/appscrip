import React from 'react'
import productsData from './data';
import ProductCard from './productcard'

const proFilter = () => {
    const rowsData = [
        { name: 'IDEAL FOR', items: ['item1', 'item2'] },
        { name: 'CATEGORY', items: ['category1', 'category2'] },
        { name: 'COLOR', items: ['color1', 'color2'] },
        { name: 'SIZE', items: ['size1', 'size2'] },
        { name: 'BRAND', items: ['brand1', 'brand2'] },
        { name: 'PRICE RANGE', items: ['range1', 'range2'] },
        { name: 'RATING', items: ['rating1', 'rating2'] },
        { name: 'SALE', items: ['sale1', 'sale2'] },
        { name: 'MATERIAL', items: ['material1', 'material2'] },
        // Add more rows as needed
      ];
    
      return (

        <div className='d-flex flex-row'>
            {/* //filter section */}
        <section style={{width:"25%"}} className=" d-flex vh-60 p-3">
          <div className="w-25 d-none d-md-block">
            {rowsData.map((row, index) => (
              <div key={index} className="mb-3">
                <strong>{row.name}</strong>
                <select className="form-control">
                  <option>All</option>
                  {row.items.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </section>
        
        {/* product section */}
        <section style={{width:"75%"}} className="bg-light w-75 w-100-sm p-3">
        <div className="row">
          {productsData.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <ProductCard name={product.name} image={product.image} />
            </div>
          ))}
        </div>
      </section>
        </div>
      );
}

export default proFilter