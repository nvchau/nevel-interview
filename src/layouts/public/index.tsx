import { PropsWithChildren } from 'react';

import { Banner } from './components/banner';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      {children}
      <Footer />
    </div>
  );
};
