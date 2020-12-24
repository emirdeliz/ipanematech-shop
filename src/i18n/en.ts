import { ILocale } from './template';

export const table: ILocale = {
  home: {
    title: 'Frontend Test',
    culinar: {
      store: 'Culinar Shop',
      tooltip: 'Select all store items'
    },
    tableStoreProduct: {
      name: 'Item Name',
      nr: 'Item NO.',
      price: 'Item Price',
      quantity: 'Quantity',
      total: 'Total',
      quantityContainer: {
        plus: 'Increase quantity',
        minus: 'Decrease quantity',
      }
    }
  }
};