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
    const hasAllSelected = selectedItems.length === products.length && !!products.length;
    setSelectAll(hasAllSelected);
  }, [selectedItems]);

  const onSelectedItem = (productNr: number) => {
    const isNew = !selectedItems.includes(productNr);
    if (isNew) {
      setSelectedItems([productNr, ...selectedItems]);
    } else {
      setSelectedItems(selectedItems.filter(nr => nr !== productNr));
    }
  }

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