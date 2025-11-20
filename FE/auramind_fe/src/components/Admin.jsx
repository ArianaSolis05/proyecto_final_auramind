import React from "react";
import "../Estilos/Admin.css";

function Admin() {
  return (
    <div>
      <div className="sidebar">
        <h3 className="p-3">Architect</h3>

        <a href="#">
          <i className="fa fa-chart-bar me-2"></i> Dashboard
        </a>
        <a href="#">
          <i className="fa fa-table me-2"></i> Components
        </a>
        <a href="#">
          <i className="fa fa-cubes me-2"></i> Widgets
        </a>
        <a href="#">
          <i className="fa fa-file-alt me-2"></i> Pages
        </a>
      </div>
      <div className="content">
        <div className="topbar d-flex justify-content-between align-items-center mb-4">
          <h4 className="m-0">Analytics Dashboard</h4>
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="card p-3">
              <h6>Cash Deposits</h6>
              <h3>1.7M</h3>
              <small className="text-success">+54.7%</small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h6>Invested Dividends</h6>
              <h3>9M</h3>
              <small className="text-primary">+14.1%</small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h6>Capital Gains</h6>
              <h3>$563</h3>
              <small className="text-success">+7.25%</small>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-lg-8">
            <div className="card p-3">
              <h6>Technical Support</h6>
              <canvas id="myChart" height="100"></canvas>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3">
              <h6>Timeline Example</h6>
              <ul className="list-group">
                <li className="list-group-item">📌 All Hands Meeting</li>
                <li className="list-group-item">
                  ⚙️ Build the production release
                </li>
                <li className="list-group-item">🔥 Something important</li>
                <li className="list-group-item">📝 Send documents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
