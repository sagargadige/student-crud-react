import React, { useMemo, useState } from "react";

const StdData = ({ data, onEdit, onDelete, onCreate }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return data;
    }

    return data.filter((student) => student.email.toLowerCase().includes(query));
  }, [data, searchTerm]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <section className="content-card">
            <div className="section-header">
              <div>
                <h1 className="section-title mb-1">Student Data</h1>
                <p className="section-subtitle mb-0">
                  Manage all student records and perform quick actions.
                </p>
              </div>
              <button type="button" className="btn btn-accent" onClick={onCreate}>
                Add New Student
              </button>
            </div>

            <div className="table-search-wrap mb-3">
              <input
                type="search"
                className="form-control app-input table-search-input"
                placeholder="Search by email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="table-wrap">
              <table className="table app-table align-middle text-center">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="empty-state">
                        {data.length === 0
                          ? "No student data found."
                          : "No matching student found."}
                      </td>
                    </tr>
                  ) : (
                    filteredData.map((student, index) => (
                      <tr key={student.id}>
                        <td>{index + 1}</td>
                        <td>{student.email}</td>
                        <td>{student.password}</td>
                        <td>
                          <div className="table-actions">
                            <button
                              type="button"
                              className="btn btn-edit btn-sm"
                              onClick={() => onEdit(student.id)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-delete btn-sm"
                              onClick={() => onDelete(student.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StdData;
