import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTarea,
  updateTarea,
  setActive,
  setTareas
} from '../store/journal/journalSlice';
import { nanoid } from 'nanoid';

export const useTareas = () => {
  const { activeTarea, tareas } = useSelector(state => state.journal);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    body: '',
    favorite: false,
    date: new Date()
  });

  useEffect(() => {
    const storedTareas = JSON.parse(localStorage.getItem('tareas'));
    if (storedTareas) {
      dispatch(setTareas(storedTareas));
    }
  }, []);

  useEffect(() => {
    if (tareas.length === 0) return;

    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const startNewTarea = () => {
    dispatch(
      setActive({
        name: '',
        body: '',
        favorite: false,
        date: new Date()
      })
    );
  };

  const onClickTarea = tarea => {
    dispatch(setActive(tarea));
    setForm({
      ...form,
      name: tarea.name,
      body: tarea.body,
      favorite: tarea.favorite,
      date: tarea.date
    });
  };

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (activeTarea.id) {
      dispatch(updateTarea({ ...form, id: activeTarea.id }));
    } else {
      dispatch(addTarea({ ...form, id: nanoid() }));
    }
    setForm({
      ...form,
      name: '',
      body: '',
      favorite: false
    });
  };

  return {
    form,
    handleChange,
    onClickTarea,
    handleSubmit,
    activeTarea,
    startNewTarea,
    tareas
  };
};
