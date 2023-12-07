import React  from 'react';

const Page05 = ({formData}) => {

 
  return (
    <>
    
    <div className="card  "  style={{width: "21cm",
     height: "29.7cm", margin: "20px auto 20px"}} >
      <div className="card-body" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem' }}>
      

        
      <span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
  <h3 className="card-content" style={{ marginLeft: '10px' }}>आज दिनांक
  {formData.date}</h3>
  <p style={{ marginLeft: '60px',marginTop:'25px'}}>संगणक टाईपींग {formData.typist}  _ _ _ _ _ _ _ </p>
</span>

 


<span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
<h3 className="card-content" style={{ marginLeft: '10px' }}>मसुदा खुद्द – {formData.sellerName}  </h3><h3 style={{ marginLeft: '10px' }}>_ _ _ _ _</h3></span>
<span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
<h3 className="card-content" style={{ marginLeft: '10px' }}>लिहुन घेणार – {formData.buyerName}  </h3><h3 style={{ marginLeft: '230px'}}>सही</h3></span>
   <div style={{ marginLeft: '20%', width: '100px', height: '120px', border: '2px solid #000' }}>
    
  </div>
<span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
<h3 className="card-content" style={{ marginLeft: '10px' }}>लिहुन देणार – {formData.sellerName} </h3><h3 style={{ marginLeft: '250px' }}>सही</h3></span>
   <div style={{ marginLeft: '20%', width: '100px', height: '120px', border: '2px solid #000' }}>
    
  </div>
<span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
<h3 className="card-content" style={{ marginLeft: '10px' }}>साक्षीदार <br />सही    </h3> <h3 style={{ marginLeft: '65%'  }}>अंगठा</h3></span>
<h3 className="card-content" style={{ marginLeft: '15%' }}>-------------- </h3>
<br /><br />

<span style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
  
  <h3 className="card-content" style={{ marginLeft: '10px' }}>
    1) {formData.witnessName01} <br />
    वय  {formData.witnessName01Age} वर्ष धंदा  {formData.witnessName01Business}
    <br />
    {formData.witnessName01Address}
  </h3>
  <div style={{ width: '130px', height: '120px', border: '2px solid #000', marginRight: '10%' }}>

  </div>
</span>
<span style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
  
  <h3 className="card-content" style={{ marginLeft: '10px' }}>
    2) {formData.witnessName02}<br />
    वय {formData.witnessName02Age} वर्ष धंदा {formData.witnessName01Business}
    <br />
    {formData.witnessName01Address}
  </h3>
  <div style={{ width: '130px', height: '120px', border: '2px solid #000', marginRight: '10%' }}>
   
  </div>
</span>



        </div>
        </div>
        
    </>
  )
}

export default Page05