import Counter from "./Components/Counter";

function App() {

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center mt-10">

          <h1 className="text-3xl font-bold mb-2 md:mb-10 text-gray-700">Simple Counter Application</h1>

          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;