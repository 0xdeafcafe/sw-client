import classnames from 'classnames';
import { fetchRoots } from '../actions';
import sentenceCase from 'sentence-case';
import {
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane,
} from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch();
	const [tab, setTab] = useState(void 0);
	const roots = useSelector(state => state.roots);

	useEffect(() => {
		dispatch(fetchRoots());
	}, [dispatch]);

	const keys = Object.keys(roots.payload || {});

	return (
		<div>
			<h1>{'My little Star Wars app 👾'}</h1>

			{roots.payload && (
				<div className={'mt-3'}>
					<Nav tabs>
						{keys.map(k => (
							<NavItem key={k}>
								<NavLink
									className={classnames({ active: tab === k })}
									onClick={() => setTab(k)}
								>
									{sentenceCase(k)}
								</NavLink>
							</NavItem>
						))}
					</Nav>

					<TabContent activeTab={tab}>
						{keys.map(k => (
							<TabPane
								key={k}
								tabId={k}
							>
								<code>{'todo: load resource table'}</code>
							</TabPane>
						))}
					</TabContent>
				</div>
			)}
		</div>
	);
};

export default Home;
