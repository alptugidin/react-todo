import {useState} from "react";

const Form = ({addActivities, activities}) => {

	const initialState = {todo: ""}
	const [form, setForm] = useState(initialState)

	const handleChange = (e) => {
		setForm({todo: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (form.todo  === ""){
			return false
		}

		addActivities([...activities, form])
		setForm(initialState)
	}

	return (
		<form onSubmit={handleSubmit} action="" className={"relative"}>
			<img src="/dd.svg" alt="" className={"absolute left-2 top-6 w-[18px]"}/>
			<input placeholder="What needs to be done?"
				   autoComplete={"off"}
				   className={"w-full outline-none h-[60px] shadow shadow-md hover:shadow-sm transition-all text-2xl rounded-t-lg pl-10"}
				   name="todo"
				   onChange={handleChange}
				   value={form.todo}
			/>
		</form>

	)
}

export default Form