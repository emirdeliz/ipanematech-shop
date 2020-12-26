export interface ILocale {
  home: {
    title: string;
    addToCart: string,
    culinar: {
      store: string;
      tooltip: string;
    },
    tableStoreProduct: {
      name: string;
      nr: string;
      price: string;
      quantity: string;
      total: string;
      quantityContainer: {
        plus: string;
        minus: string;
      },
      tooltipDelete: string;
    },
    orderTotal: string;
    orderPrice: string;
    total: string;
  }
}