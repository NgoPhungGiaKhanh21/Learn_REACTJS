import { use, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  const [state, setState] = useState(0);

  return (
    <Layout>
      <h2>Current State: {state}</h2>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Get dữ liệu
      </button>
      <button
        onClick={() => {
          setState(0);
        }}
      >
        Clear dữ liệu
      </button>

      <Counter />
      <Counter />
      <Counter />

      <User/>

    </Layout>
  );
}

export default App;

// Fixed Counter component
const Counter = () => {
  const [count, setCount] = useState(0); 

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Tăng giá trị</button>
    </>
  );
};

const User = () => {
  const [count, setCount] = useState(0);
  const [showUserClick, setUserClick] = useState("");
  const [value, setValue] = useState();

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleSetUser = (username) => {
    setUserClick(username);
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return(
    <>
      <p>Show user click: {showUserClick}</p>
      <Header value={count} setUser={handleSetUser}/>
      <input type="text" onChange={(handleOnChange)} value={value}/>
      <button onClick={() => alert(`gia tri o input: ${value}`)}>save</button>
    </>
  );
};