/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file helpers responsible for defining the currency.
 * ================================================
 */

/**
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * @description This method is used to format a number in cash
 * @param value: value to be formatted 
 * @param currency: formatting currency (ex.: EUR, USA)
 */
export const formatCurrency = (value: number, currency: string = 'EUR') => {
  /**
   * @created on Mon Dec 21 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This configuration is used to define how the training should be.
   * More details: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   */
  const formatConfig = {
    style: 'currency',
    currency, // CNY for Chinese Yen, EUR for Euro
    minimumFractionDigits: 2,
    currencyDisplay: 'symbol',
  };

  const formatInstance = new Intl.NumberFormat('es-ES', formatConfig);
  return formatInstance.format(value);
}