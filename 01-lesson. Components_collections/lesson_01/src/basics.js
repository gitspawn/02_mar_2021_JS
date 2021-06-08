import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

// React.createElement(type, [props], [...children])

// let link = React.createElement('a', {
//   href: "https://reactjs.org/",
//   target: '_blanck'
// }, 'React website');


// let image = React.createElement('img', {
//   src: 'https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   alt: 'kebab',
//   width: 400
// });


// let title = React.createElement('h3', null, 'Kebab mangal');
// let price = React.createElement('p', null, 'Price: 15.99$');
// let button = React.createElement('button', { type: "button" }, 'Add to cart');


// let product = React.createElement('div', null, title, image, price, button);
// let product = React.createElement('div', {
//   children: [title, image, price, button]
// });

// console.log("product", product);


// !!!!!!!!!!!!!!!!!! product: props: { children: Array(4); } !!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Render to DOM==================================
// ReactDom.render(link, document.querySelector('#root'));
// ReactDom.render(product, document.querySelector('#root'));


// JSX ===========================================

// let link = React.createElement('a', {
//   href: "https://reactjs.org/",
//   target: '_blanck'
// }, 'React website');
// let link = (<a href="https://reactjs.org/" target="_blanck">React website</a>);



// let image = React.createElement('img', {
//   src: 'https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   alt: 'kebab',
//   width: 400
// });
// let image = (<img src='https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='kebab' width='400' />);


// ReactDom.render(image, document.querySelector('#root'));

// JSX Single parent=========================
// let link = (
// <div>
//   <a href="https://reactjs.org/" target="_blanck">React website</a>
//   <a href="https://www.yahoo.com/" target="_blanck">Yahoo </a>
// </div>

// <>
//   <a href="https://reactjs.org/" target="_blanck">React website</a>
//   <a href="https://www.yahoo.com/" target="_blanck">Yahoo </a>
// </>

// <Fragment>
//   <a href="https://reactjs.org/" target="_blanck">React website</a>
//   <a href="https://www.yahoo.com/" target="_blanck">Yahoo </a>
// </Fragment>

// <React.Fragment>
//   <a href="https://reactjs.org/" target="_blanck">React website</a>
//   <a href="https://www.yahoo.com/" target="_blanck">Yahoo </a>
// </React.Fragment>

// );
// ReactDom.render(link, document.querySelector('#root'));



// let image = React.createElement('img', {
//   src: 'https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   alt: 'kebab',
//   width: 400
// });


// let title = React.createElement('h3', null, 'Kebab mangal');
// let price = React.createElement('p', null, 'Price: 15.99$');
// let button = React.createElement('button', { type: "button" }, 'Add to cart');


// let product = React.createElement('div', null, title, image, price, button);
// let product = React.createElement('div', {
//   children: [title, image, price, button]
// });

// let PoductJsx = (
//   <div>
//     <h3>Kebab mangal</h3>
//     <img
//       src='https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
//       alt='kebab'
//       width='400' />
//     <p>Price: 15.99$</p>
//     <button type="button">'Add to cart'</button>
//   </div>
// );
// ReactDom.render(PoductJsx, document.querySelector('#root'));



// JSX Expretions ====================================================
// let title = 'Kebab mangal';
// let imgUrl = 'https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

// let PoductJsx = (
//   <div>
//     <h3>{title}</h3>
//     <img
//       src={imgUrl}
//       alt='kebab'
//       width='400' />
//     <p>Price: 15.99$</p>
//     {/* <p>{2 + 2}</p> */}
//     <p>{2 < 1 ? 'Kebab' : 'Pizza'}</p>
//     <button type="button">'Add to cart'</button>
//   </div>
// );
// ReactDom.render(PoductJsx, document.querySelector('#root'));


// Components ==================================

// let Poduct = (props) => {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <img
//         src={props.imageUrl}
//         alt='kebab'
//         width='400' />
//       <p>Price: {props.price}$</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// };


let Poduct = ({ name, imageUrl, price }) => {
  // let { name, imageUrl, price } = props;
  return (
    <div>
      <h3>{name}</h3>
      <img
        src={imageUrl}
        alt='kebab'
        width='400' />
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};



const App = () => {
  return (
    <>
      <Poduct
        imageUrl="https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name='Kebab'
        price={20}
      />
      <Poduct
        imageUrl="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name='Pizza'
        price={15.78}
      />
    </>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
