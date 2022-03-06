import React, {FC} from 'react';
import type {Product} from '../../../interfaces';
import styles from './ProductCard.module.scss';

import {ExternalLink} from '../../atoms';

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({product}) => {
  return (
    <ExternalLink className={styles.container} href={product.url}>
      <dt className={styles.name}>
        <img className={styles.icon} src={product.icon} alt={product.name} />
        {product.name}
      </dt>
      <dd className={styles.description}>{product.description}</dd>
    </ExternalLink>
  );
};
