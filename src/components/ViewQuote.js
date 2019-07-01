import { PropTypes } from 'prop-types';
import React from 'react';

const ViewQuote = (props) => {
	const { quote } = props;
	return (
		<blockquote className="blockquote text-right">
			<p id="text"
				className="mb-0">
				{quote.text}
			</p>
			<footer id="author"
				className="blockquote-footer">
				{quote.author}
			</footer>
		</blockquote>
	)
}

ViewQuote.propTypes = {
	quote: PropTypes.object
}

export default ViewQuote;