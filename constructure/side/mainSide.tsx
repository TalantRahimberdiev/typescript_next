
import { MediaQuery,Aside,Text } from "@mantine/core"
import Side from './side'


export default function MainSide() {
   return (
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
         <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Side/>
         </Aside>
      </MediaQuery>
   )
}