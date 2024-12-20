import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDash = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState(null); // Store user data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    educationLevel: "",
    course: "",
    specialization: "",
  });

  const educationHierarchy = {
    "Post Graduation": ["MBA", "MCA", "M.Tech"],
    Graduation: ["B.Tech", "B.Com", "B.Sc"],
    "Under Graduation": [],
    Intermediate: [],
    "10th": [],
  };

  const specializationOptions = {
    "B.Tech": ["CSE", "ECE", "IT", "Mechanical"],
    MBA: ["Finance", "Marketing", "HR"],
    MCA: ["Software Development", "Data Science"],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData); // Save form data
    setShowForm(false); // Hide form
    alert("Details Submitted Successfully!");
  };

  const handleEdit = () => {
    setShowForm(true); // Show the form in editable mode
  };

  return (
    <div class="userdash" style={styles.container}>
      {/* Navigation Bar */}
      <header style={styles.navbar}>
        <h4 style={styles.brand}>Your Dashboard</h4>
        <nav style={styles.navLinks}>
          <button
            onClick={() => setShowForm(true)}
            style={styles.navButton}
          >
            Profile
          </button>
          <button onClick={() => navigate("/user-login")} style={styles.logoutButton}>
            Logout
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <h2 style={styles.heading}>Welcome to Your Dashboard!</h2>
        {!showForm && !userData && (
          <div style={styles.featuresContainer}>
            <div
              style={styles.featureCard}
              onClick={() => setShowForm(true)}
            >
              <h3>Profile</h3>
              <p>Fill your personal and educational details.</p>
            </div>
          </div>
        )}
        {showForm && (
          <div style={styles.modal}>
            <form style={styles.form} onSubmit={handleSubmit}>
              <h3>Student Registration Form</h3>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Mobile:</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
              <label>Gender:</label>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleInputChange}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleInputChange}
                />
                Female
              </div>
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
              <label>Education Level:</label>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                {Object.keys(educationHierarchy).map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              {educationHierarchy[formData.educationLevel]?.length > 0 && (
                <>
                  <label>Course:</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    {educationHierarchy[formData.educationLevel].map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </>
              )}
              {specializationOptions[formData.course]?.length > 0 && (
                <>
                  <label>Specialization:</label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    {specializationOptions[formData.course].map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </>
              )}
              <button type="submit" style={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        )}
        {userData && !showForm && (
          <div style={styles.userData}>
            <h3>Profile Details</h3>
            <p>
              <strong>Name:</strong> {userData.firstName} {userData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Mobile:</strong> {userData.mobile}
            </p>
            <p>
              <strong>Gender:</strong> {userData.gender}
            </p>
            <p>
              <strong>Date of Birth:</strong> {userData.dob}
            </p>
            <p>
              <strong>Education Level:</strong> {userData.educationLevel}
            </p>
            <p>
              <strong>Course:</strong> {userData.course}
            </p>
            <p>
              <strong>Specialization:</strong> {userData.specialization}
            </p>
            <button onClick={handleEdit} style={styles.editButton}>
              Edit
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserDash;

const styles = {
    userdash: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    navbar: {
      backgroundColor: "#343a40",
      color: "white",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    brand: {
      margin: 0,
      fontSize: "24px",
    },
    navLinks: {
      display: "flex",
      gap: "10px",
    },
    navButton: {
      padding: "10px 15px",
      backgroundColor: "#0056b3",
      border: "none",
      color: "white",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    logoutButton: {
      padding: "10px 15px",
      backgroundColor: "#dc3545",
      border: "none",
      color: "white",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    main: {
      textAlign: "center",
      padding: "50px 20px",
    },
    heading: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#343a40",
    },
    text: {
      fontSize: "18px",
      marginBottom: "30px",
      color: "#6c757d",
    },
    featuresContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    featureCard: {
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      width: "250px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    featureCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
    },
    formcontainer: {
        maxWidth: '500px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
      },
    formVisible: {
      display:"block", // Set to visible when form is active
    },
    submitButton: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    tableContainer: {
      display: "none", // Initially hidden
      marginTop: "20px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    tableVisible: {
      display: "block", // Set to visible when the table is active
    },
    editButton: {
      padding: "10px 15px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    max:{
        margin:"20px"
    }
  };
  