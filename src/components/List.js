const List = ({activities}) => {




	const handleChange = () => {

	}
	return (
		<ul>
			{activities.map((activity, index) =>
				<li key={index}>
					<input type="text"
						   name="todo"
						   className={"h-[59px] border border-b-[#dbdbdb] w-full outline-none"}
						   onChange={(e) => handleChange(e.target.value)}
						   value={activity.todo}
					/>
				</li>
			)}
		</ul>
	)
}


export default List