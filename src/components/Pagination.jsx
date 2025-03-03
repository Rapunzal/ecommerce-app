export const Pagination = ({ productPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center">
      <nav
        class="flex items-center gap-x-1  border border-gray-100"
        aria-label="Pagination"
      >
        <ul className="flex items-center gap-x-1">
          {pageNumbers.map((num) => (
            <li key={num}>
              <button
                onClick={() => paginate(num)}
                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                {num}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
