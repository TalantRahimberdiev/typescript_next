
import { Navbar, Text } from "@mantine/core"
import NavElements from "./navElements"

type Props={
   opened:boolean
}

export default function MainNav({ opened }:Props) {
   return (
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
         <Text>Основные разделы:</Text>
         <NavElements />
      </Navbar>
   )
}