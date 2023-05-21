import axios from "axios";

function App() {
  const createUser = async () => {
    const { data } = await axios.post("http://localhost:8080/users", {
      name: "taejung",
      team: "기획",
    });
    console.log("createUser", data);
    return data;
  };
  const getUser = async () => {
    const { data } = await axios("http://localhost:8080/users");
    console.log("getUser", data);
    return data;
  };
  return (
    <div>
      <button type="button" onClick={createUser}>
        Create
      </button>
      <button type="button" onClick={getUser}>
        Get
      </button>
    </div>
  );
}

export default App;
