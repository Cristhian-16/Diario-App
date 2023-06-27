import { useTareas } from './hooks/useTareas';

import { Favoritos, TresLineas, Footer, ItemTarea, NoView } from './components';
import { useDispatch } from 'react-redux';
import { orderFavorite } from './store/journal/journalSlice';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function App() {
  const {
    handleChange,
    handleSubmit,
    form,
    onClickTarea,
    startNewTarea,
    activeTarea,
    tareas
  } = useTareas();

  const dispatch = useDispatch();
  const handleClic = () => {
    dispatch(orderFavorite());
  };

  const currentDate = new Date(form.date);
  const formattDate = format(currentDate, "eeee d 'de' MMMM 'del' yyyy", {
    locale: es,
    useAdditionalWeekYearTokens: true,
    useAdditionalDayOfYearTokens: true
  });

  return (
    <>
      <div className='h-screen grid grid-cols-4'>
        <aside className='mx-3 my-4 border-r pr-5'>
          <header className='flex justify-between items-center border-b border-gray-950 cursor-default'>
            <h1 className='text-4xl'>DIARIOAPP</h1>
            <TresLineas />
          </header>

          <div
            onClick={handleClic}
            className='flex justify-end mt-5 gap-3 cursor-pointer'
          >
            <p>Favoritos</p>
            <Favoritos />
          </div>

          <nav className=' flex flex-col mt-5 gap-3'>
            <ul className='container px-4 py-3 flex flex-col gap-3'>
              {tareas.map(tarea => (
                <ItemTarea
                  toogle={tarea.favorite}
                  key={tarea.id}
                  onClickTarea={onClickTarea}
                  tarea={tarea}
                />
              ))}
            </ul>
          </nav>

          <Footer />
        </aside>
        <main className='col-span-3 mx-10 my-10 bg-[#112545]  shadow-md shadow-[#112545] transition-all duration-500 ease-in-out'>
          {activeTarea ? (
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <div className='text-[#f2f2f2] flex items-center justify-between mx-10 mt-5'>
                <h2 className='text-2xl'>{formattDate}</h2>
                <div className='flex gap-5'>
                  <button className='bg-[#ff312e] px-5 py-2 transition-all duration-300 ease-in-out active:scale-90 hover:bg-red-500'>
                    Guardar
                  </button>
                </div>
              </div>

              <div className='flex flex-col mx-4 mt-10'>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  placeholder='Ingrese un Titulo'
                  onChange={handleChange}
                  autoComplete='off'
                  className='text-black outline-none shadow-md shadow-[#112545] h-10 pl-3'
                />
                <textarea
                  name='body'
                  placeholder='Ingrese una Descripcion'
                  value={form.body}
                  onChange={handleChange}
                  className='outline-none resize-none h-60 pl-3 mt-5 pt-4'
                />
              </div>

              <div className='container-2 grid grid-cols-5 mx-4 mt-10 gap-3 px-4'>
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
                <img src='/public/messi.webp' alt='Messi' />
              </div>
            </form>
          ) : (
            <NoView startNewTarea={startNewTarea} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
