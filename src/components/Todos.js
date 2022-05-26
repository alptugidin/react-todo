import {useEffect, useState} from "react";
import Form from "./Form";
import List from "./List";

const Todos = () => {

	const [activities, setActivites] = useState([
		{todo: "Code furiously"},
		{todo: "Promote Mavo"},
		{todo: "Give talks"},
		{todo: "Write tutorials"},
		{todo: "Have a life!"}
	])

	useEffect(() => {
		console.log(activities)
	}, [activities])

	const handleChange = (e) => {
	}

	return (
		<div className={"w-[500px] h-[300px] bg-white rounded-lg ml-[calc(calc(100%_-_500px)/2)] mt-20"}>

			<Form addActivities={setActivites} activities={activities}/>
			<List activities={activities}/>
		</div>
	)
}


export default Todos