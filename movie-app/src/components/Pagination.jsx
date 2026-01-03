export default function Pagination({
  NextPage,
  PreviousPage,
  currentPage,
  totalPages,
}) {
  return (
    <nav>
      <ul className="pagination d-flex justify-content-between">
        <li className={currentPage != 1 ? "page-item" : "page-item disabled"}>
          <a href="#" onClick={PreviousPage} className="page-link">
            Geri
          </a>
        </li>
        <li
          className={
            currentPage != totalPages ? "page-item" : "page-item disabled"
          }
        >
          <a href="#" onClick={NextPage} className="page-link">
            İleri
          </a>
        </li>
      </ul>
    </nav>
  );
}
