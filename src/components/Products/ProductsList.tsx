import React, { useState } from 'react'

interface ProductsListProps {

}

const initialProducts = [
  { title: 'Escape from Tarkov', price: 60, id: 'eft'},
  { title: 'Hunt: Showdown', price: 70, id: 'hunt'},
  { title: 'Hell Let Loose', price: 50, id: 'hll'}
]

interface Product {
  title: string,
  price: number,
  id: string
}

const ProductsList: React.FC<ProductsListProps> = ({}) => {

    const [products, setProducts] = useState<Product[]>(initialProducts)

    return (
      <div>
        <label htmlFor="">
          {products.map((product) => 
            <div key={product.id}>
              <span>{product.title} : ${product.price}</span>
            </div>
          )}
        </label>

        <button onClick={() => setProducts(prevProducts => [{
          title: 'half life',
          price: 100,
          id: 'h1'
        }, ...prevProducts])}>
          Add a Game
        </button>
      </div>
    );
}

export default ProductsList