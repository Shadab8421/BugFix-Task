import React, { useState } from 'react';
 


 

const Page01 = () => {
 
  const [title, setTitle] = useState('');
  const [landAddress, setlandAddress] = useState('');
  const [landPartNum, setlandPartNum] = useState('');
  const [landTotalArea, setlandTotalArea] = useState('');
  const [landTotalTax, setlandTotalTax] = useState('');
  const [netLandTax, setNetLandTax] = useState('');
  const [rsPerArea, setRsPerArea] = useState('');
  const [sellingArea, setSellingArea] = useState('');
  const [marketRate, setMarketRate] = useState('');
  const [sellingAmount, setSellingAmount] = useState('');
  const [regisFee, setRegisFee] = useState('');
  const [stampDuty, setStampDuty] = useState('');
 
 

  const [buyerName, setBuyerName] = useState('');
  const [buyerAge, setBuyerAge] = useState('');
  const [buyerBusiness, setBuyerBusiness] = useState('');
  const [buyerAddress, setBuyerAddress] = useState('');
  const [buyerPincode, setBuyerPincode] = useState('');
  const [buyerAadhar, setBuyerAadhar] = useState('');
  const [buyerAccount, setBuyerAccount] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerAge, setSellerAge] = useState('');
  const [sellerBusiness, setSellerBusiness] = useState('');
  const [sellerAddress, setSellerAddress] = useState('');
  const [sellerPincode, setSellerPincode] = useState('');
  const [sellerAadhar, setSellerAadhar] = useState('');
  const [sellerAccount, setSellerAccount] = useState('');
 
 
  return (
    <> <div className="a4-page">
      <div className="card mb-3" >
        <div className=" text-center">
          <div style={{ display: 'inline-block', border: '2px solid #000', padding: '5px 70px' , maxWidth: '100%' }}>
          <h1 className="card-title text-danger" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontWeight: 'bold' }}>
            <input type="text" placeholder="खरेदीखत" style={{maxWidth:'50%'}} value={title} onChange={(e) => setTitle(e.target.value)} />
            </h1>
          </div>
        </div>
        <div className="card-body">
        <div>
            <p className="card-content" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', textAlign: 'justify' }}>
              खरेदीखत मौजे <input type="text" placeholder="फिरोजाबाद" style={{maxWidth:'20%'}} value={landAddress} onChange={(e) => setlandAddress(e.target.value)} /> येथील जमीनीचे रजिस्ट्रेशन तुकडी व जिल्हा
              परिषद, जालना पोट तुकडी व पंचायत समिती, परतूर, ता.परतूर, जि.जालना. येथील
              <strong> खरेदीखत.</strong>
            </p>
          </div>
          
 
          <table className="table table-borderless text-right" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', marginTop: '10px',maxWidth:'50%',marginLeft:'25%'  }}>
            <tbody>
              <tr>
                <td>विभाग क्रमाांक - <input type="text" placeholder="3" style={{maxWidth:'10%'}} value={landPartNum} onChange={(e) => setlandPartNum(e.target.value)} /></td>
                <td>एकुण क्षेत्रफळ - <input type="text" placeholder="3.14" style={{maxWidth:'20%'}} value={landTotalArea} onChange={(e) => setlandTotalArea(e.target.value)} /> हे.आर </td>
              </tr>
              <tr>
                <td>एकुण आकार - <input type="text" placeholder="16.14" style={{maxWidth:'25%'}} value={landTotalTax} onChange={(e) => setlandTotalTax(e.target.value)} /> रु.पैसे</td>
                <td>निघालेलला आ - <input type="text" placeholder="5.14" style={{maxWidth:'25%'}} value={netLandTax} onChange={(e) => setNetLandTax(e.target.value)} /> रु.पैस</td>
              </tr>
              <tr>
                <td>दर रुपयेेः- <input type="text" placeholder="12075" style={{maxWidth:'30%'}} value={rsPerArea} onChange={(e) => setRsPerArea(e.target.value)} />/- प्रती आर</td>
                <td>विक्री क्षेत्रफळ - <input type="text" placeholder="0.35" style={{maxWidth:'20%'}} value={sellingArea} onChange={(e) => setSellingArea(e.target.value)} /> आर.</td>
              </tr>
              <tr>
                <td>बाजारमुल्येः- रुपये <input type="text" placeholder="423000" style={{maxWidth:'40%'}} value={marketRate} onChange={(e) => setMarketRate(e.target.value)} />/-</td>
                <td>प्र.विक्री किंमत  - <input type="text" placeholder="423000" style={{maxWidth:'40%'}} value={sellingAmount} onChange={(e) => setSellingAmount(e.target.value)} />/-</td>
              </tr>
              <tr>
                <td>मुद्रांक शुल्क - रुपये<input type="text" placeholder="21150" style={{maxWidth:'30%'}} value={stampDuty} onChange={(e) => setStampDuty(e.target.value)} />/-</td>
                <td>नोंदणी फी - <input type="text" placeholder="4230" style={{maxWidth:'30%'}} value={regisFee} onChange={(e) => setRegisFee(e.target.value)} />/-</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-borderless " style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', marginTop: '10px',maxWidth:'90%'  }}>
            <tbody>
              <tr>
                <td  >खरेदीखत लिहून घेणारे :-</td>
                <td><input type="text" placeholder='अनिता तातेराि राऊत' style={{maxWidth:'60%'}} value={buyerName} onChange={(e) => setBuyerName(e.target.value)} /></td>
              </tr>
              <tr>
                <td > </td>
                <td>वय: <input type="text" placeholder='49' style={{maxWidth:'5%'}} value={buyerAge} onChange={(e) => setBuyerAge(e.target.value)} /> वर्षे
,धंदा - <input type="text" placeholder='शेती/गृहीणी' style={{maxWidth:'30%'}} value={buyerBusiness} onChange={(e) => setBuyerBusiness(e.target.value)} />
   .</td>
              </tr>
              <tr>
                <td ></td>
                <td> <input type="text" placeholder='उस्मानपुर ता. परतुर जि. जालना' style={{width:'100%'}} value={buyerAddress} onChange={(e) => setBuyerAddress(e.target.value)} /></td>
              </tr>
              <tr>
                <td > </td>
                <td>पिनकोड -  <input type="text" placeholder='431701' style={{maxWidth:'50%'}} value={buyerPincode} onChange={(e) => setBuyerPincode(e.target.value)} /></td>
              </tr>
              <tr>
                <td > </td>
                <td>आधार/पॅन नं :-   <input type="text" placeholder='GRVPR6306M' style={{maxWidth:'100%'}} value={buyerAadhar} onChange={(e) => setBuyerAadhar(e.target.value)} /></td>
              </tr>
              <tr>
                <td > </td>
                <td>खाते क्र. -   <input type="text" placeholder='TKN1' style={{maxWidth:'15%'}} value={buyerAccount} onChange={(e) => setBuyerAccount(e.target.value)} /><br />
                यांच्या हक्कात
                </td>
              </tr>
              <tr>
                <td  >खरेदीखत लिहून
                देणार:-</td>
                <td><input type="text" placeholder='गणेश निव्रुती राउत' style={{maxWidth:'60%'}} value={sellerName} onChange={(e) => setSellerName(e.target.value)} /></td>
              </tr>
              <tr>
                <td > </td>
                <td>वय: <input type="text" placeholder='49' style={{maxWidth:'5%'}} value={sellerAge} onChange={(e) => setSellerAge(e.target.value)} /> वर्षे
,धंदा - <input type="text" placeholder='शेती' style={{maxWidth:'30%'}} value={sellerBusiness} onChange={(e) => setSellerBusiness(e.target.value)} />
   .</td>
              </tr>
              <tr>
                <td ></td>
                <td> <input type="text" placeholder='निव्रुती
रा.डोंगरकडा,ता.कळमनुरी,जि.हिंगोली' style={{width:'100%'}} value={sellerAddress} onChange={(e) => setSellerAddress(e.target.value)} /></td>
              </tr>
              <tr>
                <td > </td>
                <td>पिनकोड -   <input type="text" placeholder='431701' style={{maxWidth:'50%'}} value={sellerPincode} onChange={(e) => setSellerPincode(e.target.value)} /></td>
              </tr>
              <tr>
                <td > </td>
                <td>आधार/पॅन नं :-   <input type="text" placeholder='GRVPR6306M' style={{maxWidth:'100%'}} value={sellerAadhar} onChange={(e) => setSellerAadhar(e.target.value)} /></td>
              </tr>
              <tr>
                <td > </td>
                <td>खाते क्र. -   <input type="text" placeholder='23' style={{maxWidth:'15%'}} value={sellerAccount} onChange={(e) => setSellerAccount(e.target.value)} />
                </td>
              </tr>
           
            </tbody>
          </table> 
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Page01;
