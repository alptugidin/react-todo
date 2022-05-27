import Check from "./Check";

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
		if (selected === "all"){
			return e
		}else if(selected === "active"){
			return e.done === false
		}else{
			return e.done === true
		}
	}

	return (
		<ul>
			{activities.filter(e => listCondition(e)).map((activity, index) =>
				<li key={index} className={"li-class h-[59px] border border-b-[#dbdbdb] w-full outline-none"}>

					<div className={"relative"}>
						<div onClick={() => setTick(activity)}>
							<Check isDone={activity.done}/>
						</div>
						<span id={"c-span"}></span>
						<label htmlFor=""
							   className={"transition-all text-2xl leading-[50px] pl-[45px]" + (activity.done ? " line-through text-gray-300" : "")}>{activity.todo}</label>
						<button id={"remove"}
								className={"absolute right-2 top-2 rounded-lg cursor-pointer py-1 px-3"}
								onClick={() => remove(activity.todo)}>
						</button>
					</div>

				</li>
			)}
		</ul>
	)

}


export default List