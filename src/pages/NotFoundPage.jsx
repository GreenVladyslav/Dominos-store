import { Link } from 'react-router-dom';

import NotFoundBlock from '../components/NotFoundBlock/NotFoundBlock';

import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <NotFoundBlock />

      <Link to="/" className="btn-back" style={{ width: '230px' }}>
        {t('return to main')}
      </Link>
    </>
  );
};

export default NotFoundPage;
