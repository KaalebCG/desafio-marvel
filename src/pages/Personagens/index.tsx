import React, { useEffect, useState, useCallback } from "react";
import api from "../../api/api";
import { Container, CardList, Card, ButtonMore } from "./styles";
import { FiChevronDown } from "react-icons/fi";

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

  const handleMore = useCallback(async () => {
    try {
      const response = await api.get(
        `/characters?offset=${personagens.length}`
      );

      setPersonagens([...personagens, ...response.data.data.results]);
      console.log(response.data.data.results);
    } catch {
      alert("Erro ao carregar mais personagens");
    }
  }, [personagens]);

  return (
    <Container>
      <CardList>
        {personagens.map((personagen) => {
          return (
            <Card key={personagen.id} thumbnail={personagen.thumbnail}>
              <div id="img" />
              <h2>{personagen.name}</h2>
              <p>{personagen.description}</p>
            </Card>
          );
        })}
      </CardList>

      <ButtonMore onClick={handleMore}>
        <FiChevronDown size={20} />
        Mais
        <FiChevronDown size={20} />
      </ButtonMore>
    </Container>
  );
};

export default Personagens;
