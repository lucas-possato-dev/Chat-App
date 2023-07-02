import { Container, Title, Info } from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <Container>
      <MdMessage />
      <Title>Chat App</Title>
      <Info>
        Agora você pode enviar e receber mensagens sem precisar manter seu
        celular conectado à internet.
      </Info>
    </Container>
  );
};

export default Default;
