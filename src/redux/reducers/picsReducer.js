const initialState = [
  { id: 1, url: '/img/slider/1.svg' },
  { id: 2, url: '/img/slider/2.svg' },
  { id: 3, url: '/img/slider/3.svg' },
  { id: 4, url: '/img/slider/4.svg' },
];

export function picReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
