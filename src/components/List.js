// import Check from "./Check";
import {useEffect, useState} from "react";

const List = ({activities, update, remove, condition}) => {

	const [isClicked, setIsClicked] = useState(true)


	const clickEvent = (todo) => {
		update(todo)
		setIsClicked(!isClicked)
		const arr = activities.filter(e => e.done === false)
		if (condition === "active"){
			setTimeout(() => {
				const arr = activities.filter(e => e.done === false)
				setShowingArr(arr)
			},300)
		}else if (condition === "completed"){
			const arr = activities.filter(e => e.done === true)
			setShowingArr(arr)
		}

	}

	const [showingArr, setShowingArr] = useState(activities)

	useEffect(() => {

		if (condition === "all"){
			setShowingArr(activities)
		}else if(condition === "active"){
			const arr = activities.filter(e => e.done === false)
			setShowingArr(arr)
		}else{
			const arr = activities.filter(e => e.done === true)
			setShowingArr(arr)
		}

	},[condition])


	return (
		<ul>
			{showingArr.map((activity, index) =>
				<li key={index} className={"li-class h-[59px] border border-b-[#dbdbdb] w-full outline-none"}>

					<div className={"relative"}>
						<div onClick={() => clickEvent(activity.todo)}>
							{/*<Check isDone={activity.done}/>*/}
						</div>
						<span id={"c-span"}></span>
						<label htmlFor=""
							   className={"text-2xl leading-[50px] pl-[45px]" + (activity.done ? " line-through text-gray-300" : "")}>{activity.todo}</label>
						<button id={"cancel"}
								onClick={() => remove(activity.todo)}
								className={"absolute right-2 top-2 rounded-lg cursor-pointer py-1 px-3"}>
						</button>
					</div>

				</li>
			)}
		</ul>
	)
}


export default List