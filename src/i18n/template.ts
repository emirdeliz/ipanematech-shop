export interface ILocale {
  locale: string;
  title: string;
  profile: {
    button: string;
  };
  welcome: string;
  
  home: {
    title: string;
    culinar: {
      shop: string;
      tooltip: string;
    }
    tableStoreProduct: {
      name: string;
      nr: string;
      price: string;
      quantity: string;
      total: string;
    }
  }
}