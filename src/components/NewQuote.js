import PropTypes from 'prop-types';
import React from 'react';

const NewQuote = (props) => {
	const { fetchQuote } = props;
	return (
		<button id="new-quote"
			type="button"
			className="btn btn-primary"
			onClick={fetchQuote}>
			New quote
	  	</button>
	);
};

NewQuote.propTypes = {
	fetchQuote: PropTypes.func
}

export default NewQuote;