import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Input = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(input), " in input component";
    if (input != "") {
      navigate(`/${input}`);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Products"
        className="h-8 w-96 mt-2 rounded-full  p-4 text-black border text-center"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-orange-400 h-8 w-20 rounded-full ml-4 mt-2 text-gray-800"
        onClick={handleClick}
      >
        Search
      </button>
    </>
  );
};
