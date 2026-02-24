import React from "react";

const getAlignClass = (align = "left") => {
  if (align === "center") return "text-center";
  if (align === "right") return "text-right";
  return "text-left";
};

const normalizeColumns = (columns = []) =>
  columns.map((column, index) => ({
    key: column.key ?? column.accessor ?? column.id ?? `column_${index}`,
    label: column.label ?? column.name ?? column.header ?? "",
    width: column.width ?? column.minWidth ?? "160px",
    align: column.align ?? "left",
    headerClassName: column.headerClassName ?? "",
    cellClassName: column.cellClassName ?? "",
    render: column.render ?? column.cell ?? null,
  }));

const ReusableDataTable = ({
  loading = false,
  columns = [],
  data = [],
  customCellRenderers = {},
  onRowClicked,
  rowKey = "id",
  emptyMessage = "No records found.",
  className = "",
}) => {
  const normalizedColumns = normalizeColumns(columns);
  const totalColumns = normalizedColumns.length || 1;

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-gray-100 bg-white ${className}`}
    >
      <div
        className="w-full overflow-x-scroll"
        style={{ scrollbarGutter: "stable both-edges" }}
      >
        <table className="w-full min-w-max border-separate border-spacing-0">
          <colgroup>
            {normalizedColumns.map((column) => (
              <col key={column.key} style={{ width: column.width }} />
            ))}
          </colgroup>

          <thead>
            <tr className="h-14 bg-gray-200">
              {normalizedColumns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-4 text-xs font-semibold leading-4 text-gray-600 ${getAlignClass(
                    column.align
                  )} ${column.headerClassName}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={totalColumns}
                  className="px-6 py-10 text-center text-sm font-medium text-gray-500"
                >
                  Loading...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={totalColumns}
                  className="px-6 py-10 text-center text-sm font-medium text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={row[rowKey] ?? rowIndex}
                  className="h-16 border-b border-gray-100 transition-colors hover:bg-gray-50"
                  onClick={onRowClicked ? () => onRowClicked(row, rowIndex) : undefined}
                >
                  {normalizedColumns.map((column) => {
                    const customRenderer = customCellRenderers[column.key];
                    const renderedValue = customRenderer
                      ? customRenderer(row, column)
                      : column.render
                        ? column.render(row, column)
                        : row[column.key];

                    return (
                      <td
                        key={`${row[rowKey] ?? rowIndex}-${column.key}`}
                        className={`px-6 py-4 text-sm font-medium leading-5 text-gray-600 ${getAlignClass(
                          column.align
                        )} ${column.cellClassName}`}
                      >
                        {renderedValue ?? "-"}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableDataTable;
