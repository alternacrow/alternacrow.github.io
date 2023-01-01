import React, {FC} from 'react';
import styles from './NearPage.module.scss';

type Props = {};

export const NearPage: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <h1>near</h1>

      <div className={styles.nearImage}>
        <img src="/near-image.png" />
      </div>

      <div className={styles.description}>
        <p>【機能と特徴】</p>
        <p>・アカウント登録不要</p>
        <p>・シンプルな機能と設定</p>
        <p>・プッシュ通知によるアラーム（スヌーズあり）</p>
        <p>・メモやスタンプのあるカレンダー機能</p>
        <br />
        <p>【使い方】</p>
        <p>はじめに、設定画面で通知設定を行います。</p>
        <p>その後は、通知が来たらお薬のボタンを押すだけです。</p>
        <br />
        <p>【注意】</p>
        <p>アプリを削除すると以前のデータは消え、復元は出来ません。</p>
      </div>
    </div>
  );
};
