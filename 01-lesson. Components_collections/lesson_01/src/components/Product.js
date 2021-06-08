import React from 'react';
import PropTypes from 'prop-types';


let Product = ({ name, imageUrl, price, qty }) => {
    // let { name, imageUrl, price } = props;
    return (
        <div>
            <h3>{name}</h3>
            <img
                src={imageUrl}
                alt='kebab'
                width='400' />
            <p>Price: {price}$</p>
            <p>{qty} left</p>
            <p>{qty < 50 ? 'Few left' : "In stock"}</p>
            <button type="button">Add to cart</button>
        </div>
    );
};


// Default ptops
Product.defaultProps = {
    imageUrl: 'https://media.istockphoto.com/photos/3d-word-oops-picture-id1067573454?s=612x612'
};


// PropTypes
Product.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};


export default Product;
