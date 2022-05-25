
const List = ({activity, handleChange}) => {

	return (
		<li>
			<input type="text" value={activity}
				   className={"h-[59px] border border-b-[#dbdbdb] w-full outline-none"}
				   onChange={handleChange}
			/>
		</li>
	)
}


export default List