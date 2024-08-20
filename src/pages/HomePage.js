import React from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [data, setData] = React.useState([]);

  const callAPI = async () => {
    const response = await axios.get("http://localhost:3000/duncanworld", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    console.log(response.data);
    setData(response.data);
    return "ok";
  };

  React.useEffect(() => {
    try {
      callAPI();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="p-5">
      <h1 className=" font-semibold pb-3">Listes des Duncansien :</h1>
      {data.map((item) => (
        <div key={item.id}>
          <Link to={"duncan/" + item.id}>
            <p>{item.nom}</p>
          </Link>
          {/* <p>{item.email}</p> */}
        </div>
      ))}
      {/* {data[0]?.nom} */}
    </div>
  );
}
