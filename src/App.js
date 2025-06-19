import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router';
import AuthLayout from './components/AuthLayout';
import HospitalDashboardPage from './components/HospitalDashboard';
function App() {
  return (
   
    <Routes>
      <Route path="/" element={<AuthLayout/>}/>
      <Route path="/HospitalSignIn" element={<HospitalDashboardPage/>}/>
   </Routes>
  );
}

export default App;
//Create a ProtectedRoute wrapper
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, allowedRole }) => {
//   const role = localStorage.getItem("role");

//   if (role !== allowedRole) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };
// import { Routes, Route } from "react-router-dom";
// import AuthLayout from "./components/AuthLayout";
// import HospitalDashboardPage from "./pages/HospitalDashboardPage";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<AuthLayout />} />
      
//       <Route
//         path="/HospitalSignIn"
//         element={
//           <ProtectedRoute allowedRole="admin">
//             <HospitalDashboardPage />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }
