import PropTypes from 'prop-types';
import { Libro, Mas } from './Icons';

export const NoView = ({ startNewTarea }) => {
  return (
    <div className='text-[#f2f2f2] flex flex-col items-center justify-center gap-3 mt-[400px]'>
      <div className='flex'>
        <h1 className='text-4xl uppercase'>Agregue una Nota</h1>
        <Libro />
      </div>
      <button
        onClick={() => startNewTarea()}
        className='bg-[#f2f2f2] p-4 rounded-[50%] transition-all duration-300 ease-in-out active:scale-90 cursor-pointer'
      >
        <Mas />
      </button>
    </div>
  );
};

NoView.propTypes = {
  startNewTarea: PropTypes.func
};
