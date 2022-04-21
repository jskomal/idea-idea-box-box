const fetchOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_XKEY
  }
}

export const fetchMovies = () => {
  return fetch(
    'https://wordsapiv1.p.rapidapi.com/words/movie/hasTypes',
    fetchOptions
  ).then((res) => res.json())
}

export const fetchPhotos = () => {
  return fetch(
    'https://wordsapiv1.p.rapidapi.com/words/photo/hasTypes',
    fetchOptions
  ).then((res) => res.json())
}

export const fetchColors = () => {
  return fetch(
    'https://wordsapiv1.p.rapidapi.com/words/color/hasTypes',
    fetchOptions
  ).then((res) => res.json())
}

export const fetchAnimals = () => {
  return fetch(
    'https://wordsapiv1.p.rapidapi.com/words/animal/hasTypes',
    fetchOptions
  ).then((res) => res.json())
}
