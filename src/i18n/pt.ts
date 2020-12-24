import { ILocale } from './template';

export const table: ILocale = {
  home: {
    title: 'Teste de Frontend',
    culinar: {
      store: 'Loja de Culinária',
      tooltip: 'Selecionar todos os itens da loja'
    },
    tableStoreProduct: {
      name: 'Nome do item',
      nr: 'Nr. do item',
      price: 'Preço do Item',
      quantity: 'Quantidade',
      total: 'Total',
      quantityContainer: {
        plus: 'Aumentar quantidade',
        minus: 'Diminuir quantidade',
      }
    }
  }
};