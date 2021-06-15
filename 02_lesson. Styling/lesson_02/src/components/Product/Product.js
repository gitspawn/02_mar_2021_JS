import React from 'react';
import PropTypes from 'prop-types';
// import './Product.css';
// import './Product.scss';


// CSS MODULES
import styles from './Product.module.css';
console.log(styles);

// .container 
// .name 
// .qty 
// .awailable 
// .not - awailable




let Product = ({ name, imageUrl, price, qty }) => {
    const isInStock = qty < 50;
    let quantityClases = !isInStock ? styles.awailable : styles.notAwailable;


    return (
        <div className={styles.container}>
            <h3 className={styles.name}> {name}</h3 >
            <img
                src={imageUrl}
                alt='kebab'
                width='400' />
            <p>Price: {price}$</p>
            <p>{qty} left</p>
            <p>
                Quantity: {' '}
                <span className={quantityClases}>
                    {isInStock ? 'Few left' : "In stock"}
                </span>
            </p>
            <button type="button">Add to cart</button>
        </div>
    );
};




// Vanila CSS
// let Product = ({ name, imageUrl, price, qty }) => {
//     const isInStock = qty < 50;
//     // 1. If Else 
//     // const quantityClases = ['Product__qty'];
//     // if (isInStock) {
//     //     quantityClases.push('not-awailable');
//     // } else {
//     //     quantityClases.push('awailable');
//     // }

//     // 2 Ternary
//     // quantityClases.push(isInStock ? 'not-awailable' : 'awailable');

//     // 3 
//     let quantityClases = [
//         'Product__qty',
//         isInStock ? 'not-awailable' : 'awailable'
//     ].join(' ');
//     console.log(quantityClases);
//     // let finalClass = quantityClases.join(' ');
//     return (
//         <div className="Product34">
//             <h3 className="Product__name"> {name}</h3 >
//             <img
//                 src={imageUrl}
//                 alt='kebab'
//                 width='400' />
//             <p>Price: {price}$</p>
//             <p>{qty} left</p>
//             <p>
//                 Quantity: {' '}
//                 {/* <span className={finalClass}>
//                     {isInStock ? 'Few left' : "In stock"}
//                 </span> */}

//                 {/* <span className={quantityClases.join(' ')}>
//                     {isInStock ? 'Few left' : "In stock"}
//                 </span> */}

//                 <span className={quantityClases}>
//                     {isInStock ? 'Few left' : "In stock"}
//                 </span>
//             </p>
//             <button type="button">Add to cart</button>
//         </div>
//     );
// };


// Inline styles
// let styles = {
//     container: { backgroundColor: 'gray', outline: "1px solid black" }
// };


// let Product = ({ name, imageUrl, price, qty }) => {
//     const isInStock = qty < 50;

//     return (

//         // Inline Styles
//         // <div style={{ backgroundColor: 'gray', outline: "1px solid black" }}>
//         // <div style={styles.container}>

//         <div>
//             <h3>{name}</h3>
//             <img
//                 src={imageUrl}
//                 alt='kebab'
//                 width='400' />
//             <p>Price: {price}$</p>
//             <p>{qty} left</p>
//             <p>
//                 Quantity:
//                 <span style={{ color: isInStock ? 'red' : 'green' }}>
//                     {isInStock ? 'Few left' : "In stock"}
//                 </span>
//             </p>

//             <button type="button">Add to cart</button>
//         </div >
//     );
// };





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
