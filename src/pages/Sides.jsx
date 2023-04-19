import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchSides } from '../redux/slices/sidesSlice';
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

function Sides() {
  const dispatch = useDispatch();

  const { items, loadingStatus } = useSelector((state) => state.sides);
  const { filters, activeSort, inputValue, activeCategory, nameCategory } = useSelector(
    (state) => state.filters,
  );

  const { t } = useTranslation();

  const getSides = async () => {
    const sortBy = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = inputValue;
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';

    const url = 'filterListSides';
    dispatch(fetchSides({ sortBy, order, search, category }));
    dispatch(fetchFilters({ url }));
  };

  React.useEffect(() => {
    getSides();
  }, [activeSort, inputValue, activeCategory]);

  const comboBox = items.filter((obj) => obj.category === 1);
  const potato = items.filter((obj) => obj.category === 2);
  const chikenGrill = items.filter((obj) => obj.category === 3);
  const tosts = items.filter((obj) => obj.category === 4);

  const sides = (arr, pageTitle) => {
    return arr.map((obj, index) => {
      return <ProductCard key={obj.id} {...obj} pageTitle={pageTitle} />;
    });
  };

  const skeleton = [...new Array(10)].map((_, index) => <SkeletonProduct key={index} />);

  const errorMessage = loadingStatus === 'error' ? <ErrorMessage /> : null;
  const spinner = loadingStatus === 'waiting' ? <Spinner /> : null;
  const skelet = loadingStatus === 'loading' ? skeleton : null;

  const comboBoxContent = spinner || errorMessage || skelet || sides(comboBox, t('comboboxes'));
  const potatoContent = spinner || errorMessage || skelet || sides(potato, t('potato'));
  const chikenGrillContent = spinner || errorMessage || skelet || sides(chikenGrill, t('chicken'));
  const tostsContent = spinner || errorMessage || skelet || sides(tosts, t('bread'));

  return (
    <div className="container">
      <Sort />
      <Filter filters={filters} />
      <div className="product">
        {activeCategory === 0 ? (
          <PageTitle pageTitle={t('comboboxes')} />
        ) : (
          <PageTitle pageTitle={t(nameCategory)} />
        )}

        <div className="product-content">{comboBoxContent}</div>

        {activeCategory > 0 ? '' : <PageTitle pageTitle={t('potato')} />}

        <div className="product-content">{potatoContent}</div>

        {activeCategory > 0 ? '' : <PageTitle pageTitle={t('chicken')} />}

        <div className="product-content">{chikenGrillContent}</div>

        {activeCategory > 0 ? '' : <PageTitle pageTitle={t('bread')} />}

        <div className="product-content">{tostsContent}</div>
      </div>
    </div>
  );

  // return (
  //   <div className="container">
  //     <Sort />
  //     <Filter filters={filters} />
  //     {activeCategory === 0 ? (
  //       <PageTitle pageTitle={t('comboboxes')} />
  //     ) : (
  //       <PageTitle pageTitle={t(nameCategory)} />
  //     )}
  //     <div className="product">
  //       <div className="product-content">{comboBoxContent}</div>
  //     </div>

  //     {activeCategory > 0 ? '' : <PageTitle pageTitle={t('potato')} />}
  //     <div className="product">
  //       <div className="product-content">{potatoContent}</div>
  //     </div>

  //     {activeCategory > 0 ? '' : <PageTitle pageTitle={t('chicken')} />}
  //     <div className="product">
  //       <div className="product-content">{chikenGrillContent}</div>
  //     </div>

  //     {activeCategory > 0 ? '' : <PageTitle pageTitle={t('bread')} />}
  //     <div className="product">
  //       <div className="product-content">{tostsContent}</div>
  //     </div>
  //   </div>
  // );
}

export default Sides;
