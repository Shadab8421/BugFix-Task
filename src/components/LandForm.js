import React, { useState } from 'react';

const LandForm = ({ onUpdate }) => {
  const [title, setTitle] = useState('');
  const [landAddress, setLandAddress] = useState('');
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
  const [sellerDeclaration, setSellerDeclaration] = useState('');
  const [landEast, setLandEast] = useState('');
  const [landWest, setLandWest] = useState('');
  const [landNorth, setLandNorth] = useState('');
  const [landSouth, setLandSouth] = useState('');
  const [buyerPayingAmt, setBuyerPayingAmt] = useState('');
  const [transType, setTransType] = useState('');
  const [transAmt, setTransAmt] = useState('');
  const [totalAmt, setTotalAmt] = useState('');
  const [total, setTotal] = useState('');
  const [recievedAmt, setRecievedAmt] = useState('');
//   Page 05
const [date, setDate] = useState('');
const [typist, setTypist] = useState('');

const [witnessName01, setWitnessName01] = useState('');
const [witnessName01Address, setWitnessName01Address] = useState('');
const [witnessName01Age, setWitnessName01Age] = useState('');
const [witnessName01Business, setWitnessName01Business] = useState('');
const [witnessName02, setWitnessName02] = useState('');
const [witnessName02Age, setWitnessName02Age] = useState('');
const [witnessName02Business, setWitnessName02Business] = useState('');
const [witnessName02Address, setWitnessName02Address] = useState('');
  const handleUpdate = () => {
    onUpdate({
      title,
      landAddress,
      landPartNum,
      landTotalArea,
      landTotalTax,
      netLandTax,
      rsPerArea,
      sellingArea,
      marketRate,
      sellingAmount,
      stampDuty,
      regisFee,
      buyerName,
      buyerAge,
      buyerBusiness,
      buyerAddress,
      buyerPincode,
      buyerAadhar,
      buyerAccount,
      sellerName,
      sellerAge,
      sellerBusiness,
      sellerAddress,
      sellerPincode,
      sellerAadhar,
      sellerAccount,
      sellerDeclaration,
      landEast,
      landWest,
      landNorth,
      landSouth,
      buyerPayingAmt,
      transType,
      transAmt,
      totalAmt,
      total,
      recievedAmt,
      date,
      typist,
      witnessName01,
      witnessName01Address,
      witnessName01Age,
      witnessName01Business,
      witnessName02,
      witnessName02Age,
      witnessName02Business,
      witnessName02Address,
      
    });
  };

  return (
    <div style={{ width: '70%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', margin:"10px 20px", fontFamily: 'Tiro Devanagari Marathi, serif' }}>
       
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" placeholder="खरेदीखत" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="landAddress">जमिनीचा पत्ता
:</label>
        <input type="text" id="landAddress" placeholder="फिरोजाबाद" value={landAddress} onChange={(e) => setLandAddress(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="landPartNum">जमिनीचा विभाग क्रं:</label>
        <input type="text" id="landPartNum" placeholder="3" value={landPartNum} onChange={(e) => setlandPartNum(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="landTotalArea">एकुण जमीन क्षेत्र:</label>
        <input type="text" id="landTotalArea" placeholder=" 3.14" value={landTotalArea} onChange={(e) => setlandTotalArea(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="landTotalTax"> जमीन एकुण कर:</label>
        <input type="text" id="landTotalTax" placeholder=" 16.14" value={landTotalTax} onChange={(e) => setlandTotalTax(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="netLandTax"> जमीन निघालेलला कर:</label>
        <input type="text" id="netLandTax" placeholder=" 5.14" value={netLandTax} onChange={(e) => setNetLandTax(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="rsPerArea"> प्रति क्षेत्र रुपये:</label>
        <input type="text" id="rsPerArea" placeholder=" 12075" value={rsPerArea} onChange={(e) => setRsPerArea(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="sellingArea"> विक्री क्षेत्र:</label>
        <input type="text" id="sellingArea" placeholder=" 0.35" value={sellingArea} onChange={(e) => setSellingArea(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="marketRate"> बाजारमुल्येः:</label>
        <input type="text" id="marketRate" placeholder=" 423000" value={marketRate} onChange={(e) => setMarketRate(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="sellingAmount"> विक्री किंमत:</label>
        <input type="text" id="sellingAmount" placeholder=" 423000" value={sellingAmount} onChange={(e) => setSellingAmount(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="stampDuty"> मुद्रांक शुल्क:</label>
        <input type="text" id="stampDuty" placeholder=" 21150" value={stampDuty} onChange={(e) => setStampDuty(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="regisFee"> 	नोंदणी फी:</label>
        <input type="text" id="regisFee" placeholder=" 4230" value={regisFee} onChange={(e) => setRegisFee(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="buyerName"> 	खरेदीखत लिहून घेणारे:</label>
        <input type="text" id="buyerName" placeholder=" अनिता तातेराव राऊत" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="buyerAge"> 	खरेदीदाराचे वय:</label>
        <input type="text" id="buyerAge" placeholder=" 42" value={buyerAge} onChange={(e) => setBuyerAge(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="buyerBusiness"> 	खरेदीदाराचे काम:</label>
        <input type="text" id="buyerBusiness" placeholder=" शेती/गृहीणी" value={buyerBusiness} onChange={(e) => setBuyerBusiness(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="buyerAddress"> 	खरेदीदाराचे पत्ता:</label>
        <input type="text" id="buyerAddress" placeholder=" उस्मानपुर ता. परतुर जि. जालना" value={buyerAddress} onChange={(e) => setBuyerAddress(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="buyerPincode"> 	खरेदीदाराचे पिनकोड:</label>
        <input type="text" id="buyerPincode" placeholder=" 431501" value={buyerPincode} onChange={(e) => setBuyerPincode(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="buyerAadhar"> 	खरेदीदाराचे आधार/पॅन नं:</label>
        <input type="text" id="buyerAadhar" placeholder=" GRVPR6306M" value={buyerAadhar} onChange={(e) => setBuyerAadhar(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="buyerAccount"> 	खरेदीदाराचे खाते क्र:</label>
        <input type="text" id="buyerAccount" placeholder=" TKN1" value={buyerAccount} onChange={(e) => setBuyerAccount(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="sellerName"> 	खरेदीखत लिहून देणारे:</label>
        <input type="text" id="sellerName" placeholder=" गणेश निव्रुती राउत" value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="sellerAge"> 	विक्रेत्याचे वय:</label>
        <input type="text" id="sellerAge" placeholder=" 49" value={sellerAge} onChange={(e) => setSellerAge(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="sellerBusiness"> 	विक्रेत्याचे काम:</label>
        <input type="text" id="sellerBusiness" placeholder=" शेती" value={sellerBusiness} onChange={(e) => setSellerBusiness(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="sellerAddress"> 	विक्रेत्याचे पत्ता:</label>
        <input type="text" id="sellerAddress" placeholder=" निव्रुती
रा.डोंगरकडा,ता.कळमनुरी,जि.हिंगोली" value={sellerAddress} onChange={(e) => setSellerAddress(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="sellerPincode"> 	विक्रेत्याचे पिनकोड:</label>
        <input type="text" id="sellerPincode" placeholder=" 431701" value={sellerPincode} onChange={(e) => setSellerPincode(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="sellerAadhar"> 	विक्रेत्याचे आधार/पॅन नं:</label>
        <input type="text" id="sellerAadhar" placeholder=" GRVPR6306M" value={sellerAadhar} onChange={(e) => setSellerAadhar(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="sellerAccount"> 	विक्रेत्याचे खाते क्र:</label>
        <input type="text" id="sellerAccount" placeholder=" 23" value={sellerAccount} onChange={(e) => setSellerAccount(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="sellerDeclaration"> 	विक्रेत्याचे घोषणा:</label>
      <textarea
  placeholder='मौजे- फिरोजाबाद ता.परतुर,जि.जालना येथील गट नं. 8 चे एकुण क्षेत्रफळ 3 हे 14 आर आकार 16 रु 14 पैसे पोट खराब 01 आर या पैकी माझ्या मालकी,कब्जाचे व हिस्याचे क्षेत्रफळ 0 हे 35 आर संपुर्ण हंगामी बागायत शेत जमीन मी तुम्हास माझ्या संपुर्ण मालकीहक्कासह कायमस्वरुपी विक्री केली आहे.'
  value={sellerDeclaration}
  id="sellerDeclaration"
  onChange={(e) => setSellerDeclaration(e.target.value)}
  style={{ width: '100%', height: '150px', textAlign: 'justify'}}
/></div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="landEast"> 	पूर्वेकडून जमीन:</label>
        <input type="text" id="landEast" placeholder=" सविता बद्रीनाथ गोंडगे यांची शेत जमीन" value={landEast} onChange={(e) => setLandEast(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="landWest"> 	पश्चिमेकडून जमीन:</label>
        <input type="text" id="landWest" placeholder=" तातेराव विठ्ठ्लराव राउत यांची शेत जमीन" value={landWest} onChange={(e) => setLandWest(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="landSouth"> 	दक्षिणेकडून जमीन:</label>
        <input type="text" id="landSouth" placeholder=" तातेराव विठ्ठ्लराव राउत यांची शेत जमीन" value={landSouth} onChange={(e) => setLandSouth(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="landNorth"> 	उत्तरेकडून जमीन:</label>
        <input type="text" id="landNorth" placeholder=" मिना संतोष राउत यांनी आज रोजी खरेदी केलेली शेत जमीन" value={landNorth} onChange={(e) => setLandNorth(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="buyerPayingAmt"> 	खरेदीदार देय रक्कम:</label>
      <textarea
  placeholder='रक्कम रुपये 423000/- (अक्षरी
    रुपये चार लाख तेविस हजार रुपये फक्त)'
  value={buyerPayingAmt}
  id="buyerPayingAmt"
  onChange={(e) => setBuyerPayingAmt(e.target.value)}
  style={{ width: '100%', height: '100px', textAlign: 'justify'}}
/></div>

<div style={{ marginBottom: '15px' }}>
      <label htmlFor="transType"> 		Transaction Type:</label>
        <input type="text" id="transType" placeholder=" RTGS/चेक/नगदी" value={transType} onChange={(e) => setTransType(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="transAmt"> 		Transaction Amount:</label>
        <input type="text" id="transAmt" placeholder=" 423000/-" value={transAmt} onChange={(e) => setTransAmt(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="total"> 		एकुण:</label>
        <input type="text" id="total" placeholder="एकुण" value={total} onChange={(e) => setTotal(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="totalAmt"> 		एकुण रक्कम:</label>
        <input type="text" id="totalAmt" placeholder="423000/- " value={totalAmt} onChange={(e) => setTotalAmt(e.target.value)} />
       
      </div>
 
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="recievedAmt"> 	Received Amount:</label>
      <textarea
  placeholder='रक्कम रुपये 423000/- (अक्षरी
    रुपये चार लाख तेविस हजार रुपये फक्त)'
  value={recievedAmt}
  id="recievedAmt"
  onChange={(e) => setRecievedAmt(e.target.value)}
  style={{ width: '100%', height: '100px', textAlign: 'justify'}}
/></div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="date"> 		Date:</label>
        <input type="text" id="date" placeholder="12/12/2023 " value={date} onChange={(e) => setDate(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="typist"> 		
संगणक टाईपींग:</label>
        <input type="text" id="typist" placeholder="एस.जायभाये " value={typist} onChange={(e) => setTypist(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="witnessName01"> 		
      पहिल्या साक्षीदाराचे नाव:</label>
        <input type="text" id="witnessName01" placeholder="तातेराव विठ्ठलराव राउत " value={witnessName01} onChange={(e) => setWitnessName01(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="witnessName01Age"> 		
      पहिल्या साक्षीदाराचे वय:</label>
        <input type="text" id="witnessName01Age" placeholder="65 " value={witnessName01Age} onChange={(e) => setWitnessName01Age(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="witnessName01Business"> 		
      पहिल्या साक्षीदाराचे काम:</label>
        <input type="text" id="witnessName01Business" placeholder="शेती " value={witnessName01Business} onChange={(e) => setWitnessName01Business(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="witnessName01Address"> 		
      पहिल्या साक्षीदाराचे पत्ता
:</label>
        <input type="text" id="witnessName01Address" placeholder="रा.डोंगरकडा,ता.कळमनुरी,जि.हिंगोली " value={witnessName01Address} onChange={(e) => setWitnessName01Address(e.target.value)} />
       
      </div>
      <div style={{ marginBottom: '15px' }}>
      <label htmlFor="witnessName02"> 		
      दुसऱ्या साक्षीदाराचे नाव:</label>
        <input type="text" id="witnessName02" placeholder="पाटीलबुवा रांगनाथ राउत " value={witnessName02} onChange={(e) => setWitnessName02(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="witnessName02Age"> 		
      दुसऱ्या साक्षीदाराचे वय:</label>
        <input type="text" id="witnessName02Age" placeholder="44 " value={witnessName02Age} onChange={(e) => setWitnessName02Age(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="witnessName02Business"> 		
      दुसऱ्या साक्षीदाराचे काम:</label>
        <input type="text" id="witnessName02Business" placeholder="शेती " value={witnessName02Business} onChange={(e) => setWitnessName02Business(e.target.value)} />
       
      </div>
<div style={{ marginBottom: '15px' }}>
      <label htmlFor="witnessName02Address"> 		
      दुसऱ्या साक्षीदाराचे पत्ता
:</label>
        <input type="text" id="witnessName02Address" placeholder="रा.उस्मानपुर ता.परतुर जि.जालना. " value={witnessName02Address} onChange={(e) => setWitnessName02Address(e.target.value)} />
       
      </div>
    
     
      <button className="btn btn-success" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default LandForm;
