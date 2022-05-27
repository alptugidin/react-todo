import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Todos2 from "./components/Todos2";
const App = () => {
	return (
		<Todos2/>
	)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App/>
);
