import { useState, createContext } from 'react';
import { AppShell, useMantineTheme, MantineTheme, } from '@mantine/core'

import MainNav from './navigation/mainNav';
import MainHead from './head.js/mainHead';
import MainSide from './side/mainSide';
import MainFoot from './foot/mainFoot';

export interface ContextInterface {
  opened: boolean;
  setOpened: (value: boolean) => void;
  theme: MantineTheme;
}

type Props = {
  children?: React.ReactNode;
}

export const Context_1 = createContext({} as ContextInterface);

export default function App_Shell({ children }: Props) {

  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm"

      header={<Context_1.Provider value={{ opened, setOpened, theme }}><MainHead /></Context_1.Provider>}
      navbar={<MainNav opened={opened} />}
      aside={<MainSide />}
      footer={<MainFoot />}
    >
      {children}
    </AppShell>
  )
}