import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeQuote } from '../actions/quoteActions';
import FetchingQuote from './FetchingQuote';
import NewQuote from './NewQuote';
import ShareQuote from './ShareQuote';
import ViewQuote from './ViewQuote';

// react
class RandomQuoteMachine extends Component {
	constructor(props) {
		super(props);
		this.fetchQuote = this.fetchQuote.bind(this);
	}

	componentDidMount() {
		this.props.fetchQuote();
	}

	fetchQuote() {
		this.props.fetchQuote();
	}

	render() {
		const { quote, fetchQuote } = this.props;
		let content;
		if (this.props.fetching) {
			content = <FetchingQuote />;
		} else {
			content = <div>
				<ViewQuote quote={quote} />
				<NewQuote fetchQuote={fetchQuote} />
				<ShareQuote quote={quote} />
			</div>;
		}
		return (
			<div id="quote-box" className="container">
				<div className="row">
					<div className="col-6 offset-3 jumbotron p-5 mt-5">
						{content}
					</div>
				</div>
			</div>
		);
	}
}

RandomQuoteMachine.propTypes = {
	quote: PropTypes.object,
	fetchQuote: PropTypes.func
}

// react-redux
const mapStateToProps = (state) => {
	return {
		quote: state.quote,
		fetching: state.fetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchQuote: () => {
			dispatch(changeQuote());
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps)(RandomQuoteMachine);
