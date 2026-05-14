// import { useRef, useState } from "react";

// export default function App() {
//   const [value, setValue] = useState("");

//   const timer = useRef(null);

//   function debounce(fn, delay) {
//     return function (text) {
//       clearTimeout(timer.current);

//       timer.current = setTimeout(() => {
//         fn(text);
//       }, delay);
//     };
//   }

//   function searchApi(text) {
//     console.log("API Call:", text);
//   }

//   const debounceSearch = debounce(searchApi, 1000);

//   const handleChange = (e) => {
//     setValue(e.target.value);

//     debounceSearch(e.target.value);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <input
//         type="text"
//         value={value}
//         onChange={handleChange}
//         placeholder="Search..."
//         className="border p-4"
//       />
//     </div>
//   );
// }




const Home = () => {

  


  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center">
      
      <form className="w-[90%] sm:w-[400px] bg-white p-8 rounded-2xl shadow-2xl flex flex-col gap-5">
        
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login Form
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="border border-gray-300 p-3 rounded-lg outline-none focus:border-purple-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="border border-gray-300 p-3 rounded-lg outline-none focus:border-pink-500"
        />

        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 duration-300">
          Submit
        </button>

      </form>

    </div>
  );
};

export default Home;
