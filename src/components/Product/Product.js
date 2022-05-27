import React from "react";

const Product = (props) => {
  const { img, name, seller, stock, price, category, key } = props.product;
  const { handleClick } = props;
  return (
    <div className="col">
      <div className="card">
        <img className="w-50 h-50 mx-auto" src={img} alt="thumbnail" />
        <div className="card-body">
          <h5 className="card-title">name:{name}</h5>
          <p className="card-text">seller:{seller}</p>
          <p>stock:{stock}</p>
          <h5>price:{price}</h5>
          <p>category:{category}</p>
          <button onClick={() => handleClick(key)} className="btn btn-primary">
            delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
