import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    tareas: [],
    activeTarea: null
  },
  reducers: {
    setTareas: (state, { payload }) => {
      state.tareas = payload;
    },
    addTarea: (state, { payload }) => {
      state.tareas.push(payload);
      state.activeTarea = null;
    },
    setActive: (state, { payload }) => {
      state.activeTarea = payload;
    },
    updateTarea: (state, { payload }) => {
      state.tareas = state.tareas.map(tarea => {
        if (tarea.id === payload.id) {
          return { ...payload };
        } else {
          return tarea;
        }
      });
      state.activeTarea = null;
    },
    toogleFavorite: (state, { payload }) => {
      state.tareas = state.tareas.map(tarea =>
        tarea.id === payload.id
          ? { ...tarea, favorite: !tarea.favorite }
          : tarea
      );
    },
    orderFavorite: state => {
      state.tareas = state.tareas.sort((a, b) => {
        return a.favorite - b.favorite;
      });
    },
    deleteTarea: (state, { payload }) => {
      state.tareas = state.tareas.filter(tarea => tarea.id !== payload);
    }
  }
});
export const {
  addTarea,
  setActive,
  updateTarea,
  setTareas,
  orderFavorite,
  toogleFavorite,
  deleteTarea
} = journalSlice.actions;
