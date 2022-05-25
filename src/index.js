import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Todos from "./components/Todos";
const App = () => {
	return (
		<Todos/>
	)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App/>
);
