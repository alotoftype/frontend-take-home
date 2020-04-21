import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';
import { AppPropsType } from 'next/dist/next-server/lib/utils';

import theme from '../theme';

const GlobalStyle: GlobalStyleComponent<any, any> = createGlobalStyle`
  @font-face {
    font-family: "Graphik";
    src: url("/Graphik-Regular.woff2") format("woff2");
    font-weight: ${theme.fontWeights.regular};
  }
  
  @font-face {
    font-family: "Graphik";
    src: url("/Graphik-Semibold.woff2") format("woff2");
    font-weight: ${theme.fontWeights.semibold};
  }
  
  @font-face {
    font-family: "Graphik";
    src: url("/Graphik-Bold.woff2") format("woff2");
    font-weight: ${theme.fontWeights.bold};
  }
  
  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {
    font-family: ${theme.fonts.body};
    margin: 0;
  }
  
  ::-moz-selection {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
  }

  ::selection {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
  }
  
  a {
    text-decoration: none;
  }
`;

const App: FunctionComponent<AppPropsType> = ({ Component, ...props }) => (
  <>
    <GlobalStyle />
    <Head>
      <title>Better</title>
    </Head>
    <Component {...props} />
  </>
);

export default App;
