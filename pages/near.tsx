import type {NextPage} from 'next';
import {Head} from '../src/utils';

import {NearPage} from '../src/components/pages/NearPage';

type Props = {};

const Near: NextPage<Props> = () => {
  return (
    <>
      <Head title="near" description="near - ピル管理アプリ">
        <link
          href="https://fonts.cdnfonts.com/css/abhaya-libre-2"
          rel="stylesheet"
        />
      </Head>
      <NearPage />
    </>
  );
};

export default Near;
