import React from "react";

const Home = ({ formData, editId, onChange, onSubmit, onCancel, onViewStudents }) => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <section className="content-card">
            <div className="section-title-wrap">
              <h1 className="section-title">
                {editId ? "Update Student" : "Register Student"}
              </h1>
              <p className="section-subtitle">
                Keep student credentials organized with a clean and simple dashboard.
              </p>
            </div>

            <form method="post" onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="studentEmail" className="form-label form-label-light">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control app-input"
                  id="studentEmail"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="studentPassword" className="form-label form-label-light">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control app-input"
                  id="studentPassword"
                  name="password"
                  value={formData.password}
                  onChange={onChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-accent w-100 mt-3">
                {editId ? "Update Student" : "Add Student"}
              </button>

              {editId && (
                <button
                  type="button"
                  className="btn btn-soft w-100 mt-2"
                  onClick={onCancel}
                >
                  Cancel Edit
                </button>
              )}

              <button
                type="button"
                className="btn btn-ghost w-100 mt-2"
                onClick={onViewStudents}
              >
                Go To Student List
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
