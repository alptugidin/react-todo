import Check from "./Check";
import {createRef, useRef, useState} from "react";

const List = ({activities, setActivity, selected}) => {

	const remove = (activity) => {
		const arr = activities.filter(e => e.todo !== activity)
		setActivity(arr)
	}


	const setTick = (act) => {
		const arr = activities.map(e => {
			if (e.todo === act.todo) {
				e.done = !e.done
				return e
			} else {
				return e
			}
		})
		setActivity(arr)
	}


	const listCondition = (e) => {
		if (selected === "all") {
			return e
		} else if (selected === "active") {
			return e.done === false
		} else {
			return e.done === true
		}
	}


	const [value, setValue] = useState("")

	const updateValue = (e) => {
		setValue(e.target.value)
	}




	const edit = (e) => {

		//
		// const innerText = e.target.innerText
		// const input = e.target.parentNode.childNodes[3].firstChild
		//
		// if (editMode === true) {
		// 	input.classList.toggle("hidden")
		// 	input.value = innerText
		// 	input.select()
		// }

	}

	const handleSubmilt = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<ul>
				{activities.filter(e => listCondition(e)).map((activity, index) =>
					<li key={index} className={"li-class h-[59px] w-full"}>

						<div className={"relative"}>
							<div onClick={() => setTick(activity)}>
								<Check isDone={activity.done}/>
							</div>
							<span id={"c-span"}></span>
							<label onClick={edit}
								   className={"transition-all text-2xl leading-[58px] pl-[45px]" + (activity.done ? " line-through text-gray-300" : "")}>{activity.todo}
							</label>
								<form onSubmit={handleSubmilt}>

								<input type="text"
									   className={"hidden z-50 absolute left-0 w-full pl-[45px] text-2xl h-[58px] outline-none"}
									   value={value}
									   onChange={updateValue}
									   id={`input${index}`}

								/>
								</form>
							<button id={"remove"}
									className={"absolute right-2 top-2 rounded-lg cursor-pointer py-1 px-3"}
									onClick={() => remove(activity.todo)}>
							</button>
						</div>

					</li>
				)}
			</ul>

		</>
	)

}


export default List