import { useEffect, useState } from "react";
import useMovies from "./hooks/useMovies";
import useLocalStorage from "./hooks/useLocalStorage";
import Pagination from "./components/Pagination";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import Nav from "./components/Navbar/Nav";
import Logo from "./components/Navbar/Logo";
import Search from "./components/Navbar/Search";
import NavSearchResults from "./components/Navbar/NavSearchResults";
import Main from "./components/Main";
import ListContainer from "./components/ListContainer";
import MovieList from "./components/Movies/MovieList";
import MyListSummary from "./components/SelectedMovies/MyListSummary";
import MyMovieList from "./components/SelectedMovies/MyMovieList";
import MovieDetails from "./components/Movies/MovieDetails";

const api_key = "3424d512df114e85612d3e123d068afc";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedMovies, setSelectedMovies] = useLocalStorage(
    [],
    "selectedMovies"
  );
  const [selectedMovie, setSelectedMovie] = useState(null);

  const {
    movies,
    loading,
    error,
    setCurrentPage,
    currentPage,
    totalPages,
    totalResults,
    NextPage,
    PreviousPage,
  } = useMovies(query);

  function handleSelectedMovie(id) {
    setSelectedMovie((selectedMovie) => (id === selectedMovie ? null : id));
  }

  function handleUnselectedMovie() {
    setSelectedMovie(null);
  }

  function handleAddToList(movie) {
    setSelectedMovies((selectedMovies) => [...selectedMovies, movie]);
    handleUnselectedMovie();
  }

  function handleDeleteFromList(id) {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((m) => m.id !== id)
    );
  }

  return (
    <>
      <Nav>
        <Logo />
        <Search
          query={query}
          setQuery={setQuery}
          setCurrentPage={setCurrentPage}
        />
        <NavSearchResults totalResults={totalResults} />
      </Nav>
      <Main>
        <div className="row mt-2">
          <div className="col-md-9">
            <ListContainer>
              {/* {loading ? <Loading /> : <MovieList movies={movies} />} */}

              {loading && <Loading />}
              {!loading && !error && (
                <>
                  {movies.length > 0 && (
                    <>
                      <MovieList
                        movies={movies}
                        onSelectMovie={handleSelectedMovie}
                        selectedMovie={selectedMovie}
                      />
                      <Pagination
                        NextPage={NextPage}
                        PreviousPage={PreviousPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                      />
                    </>
                  )}
                </>
              )}
              {error && <ErrorMessage message={error} />}
            </ListContainer>
          </div>
          <div className="col-md-3">
            <ListContainer>
              {selectedMovie ? (
                <MovieDetails
                  selectedMovie={selectedMovie}
                  onUnselectMovie={handleUnselectedMovie}
                  onAddToList={handleAddToList}
                  selectedMovies={selectedMovies}
                />
              ) : (
                <>
                  <MyListSummary selectedMovies={selectedMovies} />
                  <MyMovieList
                    selectedMovies={selectedMovies}
                    OnDeleteFromList={handleDeleteFromList}
                  />
                </>
              )}
            </ListContainer>
          </div>
        </div>
      </Main>
    </>
  );
}
