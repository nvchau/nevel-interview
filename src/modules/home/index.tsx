import useTranslation from 'next-translate/useTranslation';

export const HomePage: PageProps = () => {
  const { t } = useTranslation('home');

  return <div>{t('title')}</div>;
};
