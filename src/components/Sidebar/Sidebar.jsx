import { Container } from "./styles";
import SidebarHeader from "./../SidebarHeader/SidebarHeader";
import SidebarChats from "./../SidebarChats/SidebarChats";

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </Container>
  );
};

export default Sidebar;
