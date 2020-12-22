/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Thu Dec 17 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible to next config.
 * ================================================
 */
const path = require('path');

module.exports = {
  /**
   * @created on Thu Dec 17 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * This is the configuration that will be used for the 
   * next to build the routes based on the available languages.
   */ 
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
  /**
   * @created on Thu Dec 17 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * This customization of the webpack is used to define the custom 
   * paths for the mapped elements (framework, components, etc ...).
   * With that we import elements using '@framework' instead of using '../..' 
   * to the element folder.
   */
  webpack: (config) => {
    const { assign } = Object;
    assign(config, {
      resolve: assign(config.resolve, {
        alias: assign({}, config.resolve.alias, {
          '@framework': path.resolve('src/framework'),
          '@components': path.resolve('src/components'),
          '@system': path.resolve('src/system'),
          '@hooks': path.resolve('src/hooks'),
          '@i18n': path.resolve('src/i18n'),
          '@helpers': path.resolve('src/helpers'),
          '@api': path.resolve('src/api'),
          '@assets': path.resolve('src/assets'),
        }),
      }),
    });
    return config;
  },
  /**
   * @created on Thu Dec 17 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * React's Strict Mode is a development mode only feature for highlighting 
   * potential problems in an application. It helps to identify unsafe lifecycles, 
   * legacy API usage, and a number of other features.
   */
  reactStrictMode: true,
}