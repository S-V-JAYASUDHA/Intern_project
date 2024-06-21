// src/pages/SignupPage.js

import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    dob: '',
    gender: '',
    country: '',
    religion: '',
    community: '',
    address: '',
    experience: '',
    experienceYears: '',
    genresInterest: [],
    phoneNumber: '',
    otp: '',
    othersText: '',
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        genresInterest: checked
          ? [...prev.genresInterest, value]
          : prev.genresInterest.filter((genre) => genre !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleOtpSend = () => {
    setOtpSent(true);
    alert('OTP sent!'); // Simulate sending OTP
  };

  const handleOtpResend = () => {
    alert('OTP resent!'); // Simulate resending OTP
  };

  const validatePassword = () => {
    const { password } = formData;
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    if (password.length < minLength || !hasUppercase || !hasLowercase || !hasDigit) {
      setPasswordError(
        'Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, and 1 digit.'
      );
      return false;
    }

    setPasswordError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      alert('Form is submitted');
      // Add your form submission logic here
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      dob: '',
      gender: '',
      country: '',
      religion: '',
      community: '',
      address: '',
      experience: '',
      experienceYears: '',
      genresInterest: [],
      phoneNumber: '',
      otp: '',
      othersText: '',
    });
    setOtpSent(false);
    setOtpVerified(false);
    alert('Form is Cleared');
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <h3>SignUp</h3><br /><br />
        <div className="container">
          <label htmlFor="firstName" className="required">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={() => setFormData((prev) => ({ ...prev, firstName: prev.firstName.toUpperCase() }))}
            placeholder="First Name"
            required
          />
        </div>
        <div className="container">
          <label htmlFor="lastName" className="required">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={() => setFormData((prev) => ({ ...prev, lastName: prev.lastName.toUpperCase() }))}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="container">
          <label htmlFor="username" className="required">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div className="container">
          <label htmlFor="password" className="required">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        </div>
        <div className="container">
          <label htmlFor="confirmPassword" className="required">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="container">
          <label htmlFor="email" className="required">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => setFormData((prev) => ({ ...prev, email: prev.email.toLowerCase() }))}
            required
          />
        </div>
        <div className="container">
          <label htmlFor="dob" className="required">DOB</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="container">
          <label htmlFor="gender" className="required">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="container">
          <label htmlFor="country" className="required">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="South Africa">South Africa</option>
            <option value="Australia">Australia</option>
            <option value="Asia">Asia</option>
            <option value="Russia">Russia</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
          </select>
        </div>
        <div className="container">
          <label htmlFor="religion" className="required">Religion</label>
          <select
            id="religion"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            required
          >
            <option value="">Select Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
          </select>
        </div>
        <div className="container">
          <label htmlFor="community" className="required">Community</label>
          <select
            id="community"
            name="community"
            value={formData.community}
            onChange={handleChange}
            required
          >
            <option value="">Select Community</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="MBC">MBC</option>
            <option value="BC">BC</option>
            <option value="OC">OC</option>
          </select>
        </div>
        <div className="container">
          <label htmlFor="address" className="required">Address</label>
          <textarea
            id="address"
            name="address"
            rows="4"
            cols="50"
            value={formData.address}
            onChange={handleChange}
            placeholder="Type your address here..."
            required
          ></textarea>
        </div>
        <div className="container">
          <label htmlFor="experience">Do you have any writing experience?</label>
          <input
            type="radio"
            id="experienceYes"
            name="experience"
            value="yes"
            checked={formData.experience === 'yes'}
            onChange={handleChange}
          /> Yes
          <input
            type="radio"
            id="experienceNo"
            name="experience"
            value="no"
            checked={formData.experience === 'no'}
            onChange={handleChange}
          /> No
        </div>
        {formData.experience === 'yes' && (
          <div className="container">
            <label htmlFor="experienceYears" className="required">Years of Experience</label>
            <input
              type="text"
              id="experienceYears"
              name="experienceYears"
              value={formData.experienceYears}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="container">
          <label htmlFor="genresInterest">Genres of Interest</label>
          <input
            type="checkbox"
            id="genrePoetry"
            name="genresInterest"
            value="Poetry"
            checked={formData.genresInterest.includes('Poetry')}
            onChange={handleChange}
          /> Poetry
          <input
            type="checkbox"
            id="genreStory"
            name="genresInterest"
            value="Story"
            checked={formData.genresInterest.includes('Story')}
            onChange={handleChange}
          /> Story
          <input
            type="checkbox"
            id="genreEssay"
            name="genresInterest"
            value="Essay"
            checked={formData.genresInterest.includes('Essay')}
            onChange={handleChange}
          /> Essay
          <input
            type="checkbox"
            id="genreOthers"
            name="genresInterest"
            value="Others"
            checked={formData.genresInterest.includes('Others')}
            onChange={handleChange}
          /> Others
        </div>
        {formData.genresInterest.includes('Others') && (
          <div className="container">
            <label htmlFor="othersText" className="required">Please specify</label>
            <input
              type="text"
              id="othersText"
              name="othersText"
              value={formData.othersText}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="container">
          <label htmlFor="phoneNumber" className="required">Mobile No.</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
          />
          {!otpSent && (
            <button type="button" onClick={handleOtpSend}>Send OTP</button>
          )}
          {otpSent && !otpVerified && (
            <>
              <label htmlFor="otp" className="required">Enter OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="OTP"
                required
              />
              <button type="button" onClick={() => setOtpVerified(true)}>Verify OTP</button>
              <button type="button" onClick={handleOtpResend}>Resend OTP</button>
            </>
          )}
        </div>
        <div className="container">
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
