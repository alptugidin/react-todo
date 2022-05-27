import {useState} from "react";

const Form2 = ({setActivity, activities}) => {
	const [form, setForm] = useState({todo: "", done: false})

	const submitActivity = (e) => {
		e.preventDefault()
		if(form.todo === ""){
			return false
		}

		setActivity([...activities, form])
		setForm({todo: "", done: false})
	}

	const update = (e) => {
		setForm({todo: e.target.value, done: false})
	}

	return (
		<form action="" className={"relative"} onSubmit={submitActivity}>
			<img src="/dd.svg" alt="" className={"absolute left-2 top-6 w-[18px]"}/>
			<input placeholder="What needs to be done?"
				   autoComplete={"off"}
				   className={"w-full outline-none h-[60px] shadow shadow-md hover:shadow-sm transition-all text-2xl rounded-t-lg pl-10"}
				   name="todo"
				   onChange={update}
				   value={form.todo}
			/>
		</form>
	)
}

export default Form2

