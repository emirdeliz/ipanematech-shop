import { useTranslate } from '@hooks/useTranslate';
import { Body, Title, InputCheckbox } from '@framework/index';
import { HomeContainer } from './home.style';

const Home = () => {
  const t = useTranslate();
  return (
    <Body>
      <HomeContainer>
        <Title>{t('home.title')}</Title>
        <InputCheckbox />
      </HomeContainer>
    </Body>
  );
}

export default Home;