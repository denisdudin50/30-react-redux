import { useDispatch, useSelector } from 'react-redux';

import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by text..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <button type="button" onClick={handleResetFilters}>Reset all filters</button>
      </div>
    </div>
  );
};

export default Filter;
