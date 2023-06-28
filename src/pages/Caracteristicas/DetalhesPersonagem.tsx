import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/api";
import { Container, CardThumb, CardDesc, Content, BackButton } from "./styles";

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

type Params = {
  id: string;
};

const DetalhesPersonagem: React.FC = () => {
  const { id } = useParams<Params>();
  const [personagem, setPersonagem] = useState<ResponseData | null>(null);

  useEffect(() => {
    api
      .get(`/characters/${id}`)
      .then((r) => {
        setPersonagem(r.data.data.results[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!personagem) {
    return <div>Carregando...</div>;
  }

  return (
    <Content>
      <Link to="/">
        <BackButton>Voltar para Personagens</BackButton>
      </Link>
      <h2>{personagem.name}</h2>
      <Container>
        <CardThumb>
          <img
            src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
            alt={personagem.name}
          />
        </CardThumb>

        <CardDesc>
          <p>{personagem.description}</p>
        </CardDesc>
      </Container>
    </Content>
  );
};

export default DetalhesPersonagem;
