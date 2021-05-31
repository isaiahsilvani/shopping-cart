import React from 'react'

interface ProductsListProps {

}

const initialProducts = [
  { title: 'Escape from Tarkov', price: 60, id: 'eft'},
  { title: 'Hunt: Showdown', price: 70, id: 'hunt'},
  { title: 'Hell Let Loose', price: 50, id: 'hll'}
]

const ProductsList: React.FC<ProductsListProps> = ({}) => {
    return (
      <div>
        <label htmlFor="">
          {initialProducts.map((product) => 
            <div key={product.id}>
              <span>{product.title} : ${product.price}</span>
            </div>
          )}
        </label>
      </div>
    );
}

export default ProductsList