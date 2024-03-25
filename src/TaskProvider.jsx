import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const TaskContextApi = createContext();

// to get the data from localStorage

let getLocalItems = () => {
  let lists = localStorage.getItem("lists");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const TaskProvider = ({ children }) => {
  let [task, setTask] = useState(getLocalItems());

  const addTask = (title, description, category) => {
    setTask([...task, { title, description, category, id: uuidv4() }]);
  };

  let [state, setState] = useState({
    title: "",
    description: "",
    category: "",
  });

  // To add task in localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(task));
  }, [task]);

  let [selective,setSelective] = useState({
    selectedCategory : "all"
  })
   
  let handleCategory = (e)=>{
     let {name, value} = e.target;
     setSelective({[name]:value})
     setTask(task)
  }

  let handleDelete = (id)=>{
         let filteredItem = task.filter(item=>item.id!==id)
         setTask(filteredItem)
  }
  let handleUpdate = (id)=>{
    let filterItem = task.filter(item=> item.id!==id)
    console.log(filterItem);
    let editNote = task.find(item=> item.id ==id)
    console.log(editNote);
    setTask(filterItem)
     setState(editNote)
  }

  return (
    <TaskContextApi.Provider value={{ state, setState, addTask, task, selective, handleCategory ,handleDelete,handleUpdate}}>
      {children}
    </TaskContextApi.Provider>
  );
};
export default TaskProvider;
