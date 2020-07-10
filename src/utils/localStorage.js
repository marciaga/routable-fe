export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return;
    }

   return JSON.parse(serializedState);
  } catch (error) {
    // TODO - handle this case
    return;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    // TODO - ignore for now, handle this case
  }

}