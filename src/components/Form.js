import {useState} from "react";

const Form = ({setActivity, activities}) => {
	const [form, setForm] = useState({todo: "", done: false})

	const submitActivity = (e) => {
		const duplicateCheck = activities.find(e => e.todo === form.todo)
		e.preventDefault()
		if (form.todo === "" || duplicateCheck !== undefined) {
			return false
		}


		setActivity([...activities, form])
		setForm({todo: "", done: false})
	}

	const update = (e) => {
		setForm({todo: e.target.value, done: false})
	}


	const [makeAll, setMakeAll] = useState(true)

	const makeAllCompleted = () => {

		const arr = activities.map(e => {
			e.done = makeAll
			return e
		})
		setMakeAll(!makeAll)
		setActivity(arr)
	}

	return (
		<form action="" className={"relative"} onSubmit={submitActivity}>
			<img onClick={makeAllCompleted} src="/dd.svg" alt=""
				 className={"absolute left-3.5 top-6 w-[18px] cursor-pointer"}/>
			<input id={"main-input"}
				   placeholder="What needs to be done?"
				   autoComplete={"off"}
				   className={"w-full outline-none h-[60px] shadow shadow-md hover:shadow-sm transition-all text-2xl rounded-t-lg pl-[45px]"}
				   name="todo"
				   onChange={update}
				   value={form.todo}
			/>
		</form>

	)
}

export default Form

