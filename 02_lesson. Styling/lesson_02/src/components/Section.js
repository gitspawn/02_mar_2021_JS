import React from 'react';
import PropTypes from 'prop-types';


function Section({ title, children }) {
    return (
        // <section>
        //     <h1>{title}</h1>
        //     {children}
        // </section>


        <section>

            {/* { null}
            { undefined}
            { false} */}

            {title && <h1>{title}</h1>}
            {children}
        </section>

    );
}


// Default props
Section.defaultProps = {
    title: 'Default title'
};


// PropTypes
Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};



export default Section;