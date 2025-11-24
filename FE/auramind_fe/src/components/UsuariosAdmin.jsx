import React from "react";
import "../Estilos/UsuariosAdmin.css"

function UsuariosAdmin() {
  return (
    <div>
      <div className="users-container">
        <div className="header-section">
          <h2>Users</h2>
          <button className="add-btn">Add New</button>
        </div>

        <div className="bulk-actions">
          <select>
            <option>Delete</option>
          </select>
          <button className="apply-btn">Apply</button>

          <select>
            <option>Cambiar rol a..</option>
            <option>Administrador</option>
            <option>Psicologo</option>
            <option>Paciente</option>
          </select>
          <button className="apply-btn">Change</button>
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th></th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Posts</th>
            </tr>
          </thead>

          <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="username">
                  <img src="" alt="" className="avatar" />
                  {}
                </td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsuariosAdmin;
