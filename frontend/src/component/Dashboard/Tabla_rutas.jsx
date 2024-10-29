// import React from "react";
//
// function Tabla_rutas() {
//     return (
//         <div>
//             <table className="custom-table">
//                 <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Origen</th>
//                     <th>Destino</th>
//                     <th>Hora de salida</th>
//                     <th>Duracion</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((user) => (
//                     <tr key={user.usuario_id}>
//                         <td>{user.usuario_id}</td>
//                         <td>{user.nombre}</td>
//                         <td>{user.email}</td>
//                         <td>{user.contraseña}</td>
//                         <td>{user.tipo_usuario}</td>
//                         <td>{new Date(user.fecha_registro).toLocaleDateString()}</td>
//                         <td>{user.estado}</td>
//                         <td>
//                             <button
//
//                             >
//                                 Edit
//                             </button>
//                             <button >
//                                 Delete
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
// export default Tabla_rutas