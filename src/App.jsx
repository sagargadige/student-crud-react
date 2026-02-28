import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import StdData from "./components/StdData";
import Home from "./components/Home";
import AppToast from "./components/AppToast";

const STORAGE_KEY = "students";
const TOAST_TIMEOUT_MS = 3200;

const getInitialStudents = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (!storedData) {
    return [];
  }

  try {
    const parsedData = JSON.parse(storedData);
    return Array.isArray(parsedData) ? parsedData : [];
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
};

const App = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [students, setStudents] = useState(getInitialStudents);
  const [editId, setEditId] = useState(null);
  const [toast, setToast] = useState({
    show: false,
    type: "info",
    message: "",
    id: 0,
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    if (!toast.show) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, TOAST_TIMEOUT_MS);

    return () => window.clearTimeout(timeoutId);
  }, [toast.show, toast.id]);

  const showToast = (type, message) => {
    setToast({
      show: true,
      type,
      message,
      id: Date.now(),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ email: "", password: "" });
    setEditId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formData.email.trim();
    const password = formData.password.trim();

    if (!email || !password) {
      showToast("warning", "Please enter both email and password.");
      return;
    }

    if (editId) {
      setStudents((prev) =>
        prev.map((student) =>
          student.id === editId ? { ...student, email, password } : student
        )
      );
      resetForm();
      showToast("success", "Student details updated. Click Student Data to view.");
      return;
    }

    const newStudent = {
      id: Date.now().toString(),
      email,
      password,
    };

    setStudents((prev) => [...prev, newStudent]);
    resetForm();
    showToast("success", "Student record added. Click Student Data to view.");
  };

  const handleEdit = (id) => {
    const selectedStudent = students.find((student) => student.id === id);

    if (!selectedStudent) {
      showToast("error", "Student record not found.");
      return;
    }

    setFormData({
      email: selectedStudent.email,
      password: selectedStudent.password,
    });
    setEditId(selectedStudent.id);
    showToast("info", "Edit mode enabled.");
    navigate("/");
  };

  const handleDelete = (id) => {
    const selectedStudent = students.find((student) => student.id === id);

    if (!selectedStudent) {
      showToast("error", "Student record not found.");
      return;
    }

    setStudents((prev) => prev.filter((student) => student.id !== id));

    if (editId === id) {
      resetForm();
    }

    showToast("success", "Student record deleted.");
  };

  const handleCancelEdit = () => {
    resetForm();
    showToast("info", "Edit canceled.");
  };

  const openStudentsPage = () => {
    navigate("/stddata");
    showToast("info", "Opened student list.");
  };

  const openHomePage = () => {
    navigate("/");
    showToast("info", "Ready to add a new student.");
  };

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Routes>
          <Route
            index
            element={
              <Home
                formData={formData}
                editId={editId}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onCancel={handleCancelEdit}
                onViewStudents={openStudentsPage}
              />
            }
          />
          <Route
            path="/stddata"
            element={
              <StdData
                data={students}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onCreate={openHomePage}
              />
            }
          />
        </Routes>
      </main>
      <AppToast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
};

export default App;
