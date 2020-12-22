import { ILocale } from './template';

export const table: ILocale = {
  locale: 'Português',
  title: 'Next.js 10 + Rosetta com native i18n integração',
  profile: {
    button: 'Aperte aqui',
  },
  welcome: 'Bem vindo {{name}}! 😃', // with variable replacement

  home: {
    title: 'Teste de Frontend',
    culinar: {
      shop: 'Loja de Culinária',
      tooltip: 'Selecionar todos os itens da loja'
    }
  }
};