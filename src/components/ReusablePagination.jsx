import React from "react";

const ReusablePagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  totalItems = 0,
  itemsPerPage = 10,
  showPageInfo = true,
  className = "",
}) => {
  const computedTotalPages = Math.max(
    1,
    totalPages || Math.ceil(totalItems / itemsPerPage)
  );
  const safeCurrentPage = Math.min(Math.max(1, currentPage), computedTotalPages);

  const handlePageChange = (page) => {
    if (
      typeof onPageChange === "function" &&
      page >= 1 &&
      page <= computedTotalPages &&
      page !== safeCurrentPage
    ) {
      onPageChange(page);
    }
  };

  const startEntry =
    totalItems === 0 ? 0 : (safeCurrentPage - 1) * itemsPerPage + 1;
  const endEntry = totalItems === 0 ? 0 : Math.min(safeCurrentPage * itemsPerPage, totalItems);

  return (
    <div
      className={`flex min-h-10 w-full flex-col gap-3 md:flex-row md:items-center md:justify-between ${className}`}
    >
      {showPageInfo ? (
        <p className="text-sm font-normal leading-5 text-gray-600">
          {`Showing ${startEntry} to ${endEntry} of ${totalItems} entries`}
        </p>
      ) : (
        <span />
      )}

      <div className="inline-flex h-10 items-center gap-2">
        <button
          type="button"
          onClick={() => handlePageChange(safeCurrentPage - 1)}
          disabled={safeCurrentPage === 1}
          className="h-10 min-w-24 rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium leading-5 text-gray-600 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        <button
          type="button"
          className="h-10 w-10 rounded-lg border border-[#2A4870] bg-[#2A4870] text-sm font-medium leading-5 text-white"
        >
          {safeCurrentPage}
        </button>

        <button
          type="button"
          onClick={() => handlePageChange(safeCurrentPage + 1)}
          disabled={safeCurrentPage === computedTotalPages}
          className="h-10 min-w-16 rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium leading-5 text-gray-600 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReusablePagination;
