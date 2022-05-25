import List from "./List";
import {useState} from "react";

const Todos = () => {


	const [activities, setActivites] = useState([
			"Code furiously",
			"Promote Mavo",
			"Give talks",
			"Write tutorials",
			"Have a life!"
		]
	)


	const handleChange = (e) => {

	}

	return (
		<div className={"w-[500px] h-[300px] bg-white rounded-lg ml-[calc(calc(100%_-_500px)/2)] mt-20"}>
			<form action="" className={"relative"}>
				<img src="/dd.svg" alt="" className={"absolute left-2 top-6 w-[18px]"}/>
				<input placeholder="What needs to be done?"
					   className={"w-full outline-none h-[60px] shadow shadow-md hover:shadow-sm transition-all text-2xl rounded-t-lg pl-10"}/>
			</form>

			<ul>
				{activities.map((e, index) =>
					<List key={index} activity={e} handleChange={() => handleChange(e)} />
				)}
			</ul>

		</div>
	)
}


// {/*{activities.map((e, index) =>*/}
// {/*	<li key={index} className={""}>*/}
// {/*		<input type="text" value={e}*/}
// {/*			   className={"h-[59px] border border-b-[#dbdbdb] w-full outline-none"}*/}
// {/*			   onChange={handleChange}*/}
// {/*		/>*/}
// {/*	</li>*/}
// {/*)}*/}

export default Todos