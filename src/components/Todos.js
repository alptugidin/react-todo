import {useState} from "react";
import Form from "./Form";
import List from "./List";

const Todos = () => {
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

	const condition = (e) => {
		if (select === "all") {
			return e
		} else if (select === "active") {
			return e.done === false
		} else {
			return e.done === true
		}
	}

	const clearCompleted = () => {
		const arr = activities.filter(e => e.done === false)
		setActivites(arr)
	}


	return (
		<div>
			<p className={"text-8xl text-center mt-10 font-semibold text-red-800 opacity-30"}>todos</p>
			<div className={"relative z-50 w-[700px] shadow shadow-lg bg-white rounded-lg m-auto mt-20"}>
				<Form activities={activities} setActivity={setActivites}/>
				<List activities={activities} setActivity={setActivites} selected={select}/>
				<div className={"flex flex-row p-2"}>
					<div className={"basis-1/4 flex justify-start"}>
						<p className={"text-gray-700"}>{activities.filter(e => condition(e)).length} items left</p>
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
						<button onClick={clearCompleted}
								className={"border border-red-100 bg-red-500 text-white rounded-lg px-3"}>
							Clear Completed
						</button>
					</div>
				</div>
			</div>
			<div className={"bg-white shadow shadow-lg rounded-b-lg w-[690px] h-5 mx-auto mt-[-15px] relative"}></div>
			<div className={"bg-white rounded-b-lg w-[680px] h-5 mx-auto mt-[-15px]"}></div>

		</div>

	)
}


export default Todos