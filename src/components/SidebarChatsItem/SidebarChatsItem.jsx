import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import * as C from "./styles";
import { MdPerson, MdDelete } from "react-icons/md";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({
  id,
  users,
  user,
  setUserChat,
  active,
  setDeletedChat,
}) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
  };

  const handleDeleteChat = (chatId) => {
    if (window.confirm("Tem certeza de que deseja remover este chat?")) {
      db.collection("chats")
        .doc(chatId)
        .delete()
        .then(() => {
          console.log("Chat removido com sucesso!");
          setDeletedChat(true);
        })
        .catch((error) => {
          console.error("Erro ao remover o chat: ", error);
        });
    }
  };

  return (
    <C.Container onClick={handleNewChat} className={active}>
      <div className="centralize">
        {Avatar ? <C.Avatar src={Avatar?.photoURL} /> : <MdPerson />}
        <C.Name>{item.split("@")[0]}</C.Name>
      </div>
      <div className="trash">
        <MdDelete
          style={{ backgroundColor: "transparent" }}
          onClick={() => handleDeleteChat(id)}
        />
      </div>
    </C.Container>
  );
};

export default SidebarChatsItem;
