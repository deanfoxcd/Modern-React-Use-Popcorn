import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App-v1';
// import './StarRating';
// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      defaultRating={3}
    />
    <StarRating maxRating={5} color={'red'} size={24} /> */}
  </React.StrictMode>
);
