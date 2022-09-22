
import { MediaQuery, Text, Burger,} from "@mantine/core"
import { useContext } from "react"
import { Context_1 } from "../app_shell";
import DarkLight from "./darkLight"


export default function Heading() {
   const { opened, setOpened, theme } = useContext(Context_1)

   return (
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-around' }}>
         <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={() => setOpened(opened ? !opened :opened)} size="sm" color={theme.colors.gray[6]} mr="xl" />
         </MediaQuery>
         <Text>Иссыккульский государственный университет и. К. Тыныстанова </Text>
         <DarkLight />
      </div>
   )
}