import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, fetchService } from '../actions/actionCreators';
import ServiceAdd from './ServiceAdd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

function ServiceList(props) {
  const { match, history} = props;
  const { items, loading, error } = useSelector((state) => state.serviceList);
  // eslint-disable-next-line no-unused-vars
  const { isLoading, isError } = useSelector((state) => state.serviceIsLoadng);
  const dispatch = useDispatch();

  useEffect (() => {
    fetchService(dispatch);
  },[dispatch])

  const handleRemove = id => {
    removeService(dispatch, id);
  };

  const handleChange = (id) => {
    history.push(`${match.url}/${id}`);
  };

  const handleRefresh = () => {
    fetchService(dispatch);
  };

  if (loading) {
    return <div className='loading'></div>
  }

  if (error) {
    return (
      <>
        <div className="error-msg">Произошла ошибка!</div>
        <div onClick={handleRefresh}>Refresh</div>
      </>
    );
  }

  return (
    <>
      <ServiceAdd />
      <ul>
        {items && items.map((o) => <li key={o.id}>
          {o.name} {o.price}
          <EditFilled className="button btn" onClick={() => handleChange(o.id)} />
          <DeleteFilled className="button" onClick={() => handleRemove(o.id)} disabled={isLoading}/>
        </li>)}
      </ul>
    </>
  );
}

export default ServiceList;
