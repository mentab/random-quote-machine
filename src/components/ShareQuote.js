import React from 'react';

const ShareQuote = (props) => {
    return (
        <div className="pt-2">
            <a className="btn btn-secondary twitter-share-button"
                role="button"
                aria-pressed="true"
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${props.quote.text}-${props.quote.author}`}
                target="_blank"
                rel="noopener noreferrer">
                Share quote
            </a>
        </div>
    );
};

export default ShareQuote;