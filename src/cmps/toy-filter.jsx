import * as React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { utilService } from '../services/util.service';

export const ToyFilter = ({ setFilterByStore, filterByStore, onAddToy }) => {
  const [filterBy, setFilterBy] = useState(filterByStore);

  const inStockOptions = [
    { value: 'All', label: 'All' },
    { value: 'inStock', label: 'In stock' },
    { value: 'outOfStock', label: 'Out of stock' },
  ];

  return (
    <React.Fragment>
      <div className='form-filter-container'>
        <form
          className='toy-filter'
          onSubmit={(ev) => {
            ev.preventDefault();
            setFilterByStore(filterBy);
          }}
        >
          <label htmlFor='by-status'>Search By Name:</label>
          <input
            placeholder='Search by text'
            type='text'
            id='by-txt'
            name='name'
            value={filterBy.name}
            onChange={({ target }) => {
              setFilterBy({ ...filterBy, name: target.value });
            }}
          />
          <Select
            placeholder={utilService.capitalizeFirstLetter(filterBy.inStock)}
            defaultValue={filterBy.inStock}
            options={inStockOptions}
            onChange={(ev) => {
              setFilterBy({ ...filterBy, inStock: ev.value });
            }}
          ></Select>
          <button>Filter</button>
        </form>
          <button
          onClick={()=> {
            onAddToy(true)
          }}
           >Add Toy</button>
      </div>
    </React.Fragment>
  );
};
