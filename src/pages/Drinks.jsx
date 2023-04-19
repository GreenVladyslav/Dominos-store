import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchDrinks } from '../redux/slices/drinksSlice';
import { fetchFilters } from '../redux/slices/filtersSlice';

import ProductCard from '../components/ProductCard/ProductCard';

import Spinner from '../components/Spinner/Spinner';
import SkeletonProduct from '../components/ProductCard/SkeletonProduct';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

import Sort from '../components/Sort/Sort';
import Filter from '../components/Filter/Filter';
import PageTitle from '../components/PageTitle/PageTitle';

import { useTranslation } from 'react-i18next';

import '../components/ProductCard/productcard.scss';

function Drinks() {
  const dispatch = useDispatch();
  const { items, loadingStatus } = useSelector((state) => state.drinks);
  const { filters, activeSort, inputValue, activeCategory, nameCategory } = useSelector(
    (state) => state.filters,
  );

  const { t } = useTranslation();

  const getDrinks = async () => {
    const sortBy = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = inputValue;
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';

    const url = `filterListDrinks`;
    dispatch(fetchDrinks({ sortBy, order, search, category }));
    dispatch(fetchFilters({ url }));
  };

  React.useEffect(() => {
    getDrinks();
  }, [activeSort, inputValue, activeCategory]);

  const water = items.filter((obj) => obj.category === 1);
  const juice = items.filter((obj) => obj.category === 2);
  const beer = items.filter((obj) => obj.category === 3);

  const drinks = (arr, pageTitle) => {
    return arr.map((obj, index) => {
      return <ProductCard key={obj.id} {...obj} pageTitle={pageTitle} />;
    });
  };

  const skeleton = [...new Array(10)].map((_, index) => <SkeletonProduct key={index} />);

  const errorMessage = loadingStatus === 'error' ? <ErrorMessage /> : null;
  const spinner = loadingStatus === 'waiting' ? <Spinner /> : null;
  const skelet = loadingStatus === 'loading' ? skeleton : null;

  const waterContent = spinner || errorMessage || skelet || drinks(water, t('water'));
  const juiceContent = spinner || errorMessage || skelet || drinks(juice, t('juice'));
  const beerContent = spinner || errorMessage || skelet || drinks(beer, t('beer'));

  return (
    <div className="container">
      <Sort />
      <Filter filters={filters} />
      <div className="product">
        {activeCategory === 0 ? (
          <PageTitle pageTitle={t('water')} />
        ) : (
          <PageTitle pageTitle={t(nameCategory)} />
        )}

        <div className="product-content">{waterContent}</div>

        {activeCategory > 0 ? '' : <PageTitle pageTitle={t('juice')} />}

        <div className="product-content">{juiceContent}</div>

        {activeCategory > 0 ? '' : <PageTitle pageTitle={t('beer')} />}

        <div className="product-content">{beerContent}</div>
      </div>
    </div>
  );
}

export default Drinks;
