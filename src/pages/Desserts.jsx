import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchDesserts } from '../redux/slices/dessertsSlice';

import ProductCard from '../components/ProductCard/ProductCard';

import Spinner from '../components/Spinner/Spinner';
import SkeletonProduct from '../components/ProductCard/SkeletonProduct';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

import Sort from '../components/Sort/Sort';
import PageTitle from '../components/PageTitle/PageTitle';

import { useTranslation } from 'react-i18next';

import '../components/ProductCard/productcard.scss';

function Desserts() {
  const dispatch = useDispatch();
  const { activeSort, inputValue } = useSelector((state) => state.filters);
  const { items, loadingStatus } = useSelector((state) => state.desserts);

  const { t } = useTranslation();

  const getDesserts = async () => {
    const sortBy = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = inputValue;

    dispatch(fetchDesserts({ sortBy, order, search }));
  };

  React.useEffect(() => {
    getDesserts();
  }, [activeSort, inputValue]);

  const desserts = items.map((obj, index) => {
    return <ProductCard key={obj.id} {...obj} />;
  });

  const skeleton = [...new Array(10)].map((_, index) => <SkeletonProduct key={index} />);

  const errorMessage = loadingStatus === 'error' ? <ErrorMessage /> : null;
  const spinner = loadingStatus === 'waiting' ? <Spinner /> : null;
  const skelet = loadingStatus === 'loading' ? skeleton : null;
  const content = spinner || errorMessage || skelet || desserts;

  return (
    <div className="container">
      <Sort />
      <PageTitle pageTitle={t('pagedesert')} />
      <div className="product">
        {errorMessage ? errorMessage : <div className="product-content">{content}</div>}
      </div>
    </div>
  );
}

export default Desserts;
