import React from 'react';

const Paginate = ({ page, setPage }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <button
        className={page === 1 ? 'paginate-button' : 'paginate-button-off'}
        onClick={() => setPage(1)}
      >
        1
      </button>
      <button
        className={page === 2 ? 'paginate-button' : 'paginate-button-off'}
        onClick={() => setPage(2)}
      >
        2
      </button>
    </div>
  );
};

export default Paginate;
