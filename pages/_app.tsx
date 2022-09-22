
import { AppProps } from 'next/app';
import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme, } from '@mantine/core';
import App_Shell from '../constructure/app_shell';


export default function MyApp(props: AppProps) {

  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        
        <App_Shell>
          <Component {...pageProps} />
        </App_Shell>

      </MantineProvider>
    </ColorSchemeProvider>
  )
}