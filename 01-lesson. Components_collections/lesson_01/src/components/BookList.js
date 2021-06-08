import React from 'react';
import PropTypes from 'prop-types';


// function BookList({ books }) {
//     return (
//         <ul>
//             { books.map((book) => (
//                 <li key={book.id}>{book.name}</li>)
//             )}
//         </ul>
//     );
// }


function BookList({ books }) {
    return (
        <ul>
            { books.map(({ id, name }) => (
                <li key={id}>{name}</li>)
            )}
        </ul>
    );
}



// PropTypes
// optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
// optionalObjectWithStrictShape: PropTypes.exact({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.isRequired
// }),






BookList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default BookList;