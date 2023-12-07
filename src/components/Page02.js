import React  from 'react';

const Page02 = ({formData}) => {


  return (
    <> 
      <div className="card" style={{width: "21cm",
     height: "29.7cm", margin: "20px auto 20px"}}  >
        <div className="card-body">
          <div>
          <p className="card-content" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem',textAlign:'justify' }}>
          रजिस्ट्रेशन तुकडी व जिल्हा परीषद जालना पोट तुकडी व पंचायत सजमती परतुर
          तालुका, मा. दुय्यम निबंधक परतुर,तालुका पंचायत समिती परतुर पैकी ग्रामपंचायत
          हद्दींतील {formData.sellerDeclaration}
        </p>  
          </div>
<h1 style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', textAlign: 'center' }}>ज्याची चतु:सिमा खालील प्रमाणे आह.</h1>
          <table className="table table-borderless  " style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem', marginTop: '10px',maxWidth:'50%',marginLeft:'25%'  }}>
            <tbody className=" text-right">
              <tr>
                <td>पुर्वेस - </td>
                <td> {formData.landEast}</td>
              </tr>
              <tr>
                <td>पश्चिमेस - </td>
                <td> {formData.landWest}</td>
              </tr>
              <tr>
                <td>दक्षीणेस - </td>
                <td> {formData.landSouth}</td>
              </tr>
              <tr>
                <td>उत्तरेस- </td>
                <td> {formData.landNorth}</td>
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
      
    </>
  );
};

export default Page02;
