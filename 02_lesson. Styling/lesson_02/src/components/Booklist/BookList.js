import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
console.log(styled);



let List = styled.ul`
    margin: 0;
    padding: 0;
    outlaine: '1px solid green';
    color: red
`;




let ListItem = styled.li`
    background: yellow;
    margin: 10px
`;


function BookList({ books }) {
    return (
        <>
            <List>
                {books.map(({ id, name }) => (
                    <ListItem key={id}>{name}</ListItem>)
                )}
            </List>
        </>
    );
}



// function BookList({ books }) {
//     return (
//         <ul>
//             { books.map(({ id, name }) => (
//                 <li key={id}>{name}</li>)
//             )}
//         </ul>
//     );
// }



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