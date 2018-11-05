import React from 'react';

const NewQuote = (props) => {
    return (
        <button id="new-quote"
            type="button"
            className="btn btn-primary"
            onClick={props.fetchQuote}>
            New quote
      </button>
    );
};

export default NewQuote;