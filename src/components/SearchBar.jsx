import styles from './SearchBar.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const SearchBar = ({ onSubmit }) => {
  const { form, input, button, label } = styles;

  return (
    <form className={form} onSubmit={e => onSubmit(e)}>
      <div>
        <input
          key={nanoid()}
          className={input}
          type="text" name="query"
          autoComplete="on"
          placeholder="Search images..."
        />
        <button type="submit" className={button}>
          <span className={label}>Search</span>
        </button>
      </div>
    </form>
  );
};

SearchBar.propTypes = { onSubmit: PropTypes.func };
