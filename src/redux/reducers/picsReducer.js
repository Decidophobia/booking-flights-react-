const initialState = [
  { id: 1, url: '/img/slider/1.jpg' },
  { id: 2, url: '/img/slider/2.jpg' },
  { id: 3, url: '/img/slider/3.jpg' },
  { id: 4, url: '/img/slider/1.jpg' },
];

export function picReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
