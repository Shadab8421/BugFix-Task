import React, { useState } from 'react';

const Page05 = () => {
    const [date, setDate] = useState('');
    const [typist, setTypist] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [buyerName, setBuyerName] = useState('');
    const [witnessName01, setWitnessName01] = useState('');
    const [witnessName01Address, setWitnessName01Address] = useState('');
    const [witnessName01Age, setWitnessName01Age] = useState('');
    const [witnessName01Business, setWitnessName01Business] = useState('');
    const [witnessName02, setWitnessName02] = useState('');
    const [witnessName02Age, setWitnessName02Age] = useState('');
    const [witnessName02Business, setWitnessName02Business] = useState('');
    const [witnessName02Address, setWitnessName02Address] = useState('');
 
  return (
    <>
    <div className="a4-page">
    <div className="card  " style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem' }}>
      <div className="card-body">
      

        
      <span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
  <h3 className="card-content" style={{ marginLeft: '10px' }}>आज दिनांक
  <input
    type="text"
    placeholder='12/12/2023'
    style={{ maxWidth: '40%' }}
    value={date}
    onChange={(e) => setDate(e.target.value)}
  /></h3>
  <p style={{ marginLeft: '10px', marginRight: '10px' }}>संगणक टाईपींग <input
    type="text"
    placeholder='एस.जायभाये'
    style={{ maxWidth: '40%' }}
    value={typist}
    onChange={(e) => setTypist(e.target.value)}
  />  _ _ _ _ _ _ _ </p>
</span>

 


<span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
<h3 className="card-content" style={{ marginLeft: '10px' }}>मसुदा खुद्द – <input
    type="text"
    placeholder='गणेश निव्रुती राउत'
    style={{ maxWidth: '80%' }}
    value={sellerName}
    onChange={(e) => setSellerName(e.target.value)}
  />  </h3><h3 style={{ marginLeft: '10px', marginRight: '10px' }}>_ _ _ _ _</h3></span>
<span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
<h3 className="card-content" style={{ marginLeft: '10px' }}>लिहुन घेणार – <input
    type="text"
    placeholder='अनिता तातेराि राऊत'
    style={{ maxWidth: '80%' }}
    value={buyerName}
    onChange={(e) => setBuyerName(e.target.value)}
  />  </h3><h3 style={{ marginLeft: '100px', marginRight: '10px' }}>सही</h3></span>
   <div style={{ marginLeft: '20%', width: '100px', height: '120px', border: '2px solid #000' }}>
    
  </div>
<span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
<h3 className="card-content" style={{ marginLeft: '10px' }}>लिहुन देणार – <input
    type="text"
    placeholder='गणेश निव्रुती राउत'
    style={{ maxWidth: '80%' }}
    value={sellerName}
    onChange={(e) => setSellerName(e.target.value)}
  />  </h3><h3 style={{ marginLeft: '100px', marginRight: '10px' }}>सही</h3></span>
   <div style={{ marginLeft: '20%', width: '100px', height: '120px', border: '2px solid #000' }}>
    
  </div>
<span style={{ display: 'flex', alignItems: 'center',marginTop:"25px" }}>
<h3 className="card-content" style={{ marginLeft: '10px' }}>साक्षीदार <br />सही    </h3> <h3 style={{ marginLeft: '65%'  }}>अंगठा</h3></span>
<h3 className="card-content" style={{ marginLeft: '15%' }}>-------------- </h3>
<br /><br />

<span style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
  
  <h3 className="card-content" style={{ marginLeft: '10px' }}>
    1) <input
    type="text"
    placeholder='तातेराव विठ्ठलराव राउत'
    style={{ maxWidth: '80%' }}
    value={witnessName01}
    onChange={(e) => setWitnessName01(e.target.value)}
  /> <br />
    वय <input
      type="text"
      placeholder='49'
      style={{ maxWidth: '10%' }}
      value={witnessName01Age}
      onChange={(e) => setWitnessName01Age(e.target.value)}
    /> वर्ष धंदा <input
      type="text"
      placeholder='शेती'
      style={{ maxWidth: '15%' }}
      value={witnessName01Business}
      onChange={(e) => setWitnessName01Business(e.target.value)}
    />
    <br />
    <input
      type="text"
      placeholder='रा.उस्मानपुर ता.परतुर जि.जालना.'
      style={{ maxWidth: '80%' }}
      value={witnessName01Address}
      onChange={(e) => setWitnessName01Address(e.target.value)}
    />
  </h3>
  <div style={{ width: '130px', height: '120px', border: '2px solid #000', marginRight: '10%' }}>
    {/* Placeholder for photo */}
  </div>
</span>
<span style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
  
  <h3 className="card-content" style={{ marginLeft: '10px' }}>
    2) <input
    type="text"
    placeholder='पाटीलबुवा रांगनाथ राउत'
    style={{ maxWidth: '80%' }}
    value={witnessName02}
    onChange={(e) => setWitnessName02(e.target.value)}
  /> <br />
    वय <input
      type="text"
      placeholder='66'
      style={{ maxWidth: '10%' }}
      value={witnessName02Age}
      onChange={(e) => setWitnessName02Age(e.target.value)}
    /> वर्ष धंदा <input
      type="text"
      placeholder='शेती'
      style={{ maxWidth: '15%' }}
      value={witnessName02Business}
      onChange={(e) => setWitnessName02Business(e.target.value)}
    />
    <br />
    <input
      type="text"
      placeholder='रा.उस्मानपुर ता.परतुर जि.जालना.'
      style={{ maxWidth: '80%' }}
      value={witnessName02Address}
      onChange={(e) => setWitnessName02Address(e.target.value)}
    />
  </h3>
  <div style={{ width: '130px', height: '120px', border: '2px solid #000', marginRight: '10%' }}>
    {/* Placeholder for photo */}
  </div>
</span>



        </div>
        </div>
        </div>
    </>
  )
}

export default Page05