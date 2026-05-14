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
import React from "react";

const Home = () => {
  return (
    <div class="flex items-center">
      <h1 class="flex-1 bg-amber-300">Logo</h1>

      <button>Login</button>
    </div>
  );
};

export default Home;
