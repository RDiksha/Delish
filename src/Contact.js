import React from 'react';
import AboutBackground from '../src/assets/re21.jpg';

const Contact = () => {
    return (
        <div style={{
          backgroundImage: `url(${AboutBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
          textAlign: "center",
          color: "darkred",
          fontFamily: "cursive",
        }}>
            <h1>This is Contact Page</h1>
        </div>
    )
}

export default Contact
