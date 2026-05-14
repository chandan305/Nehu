import { useState } from "react";
import { images } from "../assets/assets";
 

const Todo = () => {

  const [intial, setIntial] = useState("");
  const [showLove, setShowLove] = useState(false);

  const changeInput = (event) => {

    const value = event.target.value;

    setIntial(value);

    // Check input
    if (value.toLowerCase() === "i love you" || value.toLowerCase() === "khaye khana" || value.toLowerCase() === "pitdenge" ) {
      setShowLove(true);
    } else {
      setShowLove(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">

      <div className="w-full sm:w-3/4 md:w-1/2 bg-white p-6 rounded-xl shadow-lg">

        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-6">

          <h3 className="font-bold text-xl sm:text-2xl text-center">
            Madam Nehu This Is For You
          </h3>

          <img className="w-10 h-10" src={images.smile} alt="" />

        </div>

        {/* Input */}
        <input
          value={intial}
          onChange={changeInput}
          type="text"
          placeholder="Type something..."
          className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Show Love Message */}
        {showLove && (
          <div className="mt-15 flex flex-col items-center">

            <img
              className=" w-50 h-45 mb-4 animate-bounce"
              src={images.heart}
              alt=""
            />
         <div>
            
         </div>
            <h2 className=" text-3xl font-bold text-pink-600">
              Love You Meri Pagli❤️
            </h2>
            <img className="mt-8" src={images.nehu} alt="" />
          </div>
        )}

      </div>

    </div>
  );
};

export default Todo;