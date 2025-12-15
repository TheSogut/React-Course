export default function Summary({ items }) {
  if (items.length === 0) {
    return (
      <footer className="summary">
        Alışveriş listenizi hazırlamaya başlayabilirsiniz
      </footer>
    );
  }

  const itemsCount = items.length;
  const completedItemsCount = items.filter((item) => item.completed).length;

  return (
    <footer className="summary">
      {itemsCount === completedItemsCount ? (
        <p>Alışverişi Tamamladınız</p>
      ) : (
        <p>
          Alışveriş sepetinizde {itemsCount} üründen {completedItemsCount}{" "}
          tanesini aldınız.
        </p>
      )}
    </footer>
  );
}
