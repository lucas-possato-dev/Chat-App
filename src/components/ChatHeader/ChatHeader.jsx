import {
  Container,
  UserInfo,
  Name,
  Options,
  Avatar,
  NameContent,
} from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

const ChatHeader = ({ photoURL, name }) => {
  return (
    <Container>
      <UserInfo>
        {photoURL ? <Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <NameContent>
          <Name>{name}</Name>
        </NameContent>
      </UserInfo>
      <Options>
        <MdSearch />
        <MdMoreVert />
      </Options>
    </Container>
  );
};

export default ChatHeader;
