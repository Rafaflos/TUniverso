import React from "react";
import "../Estilos/Table.css";

const Tabl3 = () => {
  const data = [
    {
      id: 1,
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      col4: "Data 4",
      col5: "Data 5",
      col6: "Data 6",
      col7: "Data 7",
    },
    {
      id: 2,
      col1: "Data A",
      col2: "Data B",
      col3: "Data C",
      col4: "Data D",
      col5: "Data E",
      col6: "Data F",
      col7: "Data G",
    },
    // Agrega más filas si es necesario
  ];

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
            <td>{row.col4}</td>
            <td>{row.col5}</td>
            <td>{row.col6}</td>
            <td>{row.col7}</td>
            <td>
              <button className="btn btn-edit">Edit</button>
              <button className="btn btn-delete">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabl3;
