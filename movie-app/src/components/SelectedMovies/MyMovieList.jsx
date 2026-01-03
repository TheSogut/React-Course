import MyListMovie from "./MyListMovie";
export default function MyMovieList({ selectedMovies, OnDeleteFromList }) {
  return selectedMovies.map((movie) => (
    <MyListMovie
      movie={movie}
      key={movie.id}
      OnDeleteFromList={OnDeleteFromList}
    />
  ));
}
