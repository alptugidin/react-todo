import {useEffect, useState} from "react";

const Check2 = ({isDone}) => {


	return (
		<div
			 className={"h-[30px] w-[30px] border border-gray-200 hover:border-gray-500 cursor-pointer transition-all rounded-full absolute left-2 top-[13px]"}>
			<img src="/check-mark.svg" className={"w-[20px] absolute left-1 top-1.5" + (isDone ? "" : " hidden")}
				 alt=""/>
		</div>
	)
}

export default Check2
