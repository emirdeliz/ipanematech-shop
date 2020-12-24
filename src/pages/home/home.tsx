/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for the homepage
 * =============================================
 */
import React, { useEffect, useState } from 'react';
import { useTranslate } from '@hooks/use-translate';
import { useShopProduct } from '@hooks/use-shop-product';
import { Body, Title } from '@framework/index';
import { TableStoreProduct } from './components/table-store-product/table-store-product';
import { SelectAllProduct } from './components/select-all-product/select-all-product';
import { HomeContainer } from './home.style';

const Home = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<Array<number>>([]);
  const { products } = useShopProduct();
  const t = useTranslate();

  useEffect(() => {
    updateSelectedAll();
  }, [selectedItems]);

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to update the state of selecting all. 
   * It is called when the list of selected products is updated.
   */
  const updateSelectedAll = () => {
    const hasAllSelected = selectedItems.length === products.length && !!products.length;
    setSelectAll(hasAllSelected);
  }

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to add or remove a product number to the list of selected products 
   * @param productNr: number product
   */
  const onSelectedItem = (productNr: number) => {
    const isNew = !selectedItems.includes(productNr);
    if (isNew) {
      setSelectedItems([productNr, ...selectedItems]);
    } else {
      setSelectedItems(selectedItems.filter(nr => nr !== productNr));
    }
  }

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to add or remove all products to the list of selected products 
   * @param selected: whether it is to include all products
   */
  const onSelectAll = (selected: boolean) => {
    if (selected) {
      setSelectedItems(products.map(p => p.nr));
    } else {
      setSelectedItems([]);
    }
  }

  return (
    <Body>
      <HomeContainer>
        <Title>{t('home.title')}</Title>
        <SelectAllProduct
          selectAll={selectAll}
          onSelectAll={onSelectAll}
        />
        <TableStoreProduct
          productOptions={products}
          selectedItems={selectedItems}
          onSelectedItem={onSelectedItem} 
        />
      </HomeContainer>
    </Body>
  );
}

export default Home;