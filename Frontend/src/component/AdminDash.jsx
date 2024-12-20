import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDash = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !mobile || !email) {
      alert('All fields are required!');
      return;
    }

    const generatedPassword = Math.random().toString(36).slice(-8);
    const emailBody = `
      Hello ${name},

      Your account has been created successfully!
      Here are your login credentials:

      Email: ${email}
      Password: ${generatedPassword}

      Please log in to the application using these credentials.

      Regards,
      Admin
    `;

    // Sending email logic (placeholder)
    console.log(`Sending email to ${email}:\n${emailBody}`);
    alert('User details submitted, and email sent!');

    // Reset form
    setName('');
    setMobile('');
    setEmail('');

    // Redirect to the admin dashboard after successful form submission
    navigate('/admin-dash');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navbarContent}>
          <h3 style={styles.navbarBrand}>Admin Panel</h3>
          <ul style={styles.navbarMenu}>
            <li><a href="/" style={styles.navbarLink}>Home</a></li>
            <li><a href="/admin-dash" style={styles.navbarLink}>Dashboard</a></li>
            <li><a href="/" style={styles.navbarLink}>Logout</a></li>
          </ul>
        </div>
      </nav>

      {/* New Member Button outside navbar positioned to the right side of the screen */}
      <button onClick={() => setShowForm(!showForm)} style={styles.newMemberButton}>
        New Member
      </button>

      {/* Conditional rendering of the dashboard or the registration form */}
      <div style={styles.container}>
        {showForm ? (
          <div>
            <h1 style={styles.header}>Register New Member</h1>

            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <input
              type="tel"
              placeholder="Enter Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />

            <button onClick={handleSubmit} style={styles.button}>
              Submit
            </button>
          </div>
        ) : (
           
          <div style={styles.max}>
            <h1 style={styles.header}>Dashboard</h1><br></br>
            <p>Welcome to the admin dashboard. Manage your members here.</p>
          </div>
         
        )}
      </div>
    </div>
  );
};

export default AdminDash;

const styles = {
    navbar: {
      backgroundColor: '#343a40',
      padding: '10px 20px',
    },
    navbarContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navbarBrand: {
      color: '#fff',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    navbarMenu: {
      listStyle: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },
    navbarLink: {
      color: '#fff',
      padding: '0 15px',
      textDecoration: 'none',
      fontSize: '16px',
    },
    newMemberButton: {
      position: 'fixed', // Fixing the position relative to the viewport
      top: '80px', // Placing it near the top
      right: '10px', // Aligning it to the right side
      padding: '10px 35px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      zIndex: 100, // Ensures the button stays on top of other elements
      fontSize: '16px', // Default font size
    },
    container: {
      maxWidth: '500px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },

    max:{
       margin: '20px'
    },
  
    // Responsive styles for smaller screens
    '@media screen and (max-width: 768px)': {
      newMemberButton: {
        top: '20px', // Move the button higher for smaller screens
        right: '10px',
        padding: '10px 25px',
        fontSize: '14px', // Smaller font size for smaller screens
      },
    },
    
    '@media screen and (max-width: 480px)': {
      newMemberButton: {
        top: '10px', // Move the button even higher for mobile
        right: '5px', // Reduce the right margin
        padding: '10px 20px', // Adjust padding for smaller screens
        fontSize: '12px', // Smaller font size for mobile
      },
    },
  };
  