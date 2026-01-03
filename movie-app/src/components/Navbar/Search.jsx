export default function Search({ query, setQuery, setCurrentPage }) {
  return (
    <div className="col-4">
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
          setCurrentPage(1);
        }}
        value={query}
        className="form-control"
        placeholder="Film ara..."
      />
    </div>
  );
}
