import React  from 'react';
const Page01 = ({formData}) => {

  return (
    <> 
   
      <div className="card mb-3" style={{width: "21cm",
     height: "29.7cm", margin: "20px auto 20px",display:"flex"}} >
        <div className=" text-center">
          <div style={{ display: 'inline-block', border: '2px solid #000', padding: '5px 70px' , maxWidth: '100%',marginTop:'15px' }}>
          <h1 className="card-title" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontWeight: 'bold' }}>
          {formData.title}
</h1>
          </div>
        </div>
        <div className="card-body">
        <div>
            <p className="card-content" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', textAlign: 'justify' }}>
              खरेदीखत मौजे {formData.landAddress} येथील जमीनीचे रजिस्ट्रेशन तुकडी व जिल्हा
              परिषद, जालना पोट तुकडी व पंचायत समिती, परतूर, ता.परतूर, जि.जालना. येथील
              <strong> खरेदीखत.</strong>
            </p>
          </div>
          
 
          <table className="table table-borderless text-right" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', marginTop: '10px',maxWidth:'90%',marginLeft:'10%'  }}>
            <tbody>
              <tr>
                <td>विभाग क्रमाांक - {formData.landPartNum}</td>
                <td>एकुण क्षेत्रफळ - {formData.landTotalArea}  हे.आर </td>
              </tr>
              <tr>
                <td>एकुण आकार - {formData.landTotalTax} रु.पैसे</td>
                <td>निघालेलला आ - {formData.netLandTax} रु.पैस</td>
              </tr>
              <tr>
                <td>दर रुपयेेः- {formData.rsPerArea}/- प्रती आर</td>
                <td>विक्री क्षेत्रफळ - {formData.sellingArea} आर.</td>
              </tr>
              <tr>
                <td>बाजारमुल्येः- रुपये {formData.marketRate}/-</td>
                <td>प्र.विक्री किंमत  - {formData.sellingAmount}/-</td>
              </tr>
              <tr>
                <td>मुद्रांक शुल्क - रुपये {formData.stampDuty}/-</td>
                <td>नोंदणी फी - {formData.regisFee}/-</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-borderless " style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', marginTop: '10px',maxWidth:'90%'  }}>
            <tbody>
              <tr>
                <td  >खरेदीखत लिहून घेणारे :-</td>
                <td>{formData.buyerName}</td>
              </tr>
              <tr>
                <td > </td>
                <td>वय: {formData.buyerAge} वर्षे ,धंदा - {formData.buyerBusiness}
   .</td>
              </tr>
              <tr>
                <td ></td>
                <td> {formData.buyerAddress}</td>
              </tr>
              <tr>
                <td > </td>
                <td>पिनकोड - {formData.buyerPincode}</td>
              </tr>
              <tr>
                <td > </td>
                <td>आधार/पॅन नं :- {formData.buyerAadhar}</td>
              </tr>
              <tr>
                <td > </td>
                <td>खाते क्र. -{formData.buyerAccount}<br />
                यांच्या हक्कात
                </td>
              </tr>
              <tr>
                <td  >खरेदीखत लिहून
                देणार:-</td>
                <td>{formData.sellerName}</td>
              </tr>
              <tr>
                <td > </td>
                <td>वय: {formData.sellerAge} वर्षे
,धंदा - {formData.sellerBusiness}
   .</td>
              </tr>
              <tr>
                <td ></td>
                <td>{formData.sellerAddress}</td>
              </tr>
              <tr>
                <td > </td>
                <td>पिनकोड -   {formData.sellerPincode}</td>
              </tr>
              <tr>
                <td > </td>
                <td>आधार/पॅन नं :-  {formData.sellerAadhar}</td>
              </tr>
              <tr>
                <td > </td>
                <td>खाते क्र. -   {formData.sellerAccount}
                </td>
              </tr>
           
            </tbody>
          </table> 
        </div>
      </div>
   
     
    </>
  );
};

export default Page01;
