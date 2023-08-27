import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-2 place-items-center min-h-screen">
      <button
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        onClick={() => navigate("/1")}
      >
        Assignment 1
      </button>
      <button
        className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
        onClick={() => navigate("/2")}
      >
        Assignment 2
      </button>
    </div>
  );
}

export default App;
