import React from 'react';
import { Button } from './';

const sortBy = [15, 25, 40];

function Pagination({
  currentPage,
  pages,
  pageSize,
  onChangePage,
  onPageSizeChange,
}) {
  if (pages > 1) {
    return (
      <div className='pagination'>
        {currentPage === 1 ? null : (
          <Button
            activity={() => onChangePage(currentPage - 1)}
            divname='number'
          >
            previous
          </Button>
        )}
        {Array(pages)
          .fill(null)
          .map((_, i) => {
            return (
              <Button
                key={i}
                divname={`number ${i + 1 === currentPage && 'active'}`}
                activity={() => onChangePage(i + 1)}
              >
                {i + 1}
              </Button>
            );
          })}
        {pages === currentPage ? null : (
          <Button
            activity={() => onChangePage(currentPage + 1)}
            divname='number'
          >
            next
          </Button>
        )}
        <div className='right'>
          <span className='number'>sort by </span>
          {sortBy.map((number) => (
            <Button
              key={number}
              activity={() => onPageSizeChange(number)}
              divname={`number ${number === pageSize && 'active'}`}
            >
              {' '}
              {number}
            </Button>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Pagination;
