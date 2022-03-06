import React, {FC} from 'react';

import {Header, Footer} from '../organisms/common';

export const Layout: FC = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
