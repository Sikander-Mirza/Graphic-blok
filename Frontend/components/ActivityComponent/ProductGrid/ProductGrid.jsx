import React from 'react';
import './ProductGrid.css'; // Optional for custom styles

const products = [
  { id: 1, name: 'Product Name', price: '$20.00' },
  { id: 2, name: 'Product Name', price: '$20.00' },
  { id: 3, name: 'Product Name', price: '$20.00' },
  { id: 4, name: 'Product Name', price: '$20.00' },
  { id: 5, name: 'Product Name', price: '$20.00' },
  { id: 6, name: 'Product Name', price: '$20.00' },
  { id: 7, name: 'Product Name', price: '$20.00' },
  { id: 8, name: 'Product Name', price: '$20.00' },
];

const ProductGrid = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Product</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <div className="card-img-top bg-light" style={{ height: '200px' }}>
                {/* Image Placeholder */}
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
