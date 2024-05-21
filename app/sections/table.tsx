import { ReactNode, useCallback } from "react"

type ColumnDefProps = {
  title: string;
  sortable?: boolean;
}

export type ColumnDef<T> = ({
  key: string,
  renderCell: (item: T) => ReactNode;
} & ColumnDefProps) |
  ({
    key: keyof T,
    renderCell?: ((item: T, column: ColumnDef<T>) => ReactNode);
  } & ColumnDefProps);

interface DataProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

function isDataColumn<T>(column: ColumnDef<T>): column is ColumnDef<T> & { key: keyof T } {
  return !(column.key in {} as T);
}

export default function Table<T>({
  data,
  columns
}: DataProps<T>) {



  return (
    <table className="w-full">
      <thead>
        <tr>
          {
            columns.map((column, columnIndex) => {
              return (
                <th key={`table-header-cell-${columnIndex}`}
                  className="bg-blue-600 text-white p-2">
                  {column.title}
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="0.63em" height="1em" viewBox="0 0 320 512">
                    <path fill="currentColor"
                      d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41m255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41" />
                  </svg>
                </th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((dataValue, dataValueIndex: number) => {
            return (
              <tr key={`table-body-row-${dataValueIndex}-${JSON.stringify(dataValue)}`}>
                {
                  columns.map((columnValue, columnValueIndex) => {
                    if (isDataColumn(columnValue)) {
                      return (
                        <td key={`table-row-cell-${columnValueIndex}`}>
                          {
                            !columnValue.renderCell ?
                              `${dataValue[columnValue.key]}` :
                              columnValue.renderCell(dataValue, columnValue)
                          }
                        </td>
                      )
                    }
                    return (
                      <td key={`table-row-cell-${columnValueIndex}-${JSON.stringify(dataValue)}`}>
                        {columnValue.renderCell(dataValue)}
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
