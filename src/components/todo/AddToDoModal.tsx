import { Button } from "../ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddTodosMutation } from "@/redux/api/api";
// import { addTodo } from "@/redux/features/todoSlice";
// import { useAppDispatch } from "@/redux/hook";
import { FormEvent, useState } from "react";

const AddToDoModal = () => {
  const [task,setTask] = useState('')
  const [description,setDescription] = useState('')

  //1. for local state maanagement
  // const dispatch = useAppDispatch();

  //2. for server state management
  // const [actual function, data] = useAddTodosMutation();


  const [addTodo, {isLoading, isError, data}] = useAddTodosMutation();
    console.log({isLoading, isError, data});

  const onSubmit = (e: FormEvent)=>{
    e.preventDefault();
    // console.log({task , description});

    // const randomString = Math.random().toString(36).substring(2, 7);
    const taskDetaills = {
      // id: randomString,
      title: task,
      description: description,
      // priority,
    }

     // for local state maanagement
    // dispatch(addTodo(taskDetaills))

    // for server state managenent
    addTodo(taskDetaills);

  }
    return (
        <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-primary-gradient text-lg font-semibold ">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input onBlur={(e)=>setTask(e.target.value)} id="task"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input onBlur={(e)=>setDescription(e.target.value)} id="description"  className="col-span-3" />
          </div>
          <div className="flex justify-end">
          <DialogClose  asChild>
          <Button  type="submit">Save changes</Button>
        </DialogClose>
          </div>
          
        </form>
        
      </DialogContent>
    </Dialog>
    );
};

export default AddToDoModal;