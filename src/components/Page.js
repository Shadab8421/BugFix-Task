import React from 'react';

const Page = () => {
    const cardStyle = {
        justifyContent:'center',
        alignItems:'center',
        width: '21cm',
        height: '29.7cm',
        margin: '10px',
   
     
        border: '2px solid #000',
        borderRadius: '0',
        boxShadow: '0 0 0 5px #606060',
      };

  return (
    <>
      <div className="card mb-3" style={cardStyle}>
        {/* Your content goes here */}
      </div>
    </>
  );
};

export default Page;
