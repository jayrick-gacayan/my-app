import { ReactNode } from "react"

export interface ColumnDef<T> { 
  key: keyof T,
  title: string;
  render?: (column: ColumnDef<T>, item: T) => ReactNode;
};

interface DataProps<T>{
  data: T[];
  columns: ColumnDef<T>[];
}

export default function Table<T>({
  data,
  columns 
}: DataProps<T>) { 
  return (
    <table className="w-full">
      <thead>
        {
          columns.map((column, columnIndex) => {
            return (
              <th key={`table-header-cell-${columnIndex}`}
                className="bg-blue-600 text-white p-2">
                {column.title}
              </th>
            )
          })
        }
      </thead>
      <tbody>
        {
          data.map((dataValue, dataValueIndex: number) => { 
            return (
              <tr key={`table-body-row-${dataValueIndex}`}>
                {
                  columns.map((columnValue, columnValueIndex: number) => { 
                    return (
                      <td key={`table-row-cell-${columnValueIndex}`}>
                        {
                          columnValue.render ? 
                            columnValue.render(columnValue, dataValue) : `${dataValue[columnValue.key]}`
                        }
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