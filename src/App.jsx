import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./components/Login/Login";
import Loading from "./components/Loading/Loading";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container } from "./styles/appStyle";
import Chat from "./components/Chat/Chat";

function App() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);
  const [deletedChat, setDeletedChat] = useState(false);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  useEffect(() => {
    if (deletedChat) {
      setUserChat(null);
      setDeletedChat(false);
    }
  }, [deletedChat]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <Container>
      <Sidebar
        setUserChat={setUserChat}
        userChat={userChat}
        setDeletedChat={setDeletedChat}
      />
      <Chat userChat={userChat} deletedChat={deletedChat} />
    </Container>
  );
}

export default App;
