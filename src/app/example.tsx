// "use client";
// import { useState, useEffect } from "react";
// import Button from "../components/Button";
// import Task from "../components/Task";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [data, setData] = useState([]);
//   const [filteredData, setfilteredData] = useState(data);
//   const [selectedButton, setSelectedButton] = useState("All");

//   const [users, setUsers] = useState([]);
//   const [limit, setLimit] = useState(3);
//   const [page, setPage] = useState(1);
//   const fetchData = async () => {
//     try {
//       const respone = await fetch(
//         `http://localhost:8888/todos?page=${page}&limit=${limit}`
//       );
//       const responseData = await respone.json();
//       setUsers(responseData.data);
//       console.log(responseData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [limit]);

//   const handleAddLimit = () => {};

//   const CountCompleted = data.filter(
//     (task) => task.status === "completed"
//   ).length;

//   const createTask = () => {
//     if (inputValue === "") {
//       alert("Please enter a task!");
//     } else {
//       const newTask = {
//         id: Date.now(),
//         text: inputValue,
//         status: "active",
//       };
//       setData([...data, newTask]);
//       setfilteredData([...data, newTask]);
//       setInputValue("");
//       setSelectedButton("All");
//     }
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       createTask();
//     }
//   };

//   const deleteTask = (id) => {
//     if (window.confirm("Are you sure want to delete this task?")) {
//       const filteredData = data.filter((task) => task.id !== id);
//       setData(filteredData);
//       setfilteredData(filteredData);
//     }
//     setSelectedButton("All");
//   };

//   const toggleStatus = (id) => {
//     const changedData = data.map((task) => {
//       if (task.id === id) {
//         task.status = task.status === "active" ? "completed" : "active";
//         return task;
//       }
//       return task;
//     });
//     setData(changedData);
//     setfilteredData(changedData);
//     switch (selectedButton) {
//       case "All":
//         clearFilter();
//         break;
//       case "active":
//         filterActive();
//         break;
//       case "completed":
//         filterCompleted();
//         break;
//       default:
//         break;
//     }
//   };

//   const clearCompleted = () => {
//     if (CountCompleted === 0) {
//       alert("No completed tasks yet.");
//     } else {
//       if (window.confirm("Are you sure want to delete this task?")) {
//         const clearedData = data.filter((task) => task.status === "active");
//         setData(clearedData);
//         setfilteredData(clearedData);
//         setSelectedButton("All");
//       }
//     }
//   };
//   const filterActive = () => {
//     const filteredData = data.filter((task) => task.status === "active");
//     setfilteredData(filteredData);
//     setSelectedButton("active");
//   };
//   const filterCompleted = () => {
//     const filteredData = data.filter((task) => task.status === "completed");
//     setfilteredData(filteredData);
//     setSelectedButton("completed");
//   };
//   const clearFilter = () => {
//     setfilteredData(data);
//     setSelectedButton("All");
//   };
//   console.log(" ");
//   return (
//     <div className="flex justify-center bg-[#F3F4F6] h-screen w-screen">
//       <div className="w-[378px] size-fit bg-white mt-[60px] shadow-md rounded-md py-[24x] px-[16px] flex flex-col items-center">
//         {/* input filter tags */}

//         <div className="flex flex-col w-full gap-5">
//           <h1 className="text-xl font-semibold text-center mt-[20px]">
//             To-do List
//           </h1>
//           <div className="flex gap-[6px]">
//             <input
//               className="h-[40px] border border-[#E4E4E7] rounded-md pl-4 w-full"
//               type="text"
//               onChange={(event) => {
//                 setInputValue(event.target.value);
//               }}
//               onKeyDown={(event) => {
//                 handleKeyDown(event);
//               }}
//               value={inputValue}
//               placeholder="Add a new tsak ..."
//             />
//             <Button handleClick={createTask} text="Add" />
//           </div>

//           <div className="flex gap-[6px] items-center">
//             <Button
//               isGray={selectedButton === "All" ? false : true}
//               isSmall={true}
//               handleClick={clearFilter}
//               text="All"
//             />
//             <Button
//               isGray={selectedButton === "active" ? false : true}
//               isSmall={true}
//               handleClick={filterActive}
//               text="Active"
//             />
//             <Button
//               isGray={selectedButton === "completed" ? false : true}
//               isSmall={true}
//               handleClick={filterCompleted}
//               text="Completed"
//             />
//           </div>
//         </div>

//         {filteredData.map((task) => {
//           return (
//             <Task
//               key={task.id}
//               id={task.id}
//               text={task.text}
//               status={task.status}
//               deleteTask={deleteTask}
//               toggleStatus={toggleStatus}
//             />
//           );
//         })}
//         {filteredData.length === 0 && (
//           <p className="text-center text-[#6B7280] text-sm mt-5">
//             No tasks yet. Add one above!
//           </p>
//         )}

//         {data.length !== 0 && (
//           <div className="pt-4 pb-1 border-t border-[#E4E4E7] flex justify-between text-sm w-full mt-5">
//             <p className="text-[#6B7280]">
//               {" "}
//               {CountCompleted} of {data.length} tasks completed
//             </p>
//             <button className="text-[#EF4444]" onClick={clearCompleted}>
//               Clear completed
//             </button>
//           </div>
//         )}
//         <p className="mt-10 text-xs text-[#627280] pb-[20px]">
//           Powered by{" "}
//           <a href="https://legacy.pinecone.mn/" className="text-[#3B73EB]">
//             Pinecone academy
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;
