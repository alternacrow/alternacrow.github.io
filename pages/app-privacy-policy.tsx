import type {NextPage} from 'next';
import {Head} from '../src/utils';

import {AppPrivacyPolicyPage} from '../src/components/pages/AppPrivacyPolicyPage';

type Props = {};

const AppPrivacyPolicy: NextPage<Props> = () => {
  return (
    <>
      <Head
        title="利用規約・プライバシーポリシー"
        description="alternacrowの開発・運用するスマートフォン用アプリケーションの利用規約・プライバシーポリシーです。"
      />
      <AppPrivacyPolicyPage />
    </>
  );
};

export default AppPrivacyPolicy;
