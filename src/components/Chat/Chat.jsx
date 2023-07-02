import ChatHeader from "../ChatHeader/ChatHeader";
import { Container } from "./styles";
import ChatBody from "../ChatBody/ChatBody";
import ChatFooter from "../ChatFooter/ChatFooter";
import Default from "../Default/Default";

const Chat = ({ userChat }) => {
  if (!userChat) return <Default />;

  return (
    <Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </Container>
  );
};

export default Chat;
