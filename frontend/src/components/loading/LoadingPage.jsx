// import  { useEffect, useState } from 'react'
//  import './LoadingPage.css'; // Import the CSS for styling
//  import { FaWhatsapp } from "react-icons/fa";

// const LoadingPage = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => {
//       setIsLoading(false);
//     };

//     window.addEventListener('load', handleLoad);

//     return () => {
//       window.removeEventListener('load', handleLoad);
//     };
//   }, []);
//   if (!isLoading) return null;
//   return (
//     <div className="loading-page">
//       <div className="loading-spinner"></div>
//       <div className="loading-text">
//         <FaWhatsapp/>
//          <p>WhatsApp</p>
//         <p className="subtitle">End-to-end encrypted</p>
//       </div>
//     </div>
//   );
// };

// export default LoadingPage;


// components/loading/LoadingPage.js
 
import './LoadingPage.css'; // Ensure you have the CSS file for styling
import { FaWhatsapp } from "react-icons/fa";

const LoadingPage = () => {
	return (
		<div className="loading-page">
			<div className="loading-logo">
      <FaWhatsapp />			</div>
			<div className="loading-bar">
				<div className="loading-bar-progress"></div>
			</div>
			<div className="loading-text">
				<p>WhatsApp</p>
				<p className="subtitle">End-to-end encrypted</p>
			</div>
		</div>
	);
};

export default LoadingPage;
