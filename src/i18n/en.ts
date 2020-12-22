import { ILocale } from './template';

export const table: ILocale = {
  locale: 'English',
  title: 'Next.js 10 + Rosetta with native i18n integration',
  profile: {
    button: 'Press me!',
  },
  welcome: 'Welcome {{name}}! 😃', // with variable replacement

  home: {
    title: 'Frontend Test',
    culinar: {
      shop: 'Culinar Shop',
      tooltip: 'Select all store items'
    }
  }
};