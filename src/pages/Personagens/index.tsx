import React, { useEffect, useState } from "react";
import api from "../../api/api";

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Personagens: React.FC = () => {
  const [personagens, setPersonagens] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get("/characters")
      .then((r) => {
        setPersonagens(r.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return <h1>personagens</h1>;
};

export default Personagens;
