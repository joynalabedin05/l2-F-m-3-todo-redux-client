// import { Button } from "../ui/button";
// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddToDoModal from "./AddToDoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";



const TodoContainer = () => {
  const [priority, setPriority] = useState("");

    // data from local state
    //   const {todos} = useAppSelector((state)=>state.todos)

    //  from server data
    const {data:todos, isLoading} = useGetTodosQuery(priority, 
        //{pollingInterval: 1000}
        );
    // console.log(data);
    if(isLoading){
        return <p>looding...</p>
    }
    return (
        <div>
            <div className="flex justify-between mb-3">
                
                <AddToDoModal></AddToDoModal>
                <TodoFilter
                    priority={priority}
                    setPriority={setPriority}
                ></TodoFilter>
                
            </div>
            <div className="bg-primary-gradient w-full h-full] rounded-xl p-2 space-y-3">
                {/* <div className="bg-white text-2xl font-semibold flex justify-center items-center rounded-md p-5 ">
                    <p>There is no task pending</p>
                </div> */}
                <div className="space-y-3 bg-white p-3 rounded-lg">
                
                {
                    todos?.data?.map((item)=><TodoCard key={item._id} {...item}>                       
                    </TodoCard> )
                }
                </div>
                
            </div>
        </div>
    );
};

export default TodoContainer;