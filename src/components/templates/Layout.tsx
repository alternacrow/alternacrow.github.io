import React, {FC} from 'react';

import type {GithubUser} from '../../interfaces';

import {Header, Footer} from '../organisms/common';

type Props = {
  user: GithubUser;
};

export const Layout: FC<Props> = ({user, children}) => {
  return (
    <>
      <Header user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
