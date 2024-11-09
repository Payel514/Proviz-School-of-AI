import React, { useState } from 'react';
import './App.css';

function App() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        statement: '',
    });
    const [submittedData, setSubmittedData] = useState(null); // To store submitted data

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        console.log('Form Data Submitted:', formData);
        setSubmittedData(formData); // Store submitted data to display it
        setFormData({ name: '', phone: '', email: '', statement: '' }); // Clear the form
        setIsFormOpen(false); // Close the form
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Proviz School of AI</h1>
                <p>Empowering the next generation of AI leaders</p>
                <button onClick={() => setIsFormOpen(true)}>Apply Now</button>
            </header>

            <section className="intro">
                <h2>Welcome to Proviz School of AI</h2>
                <p>At Proviz School of AI, we strive to provide a top-notch education in artificial intelligence and machine learning, preparing students for the challenges of the future.</p>
            </section>

            <section className="highlights">
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Comprehensive AI Curriculum</li>
                    <li>Experienced Instructors</li>
                    <li>Hands-on Projects and Real-World Applications</li>
                </ul>
            </section>

            {isFormOpen && (
                <div className="form-overlay">
                    <div className="form-container">
                        <h2>Application Form</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                name="statement"
                                placeholder="Why are you interested?"
                                value={formData.statement}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setIsFormOpen(false)}>Close</button>
                        </form>
                    </div>
                </div>
            )}

            {submittedData && (
                <div className="submitted-data">
                    <h3>Submitted Data:</h3>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Phone:</strong> {submittedData.phone}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Statement:</strong> {submittedData.statement}</p>
                </div>
            )}
        </div>
    );
}

export default App;
