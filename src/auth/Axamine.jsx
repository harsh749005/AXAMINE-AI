import React, { useState } from 'react';
import { FaUserMd } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { signup,signInWithGoogle } from "../utils/authHelpers";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const googleprovider = new GoogleAuthProvider();

const AxamineLogin = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('roleSelection');
  const [currentMethod,setCurrentMethod] = useState('login');
  const [role, setRole] = useState(""); 
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
  
      // Redirect based on role
      if (role === "doctor") {
        navigate("/doctorhome");
      } else if (role === "patient") {
        navigate("/");
      } 
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };
  const showDoctorSignup = () => {
    setRole("doctor");
    setCurrentView('doctorSignup');
    setCurrentMethod('signup')
  };

  const showPatientSignup = () => {
    setRole("patient");
    setCurrentView('patientSignup');
    setCurrentMethod('signup')
  };

  const backToSelection = () => {
    setCurrentView('roleSelection');
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      height: '100vh',
      fontFamily: '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <style>
        {`
          .container-fluid {
            height: 100vh;
            display: flex;

          }

          .row {
            width: 100%;
            height: 100%;
            display: flex;
            margin: 0;
          }

          .left-panel {
            background: linear-gradient(135deg, #2689c2, #23389f, #0a1961);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 60px;
            width: 50%;
            box-sizing: border-box;
          }

          .left-panel h1 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 24px;
            margin-top: 0;
            letter-spacing: -0.5px;
          }

          .thought {
            font-style: normal;
            font-size: 18px;
            margin-bottom: 32px;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
            font-weight: 400;
          }

          .vertical-sewa {
            font-size: 24px;
            letter-spacing: 1px;
            line-height: 1.8;
            font-weight: 600;
            margin-bottom: 20px;
          }

          .vertical-sewa span {
            display: block;
          }

          .right-panel {
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            padding: 40px;
            width: 50%;
            box-sizing: border-box;
          }

          .form-box {
            width: 100%;
            max-width: 400px;
          }

          .card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 40px;
            backdrop-filter: blur(10px);
          }

          .text-center {
            text-align: center;
          }

          .mb-2 { margin-bottom: 8px; }
          .mb-3 { margin-bottom: 16px; }
          .mb-4 { margin-bottom: 24px; }
          .mt-2 { margin-top: 8px; }
          .mt-3 { margin-top: 16px; }
          .my-3 { margin-top: 16px; margin-bottom: 16px; }
          .me-2 { margin-right: 8px; }
          .p-0 { padding: 0; }

          .img-fluid {
            max-width: 100%;
            height: auto;
            max-height: 60px;
          }

          .form-control {
            width: 100%;
            padding: 16px 20px;
            margin-bottom: 18px;
            border-radius: 12px;
            height: 52px;
            border: 2px solid #e5e7eb;
            font-size: 16px;
            font-weight: 500;
            box-sizing: border-box;
            outline: none;
            transition: all 0.3s ease;
            background-color: #fafafa;
          }

          .form-control:focus {
            border-color: #4f46e5;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
            background-color: white;
          }

          .form-control::placeholder {
            color: #9ca3af;
            font-weight: 500;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 28px;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s ease;
            box-sizing: border-box;
            text-align: center;
            line-height: 1;
            letter-spacing: 0.3px;
          }

          .btn-primary {
            background: linear-gradient(135deg, #4f46e5, #3b82f6);
            color: white;
            height: 50px;
            box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);
          }

          .btn-primary:hover {
            background: linear-gradient(135deg, #4338ca, #2563eb);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
          }

          .btn-google {
            background-color: #ffffff;
            border: 2px solid #e5e7eb;
            color: #374151;
            height: 50px;
            font-weight: 600;
          }

          .btn-google:hover {
            background-color: #f9fafb;
            border-color: #d1d5db;
            transform: translateY(-1px);
          }

          .btn-link {
            background: none;
            color: #4f46e5;
            border: none;
            text-decoration: none;
            padding: 10px 0;
            height: auto;
            font-weight: 600;
          }

          .btn-link:hover {
            color: #4338ca;
            text-decoration: underline;
          }

          .w-100 {
            width: 100%;
          }

          .d-flex {
            display: flex;
          }

          .justify-content-center {
            justify-content: center;
          }

          .align-items-center {
            align-items: center;
          }

          .d-none {
            display: none !important;
          }

          .text-muted {
            color: #6c757d;
          }

          .fw-bold {
            font-weight: bold;
          }

          .text-decoration-none {
            text-decoration: none;
          }

          .fa-solid, .fab, .material-symbols-outlined {
            font-size: 20px;
          }

          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }

          @media screen and (max-width: 768px) {
            .container-fluid {
              flex-direction: column;
            }
            
            .left-panel {
              display: none;
            }
            
            .right-panel {
              width: 100%;
              padding: 20px;
            }
            
            .card {
              padding: 20px;
            }
          }

          h2 {
            margin: 0 0 16px 0;
            font-size: 24px;
            font-weight: 600;
          }

          p {
            margin: 0 0 16px 0;
            line-height: 1.5;
          }

          a {
            color: #3c51c8;
            text-decoration: none;
          }

          a:hover {
            color: #2a3f9f;
          }
        `}
      </style>

      <div className="container-fluid" >
        <div className="row">
          <div className="left-panel">
            <h1>AI-integrated Diagnostic</h1>
            <div className="thought">
              Caring for people is at the heart of everything we do. Whether you're a doctor looking to serve, or a patient seeking help, <b>axamine.ai</b> brings you closer to quality care.
            </div>
            <div className="vertical-sewa">
              <span>Connecting Doctors</span>
              <span>Empowering Patients</span>
              <span>Improving Healthcare</span>
            </div>
          </div>

          <div className="right-panel">
            <div className="form-box">
              <div className="card">
                <div className="text-center mb-4">
                  <img src="Premium Vector | Health Technology Logo Template.jpg" alt="axamine.ai logo" className="img-fluid" />
                </div>

                {currentView === 'roleSelection' && (
                  <div>
                    <h2 className="text-center mb-3">
                      <i className="fa-solid fa-circle-user me-2"></i> Welcome to axamine.ai
                    </h2>
                    <p className="text-center text-muted mb-4">Connecting care, empowering lives</p>
                    <button className="btn btn-primary w-100 mb-3 d-flex justify-content-center align-items-center" onClick={showDoctorSignup}>
                      <span className="material-symbols-outlined me-2"><FaUserMd /></span> Login as Doctor
                    </button>
                    <button className="btn btn-primary w-100 mb-3 d-flex justify-content-center align-items-center" onClick={showPatientSignup}>
                      <span className="material-symbols-outlined me-2"><FaUser /></span> Login as Patient
                    </button>
                  </div>
                )}

                {currentView === 'doctorSignup' && (
                  currentMethod === 'signup' ? (

                  <div>
                    <button className="btn btn-link p-0 mb-2" onClick={backToSelection}>
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <h2 className="text-center mb-3">Create Account</h2>
                    <p className="text-center text-muted mb-4">Complete your doctor profile</p>
                    <input type="text" className="form-control" placeholder="Hospital Name" />
                    <input type="text" className="form-control" placeholder="Doctor Name" />
                    <input type="tel" className="form-control" placeholder="Contact Number" />
                    <input type="email" className="form-control" placeholder="Email" />
                    <input type="password" className="form-control" placeholder="Password" />
                    <button className="btn btn-primary w-100 mt-2">Create Account</button>
                    <div className="text-center my-3 text-muted">OR</div>
                    <button className="btn btn-google w-100 d-flex justify-content-center align-items-center" onClick={()=>handleGoogleSignIn()}>
                      <i className="fab fa-google me-2"></i> Sign up with Google
                    </button>
                    <div className="text-center mt-3 text-muted">
                      Already have an account? <span className="fw-bold text-decoration-none " style={{cursor:'pointer'}} onClick={()=>setCurrentMethod('login')}>Sign in</span>
                    </div>
                  </div>
                  ):(
                    <div>
                    <button className="btn btn-link p-0 mb-2" onClick={backToSelection}>
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <h2 className="text-center mb-3">login Account</h2>
                    <input type="email" className="form-control" placeholder="Email" />
                    <input type="password" className="form-control" placeholder="Password" />
                    <button className="btn btn-primary w-100 mt-2">Create Account</button>
                    <div className="text-center my-3 text-muted">OR</div>
                    <button className="btn btn-google w-100 d-flex justify-content-center align-items-center" onClick={()=>handleGoogleSignIn()}>
                      <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                    <div className="text-center mt-3 text-muted">
                    create new account <span className="fw-bold text-decoration-none " style={{cursor:'pointer'}} onClick={()=>setCurrentMethod('signup')}>Sign up</span>
                    </div>
                  </div>
                  )
                )}
{currentView === 'patientSignup' && (
  currentMethod === 'signup' ? (
    <div>
      <button className="btn btn-link p-0 mb-2" onClick={backToSelection}>
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
      <h2 className="text-center mb-3">Create Account</h2>
      <p className="text-center text-muted mb-4">Complete your patient profile</p>
      <input type="text" className="form-control" placeholder="Username" />
      <input type="email" className="form-control" placeholder="Email" />
      <input type="password" className="form-control" placeholder="Password" />
      <button className="btn btn-primary w-100 mt-2">Create Account</button>
      <div className="text-center my-3 text-muted">OR</div>
      <button className="btn btn-google w-100 d-flex justify-content-center align-items-center" onClick={handleGoogleSignIn}>
        <i className="fab fa-google me-2"></i> Sign up with Google
      </button>
      <div className="text-center mt-3 text-muted">
        Already have an account? <span className="fw-bold text-decoration-none"style={{cursor:'pointer'}} onClick={()=>setCurrentMethod('login')}>Sign In</span>
      </div>
    </div>
  ) : (
    <div>
      <button className="btn btn-link p-0 mb-2" onClick={backToSelection}>
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
      <h2 className="text-center mb-3">Welcome Back</h2>
      <p className="text-center text-muted mb-4">Complete your patient profile</p>
      <input type="email" className="form-control" placeholder="Email" />
      <input type="password" className="form-control" placeholder="Password" />
      <button className="btn btn-primary w-100 mt-2">Welcome Back</button>
      <div className="text-center my-3 text-muted">OR</div>
      <button className="btn btn-google w-100 d-flex justify-content-center align-items-center" onClick={handleGoogleSignIn}>
        <i className="fab fa-google me-2"></i> Sign in with Google
      </button>
      <div className="text-center mt-3 text-muted" >
        create new account <span className="fw-bold text-decoration-none " style={{cursor:'pointer'}} onClick={()=>setCurrentMethod('signup')}>Sign up</span>
      </div>
    </div>
  )
)}


{}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxamineLogin;