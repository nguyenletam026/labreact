import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { ConfirmProvider } from 'material-ui-confirm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId=//"425822052383-k66s9aba3q1m0kg2supfm3hi2r184ssc.apps.googleusercontent.com"
									"333339726049-lrbj8n4grrbdl2vl91ugr4n2vmk7tf26.apps.googleusercontent.com">
			<BrowserRouter>e
				<ConfirmProvider>
					<App />
				</ConfirmProvider>
			</BrowserRouter>
		</GoogleOAuthProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
