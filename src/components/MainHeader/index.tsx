import { Container, Profile, Username, Welcome } from "./styles";
import { useMemo } from "react";
import emojis from "../../Utils/emojis";
import { Toggle } from "../Toggle/index";
export const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <Username>Evelyn F. Lima</Username>
      </Profile>
    </Container>
  );
};
