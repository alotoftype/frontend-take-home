import React from 'react';
import NextDocument, {DocumentContext, DocumentInitialProps} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {RenderPage} from 'next/dist/next-server/lib/utils';

class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage: RenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps: DocumentInitialProps = await NextDocument.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default Document;
