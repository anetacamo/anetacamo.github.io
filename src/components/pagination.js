import React from 'react';
import { Button } from './';

const sortBy = [10, 25, 40];

function Pagination({
  page,
  pages,
  onChangePage,
  onPageSizeChange,
  thisPages,
}) {
  if (pages > 1) {
    return (
      <div className='pagination'>
        {page === 1 ? null : (
          <Button activity={() => onChangePage(page - 1)} divname='number'>
            previous
          </Button>
        )}
        {Array(pages)
          .fill(null)
          .map((_, i) => {
            const thisPage = i + 1;
            return (
              <Button
                key={i}
                divname={`number ${page === thisPage && 'active'}`}
                activity={() => onChangePage(thisPage)}
              >
                {thisPage}
              </Button>
            );
          })}
        {pages === page ? null : (
          <Button activity={() => onChangePage(page + 1)} divname='number'>
            next
          </Button>
        )}
        <div className='right'>
          <span className='number'>sort by </span>
          {sortBy.map((number) => (
            <Button
              key={number}
              activity={() => onPageSizeChange(number)}
              divname={`number ${number === thisPages && 'active'}`}
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
