//Bootstrap the react app into the real DOM
import React from 'react';
import {render,} from 'react-dom'; // DIFF, Patching
import Routes from './app/Routes';
import store from "./app/store";
import { Provider, } from "react-redux"

// Render (virtual dom, real dom)
// store is exposed as context variable by provider
render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.querySelector("#root")
);