import { PropTypes } from 'prop-types';
import React from 'react';

const ShareQuote = (props) => {
	const { quote } = props;
	return (
		<div className="pt-2">
			<a className="btn btn-secondary twitter-share-button"
				role="button"
				aria-pressed="true"
				id="tweet-quote"
				href={`https://twitter.com/intent/tweet?text=${quote.text}-${quote.author}`}
				target="_blank"
				rel="noopener noreferrer">
				Share quote
			</a>
		</div>
	);
};

ShareQuote.propTypes = {
	quote: PropTypes.object
}

export default ShareQuote;