/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * A custom Document is commonly used to augment your application's 
 * <html> and <body> tags. This is necessary because Next.js 
 * pages skip the definition of the surrounding document's markup.
 * =============================================
 */
import React from 'react';
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * This method is responsible for injecting styled-components
 * @param ctx: application context
 */
const _injectStyledComponents = async(ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => {
        return sheet.collectStyles(<App {...props} />);
      }
    });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    };
  } catch(e) {
    console.log(e);
  } finally {
    sheet.seal();
  }
}

interface IShopDocument {
  styles: JSX.Element;
  html: string;
  head?: JSX.Element[];
}

/**
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * This method is responsible for obtaining the initial props
 */
export default class ShopDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<IShopDocument> {
    return await _injectStyledComponents(ctx);
  }
}
