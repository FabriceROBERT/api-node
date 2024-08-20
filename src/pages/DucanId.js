import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DucanId() {
  const [data, setData] = React.useState(null);
  const params = useParams();
  console.log(params);
  const callAPI = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/duncan/` + params.id
      );
      console.log(response.data);
      setData(response.data);
      return "ok";
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    try {
      callAPI();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1 className="text-xl pb-6 text-center font-semibold">
        Personnage Duncan
      </h1>
      <div>
        {data?.map((info) => (
          <>
            <div>Nom : {info.nom} </div>
            <div>Email : {info.email} </div>
          </>
        ))}
      </div>
    </div>
  );
}
