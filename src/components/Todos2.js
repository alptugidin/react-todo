import {useState} from "react";
import Form2 from "./Form2";
import List2 from "./List2";

import React from "react";

const Todos2 = () => {
	const [activities, setActivites] = useState([
		{todo: "Code furiously", done: false},
		{todo: "Promote Mavo", done: false},
		{todo: "Give talks", done: false},
		{todo: "Write tutorials", done: false},
		{todo: "Have a life!", done: false},
	])

	const [select, setSelect] = useState("all")

	const menuButton = (e) => {
		const choice = e.target.id
		setSelect(choice)
		document.querySelectorAll(".menu").forEach(btn => {
			if (btn.id === choice) {
				btn.classList.add("active-button")
			} else {
				btn.classList.remove("active-button")
			}
		})
	}


	return (
		<React.StrictMode>

			<div className={"w-[700px] bg-white rounded-lg ml-[calc(calc(100%_-_700px)/2)] mt-20"}>
				<Form2 activities={activities} setActivity={setActivites}/>
				<List2 activities={activities} setActivity={setActivites} selected={select}/>
				<div className={"flex flex-row p-2"}>
					<div className={"basis-1/4  flex justify-start"}>
						<p className={"text-gray-700"}>0 items left</p>
					</div>
					<div className={"basis-1/2 flex justify-around"}>
						<button onClick={menuButton} id="all"
								className={"menu border border-gray-400 rounded-lg px-3 active-button"}>All
						</button>
						<button onClick={menuButton} id="active"
								className={"menu border border-gray-400 rounded-lg px-3"}>Active
						</button>
						<button onClick={menuButton} id="completed"
								className={"menu border border-gray-400 rounded-lg px-3"}>Completed
						</button>
					</div>
					<div className={"basis-1/4 flex justify-end"}>
						<button className={"border border-red-100 bg-red-500 text-white rounded-lg px-3"}>
							Clear Completed
						</button>
					</div>
				</div>
			</div>
		</React.StrictMode>
	)
}


export default Todos2