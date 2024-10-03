/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Select from "react-select";
import { Link } from 'react-router-dom';
const AddEmployeeSalary = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [staff, setStaff] = useState([
     { value: 1, label: "Select Staff" },
    { value: 2, label: "Williams Bruk" },
    { value: 3, label: "Galaviz Lalema" },
    { value: 4, label: "Tarah Williams" },
  ]);
  return (
    <>
      <Header />
      <Sidebar />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                     <Link to="/employeesalary">Payroll </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="fa fa-angle-right" />
                    </li>
                    <li className="breadcrumb-item active">
                      Add Employee Salary
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Add Employee Salary</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Select Staff </label>
                            <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={staff}
                            />
                          
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Net Salary </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="pay-head-roll">
                            <h5>Earnings</h5>
                          </div>
                          <div className="form-group local-forms">
                            <label>Basic Salary </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>DA (40%) </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>HRA (15%) </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>Conveyance </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>Medical Allowance </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>Others</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="pay-head-roll">
                            <h5>Deductions</h5>
                          </div>
                          <div className="form-group local-forms">
                            <label>TDS </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>ESI </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>PF </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>Prof.Tax </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>Labour Welfare </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group local-forms">
                            <label>Others</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="doctor-submit text-end">
                            <button
                              type="submit"
                              className="btn btn-primary submit-form me-2"
                            >
                              Submit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary cancel-form"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AddEmployeeSalary;
