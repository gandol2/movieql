let movies = [
  {
    id: 1,
    name: "나쁜 녀석들: 더 무비",
    score: 6.66
  },
  {
    id: 2,
    name: "애드 아스트라",
    score: 7.21
  },
  {
    id: 3,
    name: "타짜: 원 아이드 잭",
    score: 5.5
  },
  {
    id: 4,
    name: "예스터데이",
    score: 6.83
  },
  {
    id: 5,
    name: "힘을 내요, 미스터 리",
    score: 7.62
  },
  {
    id: 6,
    name: "극장판 헬로카봇 : 달나라를 구해줘!",
    score: 7.52
  },
  {
    id: 7,
    name: "벌새",
    score: 8.98
  },
  {
    id: 8,
    name: "그것: 두 번째 이야기",
    score: 6.23
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
