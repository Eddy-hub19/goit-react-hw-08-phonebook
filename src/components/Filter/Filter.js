import { Label } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleOnChange = e => dispatch(setFilter(e.target.value));

  return (
    <div>
      <div>
        <Label htmlFor={filter}>Find contacts by name</Label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
