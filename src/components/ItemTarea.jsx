import PropTypes from 'prop-types';
import { DeleteIcon, NoSend, Send } from './Icons';
import { useDispatch } from 'react-redux';
import { deleteTarea, toogleFavorite } from '../store/journal/journalSlice';
import { format } from 'date-fns';

export const ItemTarea = ({ tarea, onClickTarea, toogle }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toogleFavorite(tarea));
  };

  const handleDelete = () => {
    dispatch(deleteTarea(tarea.id));
  };

  const currentDate = new Date(tarea.date);
  const formattedDateTime = format(currentDate, 'dd/MM/yyyy hh:mm a');

  return (
    <div className='flex justify-between gap-3'>
      <div
        onClick={() => onClickTarea(tarea)}
        key={tarea.id}
        className='bg-[#f2f2f2] shadow-md shadow-slate-950 flex items-center justify-between px-3 py-4 cursor-pointer w-[450px]'
      >
        <h2 className='uppercase text-sm'>{tarea.name}</h2>
        <p>{formattedDateTime}</p>
      </div>
      <button className='cursor-pointer' onClick={handleClick}>
        {toogle ? <NoSend /> : <Send />}
      </button>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

ItemTarea.propTypes = {
  tarea: PropTypes.object,
  onClickTarea: PropTypes.func,
  toogle: PropTypes.bool
};
