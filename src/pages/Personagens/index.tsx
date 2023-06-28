import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { Container, CardList, Card, Busca, ButtonMore } from "./styles";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (personagens.length === 0) {
      handleMore();
    }
  }, [personagens]);

  const loadPersonagens = useCallback(() => {
    setIsLoading(true);
    api
      .get("/characters", { params: { nameStartsWith: searchTerm } })
      .then((r) => {
        setPersonagens(r.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchTerm]);

  const handleMore = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get(`/characters?offset=${personagens.length}`);

      setPersonagens([...personagens, ...response.data.data.results]);
    } catch (error) {
      console.log(error);
      alert("Erro ao carregar mais personagens");
    } finally {
      setIsLoading(false);
    }
  }, [personagens]);

  const handleSearch = useCallback(() => {
    loadPersonagens();
  }, [loadPersonagens]);

  const handleChangeSearchTerm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  return (
    <Container>
      <Busca>
        <input
          type="text"
          placeholder="Digite o nome do herói"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />

        <button onClick={handleSearch}>Buscar</button>
      </Busca>
      <CardList>
        {personagens
          .filter(
            (personagen) =>
              personagen.description &&
              !personagen.thumbnail.path.includes("image_not_available")
          )
          .map((personagen) => (
            <Link to={`/character/${personagen.id}`} key={personagen.id}>
              <Card key={personagen.id} thumbnail={personagen.thumbnail}>
                <div id="img" />
                <h2>{personagen.name}</h2>
                <p>{personagen.description}</p>
              </Card>
            </Link>
          ))}
      </CardList>

      <ButtonMore onClick={handleMore}>
        {isLoading ? (
          "Carregando..."
        ) : (
          <>
            <FiChevronDown size={20} />
            Mais
            <FiChevronDown size={20} />
          </>
        )}
      </ButtonMore>
    </Container>
  );
};

export default Personagens;
