import { createStore, compose, combineReducers } from 'redux';




export default createStore(
	compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);
