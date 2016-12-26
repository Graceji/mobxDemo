// import SC from 'soundcloud';
// import React, { Component } from 'react';
// import ReactDOM, { render } from 'react-dom';
// import { Provider } from 'mobx-react';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import App from './components/App';
// import Callback from './components/Callback';
// import Stream from './components/Stream';
// import { CLIENT_ID, REDIRECT_URI } from './constants/auth';
// import userStore from './stores/userStore';
// import trackStore from './stores/trackStore';

// SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

// const stores = { userStore, trackStore };

// const routes= {
//   path: '/',
//   component: App,
//   indexRoute: {
//     component: Stream
//   },
//   childRoutes: [
//     {
//       path: '/',
//       component: Stream,
//     },
//     {
//       path: '/callback',
//       component: Callback
//     }

//   ]
// };

// render(
//   <Provider stores={stores}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>, 
//   document.getElementById('app'));

