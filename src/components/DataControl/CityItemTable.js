import { useMemo } from "react";
import { useTable } from "react-table";

import classes from './CityItemTable.module.css';

const CityItemTable = (props) => {
  const data = useMemo(
    () => props.itemData, [props.itemData]
  );

  const columns = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'cityId', accessor: 'cityId' },
      { Header: 'city', accessor: 'city' },
      { Header: 'role', accessor: 'role' },
      { Header: 'name', accessor: 'name' },
      { Header: 'subName', accessor: 'subName' },
      { Header: 'year', accessor: 'year' },
      { Header: 'latitude', accessor: 'latitude' },
      { Header: 'longitude', accessor: 'longitude' },
      { Header: 'existence', accessor: 'existence' },
      { Header: 'heritage', accessor: 'heritage' },
    ], []
  )

  const tableInstance = useTable({ columns, data});

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <table className={classes.itemTable} {...getTableProps()}>
     <thead>
       {
          headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map(column => (
                <th className={classes.itemTableHead} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))
            }
          </tr>
        ))
       }
     </thead>
     <tbody {...getTableBodyProps()}>
       {
        rows.map(row => {
          prepareRow(row)
          return (
            <tr className={classes.itemTableRow} {...row.getRowProps()}>
              {
                  row.cells.map(cell => {
                    return (
                      <td className={classes.itemTableDataBlock} {...cell.getCellProps()}>
                        {cell.render('Cell')}
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
  );
}

export default CityItemTable;