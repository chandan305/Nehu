import { useState } from "react";
import { images } from "../assets/assets";
 

const Todo = () => {

  const [intial, setIntial] = useState("");
  const [showLove, setShowLove] = useState(false);

  const changeInput = (event) => {

    const value = event.target.value;

    setIntial(value);

    // Check input
    if (value.toLowerCase() === "i love you" || value.toLowerCase() === "khaye khana" ) {
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

          <h2 className="font-bold text-2xl sm:text-3xl text-center">
            Madam Nehu This Is For You
          </h2>

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
          <div className="mt-12 flex flex-col items-center">

            <img
              className="w-40 h-35 mb-4 animate-bounce"
              src={images.heart}
              alt=""
            />

            <h3 className="text-2xl font-bold text-pink-600">
              LOVE YOU TOO MERI PAGLI❤️
            </h3>

          </div>
        )}

      </div>

    </div>
  );
};

export default Todo;