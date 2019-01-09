import classnames from 'classnames';
import { connect } from 'react-redux';
import sentenceCase from 'sentence-case';
import {
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane,
} from 'reactstrap';
import React, { Component } from 'react';
import * as consts from './../../constants';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tab: void 0, // TODO(0xdeafcafe): Make this select first tab when root data has loaded
		};
	}

	componentDidMount() {
		this.props.fetch('', consts.FETCH_ROOTS_SUCCESS);
	}

	switchTab(tab) {
		this.setState({ tab });
	}

	renderRoots() {
		const { roots } = this.props;
		const { tab: activeTab } = this.state;

		if (!roots.payload)
			return null;

		const keys = Object.keys(roots.payload);

		return (
			<div className={'mt-3'}>
				<Nav tabs>
					{keys.map(k => (
						<NavItem key={k}>
							<NavLink
								className={classnames({ active: activeTab === k })}
								onClick={() => this.switchTab(k)}
							>
								{sentenceCase(k)}
							</NavLink>
						</NavItem>
					))}
				</Nav>

				<TabContent activeTab={activeTab}>
					{keys.map(k => (
						<TabPane
							tabId={k}
							key={k}
						>
							<code>{'todo: load resource table'}</code>
						</TabPane>
					))}
				</TabContent>
			</div>
		);
	}

	render() {
		return (
			<div className={'Home'}>
				<h1>{'My little Star Wars app 👾'}</h1>

				{this.renderRoots()}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	roots: state.roots,
});

export default connect(mapStateToProps, (dispatch) => ({
	fetch: (root, returnAction) => dispatch({
		type: consts.FETCH_ROOTS,
		root,
		returnAction,
	}),
})
)(Home);
