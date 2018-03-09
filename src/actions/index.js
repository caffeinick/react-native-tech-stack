export const selectLibrary = (libraryId) => {
  // this is Action Creator
  return {
    type: 'select_library',
    payload: libraryId
  };
};
