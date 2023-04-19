import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1>
        <img
          src="https://media.istockphoto.com/id/902882754/photo/3d-white-man-and-404-error-page-not-found.jpg?s=170667a&w=0&k=20&c=WfXNfS1qguo5QHrZt6RIuI0Zi5xymYUoMM7xJp38AOc="
          alt="404"
        />
        <br />
        <p className={`${styles.center}, ${styles.title}`}>Not Found</p>
      </h1>
      <p className={[styles.description, styles.color].join(' ')}>{t('maessage third')}</p>
    </div>
  );
};

export default NotFoundBlock;
