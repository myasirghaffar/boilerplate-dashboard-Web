import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  ClipboardList,
  Download,
  Eye,
  Mail,
  MoreVertical,
  Pencil,
  Trash2,
  TrendingUp,
} from "lucide-react";

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
    type:
      column.type ??
      (["action", "actions"].includes(
        String(column.key ?? "").toLowerCase()
      )
        ? "dropdown-actions"
        : ""),
    dropdownOptions: column.dropdownOptions ?? column.actionOptions ?? [],
    getDropdownOptions: column.getDropdownOptions ?? null,
    actionOptionKeys: column.actionOptionKeys ?? column.requiredActionOptions ?? [],
    actionHandlers: column.actionHandlers ?? {},
    onActionSelect: column.onActionSelect ?? null,
    menuClassName: column.menuClassName ?? "",
    triggerClassName: column.triggerClassName ?? "",
    render: column.render ?? column.cell ?? null,
  }));

const resolveMaybeFn = (value, ...args) =>
  typeof value === "function" ? value(...args) : value;

const ACTION_ICON_MAP = {
  view: Eye,
  details: Eye,
  edit: Pencil,
  delete: Trash2,
  download: Download,
  bid: BriefcaseBusiness,
  received: Mail,
  vacancies: ClipboardList,
  boost: TrendingUp,
};

const ACTION_OPTION_LIBRARY = {
  "view-details": {
    key: "view-details",
    label: "View Details",
    icon: "view",
    variant: "primary",
  },
  "download-cv": {
    key: "download-cv",
    label: "Download CV",
    icon: "download",
  },
  edit: {
    key: "edit",
    label: "Edit",
    icon: "edit",
  },
  "view-bid": {
    key: "view-bid",
    label: "View Bid",
    icon: "bid",
  },
  "view-received-bid": {
    key: "view-received-bid",
    label: "View Received Bid",
    icon: "received",
  },
  "view-vacancies": {
    key: "view-vacancies",
    label: "View Vacancies",
    icon: "vacancies",
  },
  boost: {
    key: "boost",
    label: "Boost",
    icon: "boost",
  },
  delete: {
    key: "delete",
    label: "Delete",
    icon: "delete",
    variant: "danger",
  },
};

const DEFAULT_ACTION_OPTION_KEYS = ["view-details", "edit", "delete"];

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
  const [openMenuKey, setOpenMenuKey] = useState(null);
  const activeDropdownRef = useRef(null);

  const normalizedData = useMemo(() => data ?? [], [data]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openMenuKey &&
        activeDropdownRef.current &&
        !activeDropdownRef.current.contains(event.target)
      ) {
        setOpenMenuKey(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuKey]);

  useEffect(() => {
    setOpenMenuKey(null);
  }, [normalizedData]);

  const getActionOptions = (column, row, rowIndex) => {
    const columnOptions = column.getDropdownOptions
      ? column.getDropdownOptions(row, rowIndex, column)
      : resolveMaybeFn(column.dropdownOptions, row, rowIndex, column);

    const resolved = Array.isArray(columnOptions) ? columnOptions : [];
    if (resolved.length > 0) return resolved;

    const requestedKeys =
      column.actionOptionKeys.length > 0
        ? column.actionOptionKeys
        : DEFAULT_ACTION_OPTION_KEYS;

    const mappedOptions = requestedKeys
      .map((key) => {
        const optionTemplate = ACTION_OPTION_LIBRARY[key];
        if (!optionTemplate) return null;
        const mappedHandler = column.actionHandlers[key];
        return {
          ...optionTemplate,
          onClick: mappedHandler ?? optionTemplate.onClick,
        };
      })
      .filter(Boolean);

    return mappedOptions.length > 0
      ? mappedOptions
      : DEFAULT_ACTION_OPTION_KEYS.map((key) => ACTION_OPTION_LIBRARY[key]);
  };

  const renderDropdownActions = (column, row, rowIndex) => {
    const rowIdentifier = row[rowKey] ?? rowIndex;
    const menuKey = `${rowIdentifier}-${column.key}`;
    const isOpen = openMenuKey === menuKey;
    const isLastTwoRows = rowIndex >= normalizedData.length - 2;
    const actionOptions = getActionOptions(column, row, rowIndex).filter(
      (option) => !resolveMaybeFn(option.hidden, row, rowIndex)
    );

    return (
      <div
        ref={isOpen ? activeDropdownRef : null}
        className="relative inline-flex items-center justify-center"
      >
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setOpenMenuKey((previous) => (previous === menuKey ? null : menuKey));
          }}
          className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 ${column.triggerClassName}`}
          aria-label="Open actions menu"
        >
          <MoreVertical className="h-5 w-5" />
        </button>

        {isOpen ? (
          <div
            className={`absolute right-0 z-50 w-52 overflow-hidden rounded-2xl border border-gray-300 bg-white px-4 py-3 shadow-lg ${
              isLastTwoRows ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
            } ${column.menuClassName}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-3">
              {actionOptions.map((option, optionIndex) => {
                const IconComponent =
                  typeof option.icon === "string"
                    ? ACTION_ICON_MAP[option.icon]
                    : option.icon ??
                    (option.iconName ? ACTION_ICON_MAP[option.iconName] : null);
                const isDisabled = Boolean(
                  resolveMaybeFn(option.disabled, row, rowIndex)
                );
                const isPrimary = option.variant === "primary";
                const isDanger = option.variant === "danger";

                return (
                  <button
                    key={option.key ?? `${option.label}-${optionIndex}`}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => {
                      if (isDisabled) return;
                      option.onClick?.(row, rowIndex, option, column);
                      column.onActionSelect?.({
                        actionKey: option.key,
                        row,
                        rowIndex,
                        column,
                        option,
                      });
                      if (option.closeOnSelect !== false) {
                        setOpenMenuKey(null);
                      }
                    }}
                    className={`inline-flex w-full items-center gap-3 rounded-md px-3 py-1.5 text-left text-sm font-normal leading-5 transition-colors ${isPrimary
                        ? "text-gray-600 hover:bg-[#2A4870] hover:text-white"
                        : isDanger
                          ? "text-rose-600 hover:bg-rose-50"
                          : "text-gray-600 hover:bg-gray-50"
                      } ${isDisabled ? "cursor-not-allowed opacity-50" : ""} ${option.className ?? ""
                      }`}
                  >
                    {IconComponent ? (
                      <IconComponent className="h-4 w-4 flex-shrink-0" />
                    ) : null}
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  };

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
            ) : normalizedData.length === 0 ? (
              <tr>
                <td
                  colSpan={totalColumns}
                  className="px-6 py-10 text-center text-sm font-medium text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              normalizedData.map((row, rowIndex) => (
                <tr
                  key={row[rowKey] ?? rowIndex}
                  className="h-16 border-b border-gray-100 transition-colors hover:bg-gray-50"
                  onClick={onRowClicked ? () => onRowClicked(row, rowIndex) : undefined}
                >
                  {normalizedColumns.map((column) => {
                    const customRenderer = customCellRenderers[column.key];
                    const renderedValue =
                      column.type === "dropdown-actions"
                        ? renderDropdownActions(column, row, rowIndex)
                        : customRenderer
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
