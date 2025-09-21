import React from 'react';

const ScrollingTagline = () => {
  return (
    <div style={{ 
      overflow: 'hidden', 
      whiteSpace: 'nowrap', 
      width: '100%', 
      boxSizing: 'border-box',
      marginTop: '1rem',
      borderTop: '1px solid #eee',
      paddingTop: '1rem'
    }}>
      <div style={{
        display: 'inline-block',
        paddingLeft: '100%',
        animation: 'scroll-left 20s linear infinite',
        fontSize: '1.5rem',
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 600,
        color: '#b91c1c',
        letterSpacing: '0.05em',
      }}>
        Pain-Free Living &nbsp;•&nbsp; Peak Performance &nbsp;•&nbsp; Lasting Energy &nbsp;•&nbsp; Healthy Aging &nbsp;•&nbsp;
      </div>
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          @media (max-width: 768px) {
            div > div {
              font-size: 1.2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollingTagline;
