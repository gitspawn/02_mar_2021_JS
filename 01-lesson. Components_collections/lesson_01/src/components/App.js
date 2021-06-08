import React from 'react';
import Product from './Product';
import Section from './Section';
import BookList from './BookList';



// const App = () => {
//     return (
//         <>
//             {/* <Section title="Best bye"> */}
//             <Section>
//                 <Product
//                     // imageUrl="https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//                     name='Kebab'
//                     price={20}
//                     qty={100}
//                 />
//             </Section>
//             <Section title="Favorite products">

//                 {/* {loaded && <Product
//                     imageUrl="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//                     name='Pizza'
//                     price={15.78}
//                 />} */}

//                 <Product
//                     imageUrl="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//                     name='Pizza'
//                     price={15.78}
//                     qty={20}
//                 />

//             </Section>
//         </>
//     );
// };



let favoriteBooks = [
    { id: 1, name: "React" },
    { id: 2, name: "JS" },
    { id: 3, name: "HTML" },
    { id: 4, name: "CSS" },
];

// Collections
const App = () => {
    return (
        <>
            {/* [1,2,3,4,5]
            {[1, 2, 3, 4, 5]}
            {[<h1>1</h1>, <h1>2</h1>, <h1>3</h1>]} */}
            {/* {favoriteBooks.map((book) => (<li>{book.name}</li>))} */}
            <BookList books={favoriteBooks} />
        </>
    );
};



export default App;