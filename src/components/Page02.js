import React, { useState } from 'react';

const Page02 = () => {
  const [sellerDeclaration, setSellerDeclaration] = useState('');
  const [landEast, setLandEast] = useState('');
  const [landWest, setLandWest] = useState('');
  const [landNorth, setLandNorth] = useState('');
  const [landSouth, setLandSouth] = useState('');

  return (
    <><div className="a4-page">
      <div className="card mb-3"  >
        <div className="card-body">
          <div>
          <p className="card-content" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem',textAlign:'justify' }}>
          रजिस्ट्रेशन तुकडी व जिल्हा परीषद जालना पोट तुकडी व पंचायत सजमती परतुर
          तालुका, मा. दुय्यम निबंधक परतुर,तालुका पंचायत समिती परतुर पैकी ग्रामपंचायत
          हद्दींतील
        
          <textarea
  placeholder='मौजे- फिरोजाबाद ता.परतुर,जि.जालना येथील गट नं. 8 चे एकुण क्षेत्रफळ 3 हे 14 आर आकार 16 रु 14 पैसे पोट खराब 01 आर या पैकी माझ्या मालकी,कब्जाचे व हिस्याचे क्षेत्रफळ 0 हे 35 आर संपुर्ण हंगामी बागायत शेत जमीन मी तुम्हास माझ्या संपुर्ण मालकीहक्कासह कायमस्वरुपी विक्री केली आहे.'
  value={sellerDeclaration}
  onChange={(e) => setSellerDeclaration(e.target.value)}
  style={{ width: '100%', height: '150px', display: 'inline', textAlign: 'justify', marginTop:'10px',border:'none'}}
/>

        </p>  
          </div>
<h1 style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', textAlign: 'center' }}>ज्याची चतु:सिमा खालील प्रमाणे आह.</h1>
          <table className="table table-borderless  " style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', marginTop: '10px',maxWidth:'50%',marginLeft:'25%'  }}>
            <tbody className=" text-right">
              <tr>
                <td>पुर्वेस - </td>
                <td> <input type="text" placeholder="सविता बद्रीनाथ गोंडगे यांची शेत जमीन" style={{width:'150%'}}  value={landEast} onChange={(e) => setLandEast(e.target.value)} /></td>
              </tr>
              <tr>
                <td>पश्चिमेस - </td>
                <td> <input type="text" placeholder="तातेराव विठ्ठ्लराव राउत यांची शेत जमीन" style={{width:'150%'}}  value={landWest} onChange={(e) => setLandWest(e.target.value)} /></td>
              </tr>
              <tr>
                <td>दक्षीणेस - </td>
                <td> <input type="text" placeholder="तातेराव विठ्ठ्लराव राउत यांची शेत जमीन" style={{width:'150%'}}  value={landSouth} onChange={(e) => setLandSouth(e.target.value)} /></td>
              </tr>
              <tr>
                <td>उत्तरेस- </td>
                <td> <input type="text" placeholder="मिना संतोष राउत यांनी आज रोजी खरेदी केलेली शेत जमीन" style={{width:'150%'}}  value={landNorth} onChange={(e) => setLandNorth(e.target.value)} /></td>
              </tr>
              
            </tbody>
          </table>
          <p className="card-content" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem',textAlign:'justify' }}>
          वरील चतु:सीमे आतील मिळकत त्यातील काष्ट, पाषाण, धोंडा, पाला पाचोळा,
झाड झाडोरा, निधिनिक्षेप इत्यादी सर्व तदंगभुत वस्तुसाहित तसेच जाणे येण्याचे रस्त्याचे
निरंतर वहिवाटीचे व वापराचे, वागणुकीचे सर्व हक्कासह मिळकत विक्री केली आहे.</p>
          <p className="card-content" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem',textAlign:'justify' }}>
          वरील वर्णन केलेली मिळकत लिहुन देणार यांच्या मालकीची असुन त्यांचे
नावाची नोंद वर असुन लिहुन देणार
यांचे नावे मालक कब्जेदार म्हणुन दाखल आहे त्यावर लिहुन देणार यांचे ‍व्यतिरीक्त
इतर कोणाचा कसल्याही प्रकारचा मालकी हक्क वा आधिकार नाही. त्यामुळे सदरची
मिळकतीचा उपभोग घेण्याचा व विल्हेवाट लावण्याचा हस्तांतर करण्याचा लिहुन देणार
यांना एकमेव हक्क व आधिकार आहे.</p>
          <p className="card-content" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem',textAlign:'justify' }}>
          लिहुन देणार असे नमुद करतात की वर वर्णन केलेली मिळकत पुर्णपणे निर्वेध,
निर्जोखमी व बोजारहित असून सदरील मिळकत कोणत्याही कोर्टांत दाव्याचा विषय
म्हणून दाखल नाही अथवा जप्त किंवा ऍटॅच झालेली नाही. व ती एक्वायर झालेली नसून
सदर मिळकतीवर कोणत्याही प्रकारचा गहाण, दान, लिन, लीज, पोटगी, अन्न, वस्त्र,
बक्षीस, अदलाबदल, मृत्युपत्र, वारसाहक्क, वाटप कोर्ट, वाद अतिक्रमण, खरेदीखत, </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Page02;
