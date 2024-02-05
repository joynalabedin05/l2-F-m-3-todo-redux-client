// import { Button } from "../ui/button";
// import { useAppSelector } from "@/redux/hook";
import AddToDoModal from "./AddToDoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";



const TodoContainer = () => {

    // data from local state
    //   const {todos} = useAppSelector((state)=>state.todos)

    //  from server data
    const {data:todos, isLoading} = useGetTodosQuery(null);
    // console.log(data);
    if(isLoading){
        return <p>looding...</p>
    }
    return (
        <div>
            <div className="flex justify-between mb-3">
                
                <AddToDoModal></AddToDoModal>
                <TodoFilter></TodoFilter>
                
            </div>
            <div className="bg-primary-gradient w-full h-full] rounded-xl p-2 space-y-3">
                {/* <div className="bg-white text-2xl font-semibold flex justify-center items-center rounded-md p-5 ">
                    <p>There is no task pending</p>
                </div> */}
                <div className="space-y-3 bg-white p-3 rounded-lg">
                
                {
                    todos?.data?.map((item)=><TodoCard {...item}>                       
                    </TodoCard> )
                }
                </div>
                
            </div>
        </div>
    );
};

export default TodoContainer;