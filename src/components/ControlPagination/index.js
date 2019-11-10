import React from 'react';
import PropTypes from 'prop-types';

import { ControlPages } from './styles';

export default function ControlePagination({
  objectLength,
  page,
  handleChangePage,
}) {
  return (
    <ControlPages
      grayStart={page === 1 ? '#999' : '#df4658'}
      grayEnd={objectLength === 0 ? '#999' : '#df4658'}
    >
      <button
        type="button"
        className="start"
        onClick={() => handleChangePage(page - 1)}
      >{`<`}</button>
      <p>{page}</p>
      <button
        type="button"
        className="end"
        onClick={() => handleChangePage(page + 1)}
      >{`>`}</button>
    </ControlPages>
  );
}

ControlePagination.propTypes = {
  objectLength: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};
