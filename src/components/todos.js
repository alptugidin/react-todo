import {useEffect, useState} from "react";
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


	const initialLen = activities.filter(e => e.done === false).length
	const [len, setLen] = useState(initialLen)

	const update = (e) => {
		activities.map(obj => {
			if (obj.todo === e) {
				obj.done = !obj.done
			}
		})
		const arr = activities.filter(act => act.done === false).length
		setLen(arr)

		//cond güncellemesi

	}


	const remove = (act) => {
		const arr = activities.filter(e => e.todo !== act)
		setActivites(arr)
		setLen(arr.length)
	}


	const [condition, setCondition] = useState("all")
	const [showingArr, setShowingArr] = useState(activities)


	const menuButton = (e) => {
		const choice = e.target.id
		document.querySelectorAll(".menu").forEach(btn => {
			if (btn.id === choice) {
				btn.classList.add("active-button")
			} else {
				btn.classList.remove("active-button")
			}
		})

		if (choice === "all") {
			setCondition("all")
		} else if (choice === "active") {
			setCondition("active")
		} else {
			setCondition("completed")
		}

	}


	return (
		<div className={"w-[700px] bg-white rounded-lg ml-[calc(calc(100%_-_700px)/2)] mt-20"}>

			<Form addActivities={setActivites} activities={activities}/>
			<List activities={activities} update={update} remove={remove} sendLen={setLen} condition={condition} showingArr={showingArr}/>
			<div className={"flex flex-row p-2"}>
				<div className={"basis-1/4  flex justify-start"}>
					<p className={"text-gray-700"}>{len} items left</p>
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
					<button className={"border border-red-100 bg-red-500 text-white rounded-lg px-3"}>Clear Completed
					</button>
				</div>
			</div>
		</div>
	)
}


export default Todos