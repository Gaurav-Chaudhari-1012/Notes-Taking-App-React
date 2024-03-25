import React, { useContext } from "react";
import { TaskContextApi } from "./TaskProvider";

const DisplayNotes = () => {
  let { selective, handleCategory ,task, handleDelete, handleUpdate} = useContext(TaskContextApi);
  console.log(selective);

  let { selectedCategory } = selective;

  return (
    <main className="displaySection">
      <section className="selectedNotes">
        <div
          className="selectDisplayBlock"
          name="selectedCategory"
          value={selectedCategory}
          onChange={handleCategory}
        >
          <label htmlFor="">Select the category</label>
          <input type="radio" name="selectedCategory" value="all" />
          <span>All</span>
          <input type="radio" name="selectedCategory" value="general" />
          <span>General</span>
          <input type="radio" name="selectedCategory" value="technical" />
         <span> Technical</span>
          <input type="radio" name="selectedCategory" value="official" />
        <span>  Official</span>
        </div>
         
         <main className="displayBlock">
          <div className="displayContent">
            {task.length ==0 ? "Loading....."  : task.map((value)=>{
              return selectedCategory== "all" ? (
                <div className="output" key={value.id}>
                  <h1 className="outputVal">Title: {value.title}</h1>
                  <p className="outputVal">Description : {value.description}</p>
                  <p className="outputVal">Category : {value.category}</p>
                  <div className="btnContainer">
                    <button className="btn" onClick={()=>handleUpdate(value.id)}>Update</button>
                    <button className="btn" onClick={()=>handleDelete(value.id)}>Delete</button>
                  </div>
                </div>
              ) : (
                selectedCategory == value.category && (
                  <div className="output" key={value.id}>
                  <h1 className="outputVal">Title: {value.title}</h1>
                  <p className="outputVal">Description : {value.description}</p>
                  <p className="outputVal">Category : {value.category}</p>
                  <div className="btnContainer">
                    <button className="btn" onClick={()=>handleUpdate(value.id)}>Update</button>
                    <button className="btn" onClick={()=>handleDelete(value.id)}>Delete</button>
                  </div>
                </div>
                )
              )
            })}
          </div>
         </main>


      </section>
    </main>
  );
};

export default DisplayNotes;
