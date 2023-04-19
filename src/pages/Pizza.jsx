import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzasSlice';

import PizzaCard from '../components/PizzaCard/PizzaCard';
import Spinner from '../components/Spinner/Spinner';
import Skeleton from '../components/PizzaCard/Skeleton';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

import Sort from '../components/Sort/Sort';
import PageTitle from '../components/PageTitle/PageTitle';

import { useTranslation } from 'react-i18next';

import '../components/PizzaCard/pizzacard.scss';

function Pizza() {
  const dispatch = useDispatch();

  const { items, loadingStatus } = useSelector((state) => state.pizzas);
  const { activeSort, inputValue } = useSelector((state) => state.filters);

  const { t } = useTranslation();

  const getPizza = async () => {
    // const sortBy = activeSort.sortProperty.replace('-', '');
    // const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
    // const search = inputValue ? `&search=${inputValue}` : '';

    const sortBy = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = inputValue;

    dispatch(fetchPizzas({ sortBy, order, search }));
  };

  React.useEffect(() => {
    getPizza();
  }, [activeSort, inputValue]);

  const pizzas = items.map((obj, index) => {
    return <PizzaCard key={obj.id} {...obj} />;
  });

  const skeleton = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

  const errorMessage = loadingStatus === 'error' ? <ErrorMessage /> : null;
  const spinner = loadingStatus === 'waiting' ? <Spinner /> : null;
  const skelet = loadingStatus === 'loading' ? skeleton : null;
  const content = spinner || errorMessage || skelet || pizzas;

  return (
    <div className="container">
      <Sort cut={true} />
      <PageTitle pageTitle={t('pagepizza')} />
      <div className="pizza">
        {errorMessage ? errorMessage : <div className="pizza-content">{content}</div>}
      </div>
    </div>
  );
}

export default Pizza;
