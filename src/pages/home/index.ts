import { GetStaticProps } from 'next';
import { I18nProps } from 'next-rosetta';
import { ILocale } from '@i18n/template'; 

export { default } from './home';
export const getStaticProps: GetStaticProps<I18nProps<ILocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`@i18n/${locale}`);
  return { props: { table } };
};