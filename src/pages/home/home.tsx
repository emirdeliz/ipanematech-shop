import { useState } from 'react';
import { useTranslate } from '@hooks/use-translate';
import { Body, Title } from '@framework/index';
import { TableStoreProduct } from './components/table-store-product/table-store-product';
import { SelectAllProduct } from './components/select-all-product/select-all-product';
import { HomeContainer } from './home.style';

const Home = () => {
  const [selectAll, setSelectAll] = useState<boolean>(true);
  const t = useTranslate();

  return (
    <Body>
      <HomeContainer>
        <Title>{t('home.title')}</Title>
        <SelectAllProduct selectAll={selectAll} onSelectAll={setSelectAll} />
        <TableStoreProduct />
      </HomeContainer>
    </Body>
  );
}

export default Home;