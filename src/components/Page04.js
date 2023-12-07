import React, { useState } from 'react';

const Page04 = ({formData}) => {
    const [sellerName, setSellerName] = useState('');
    const [transType, setTransType] = useState('');
    const [transAmt, setTransAmt] = useState('');
    const [totalAmt, setTotalAmt] = useState('');
    const [total, setTotal] = useState('');
    const [recievedAmt, setRecievedAmt] = useState('');

  return (
    <> 
    <div className="card  "   style={{width: "21cm",
     height: "29.7cm", margin: "20px auto 20px"}}>
      <div className="card-body" style={{ fontFamily: 'Tiro Devanagari Marathi, serif', fontSize: '1.2rem',textAlign:'justify' }}>
      

        
        <p className="card-content"  >
        भरण्याचा तपाशिल – </p>
        <table className="table table-bordered">
              <thead style={{textAlign:'center'}}>
                <tr >
                  <th>बॅकेचे नांव</th>
                  <th>रक्कम घेणाराचे नांव </th>
                  <th >चेक नं./Tran
ID/RTGS/DD</th>
                  <th>रक्कम</th>
                </tr>
              </thead>
              <tbody style={{textAlign:'center'}}>
                <tr>
                  <td> </td>
                  <td>{formData.sellerName}</td>
                  <td>{formData.transType}</td>
                  <td>{formData.transAmt}</td>
                </tr>
                <tr>
                  <td>{formData.total}</td>
                  <td> </td>
                  <td> </td>
                  <td>{formData.totalAmt}</td>
                </tr>
              
              </tbody>
            </table>
            <p>वरीलप्रमाणे सदरच्या मिळकतीच्या मोबदल्यापोटी संपुर्ण {formData.recievedAmt} मिळाली त्याची
वेगळी पावती देण्याची गरज नाही. रकमेबाबत कोणताही वाद किंवा तक्रार राहीलेली
नाही. 
</p>
<p>यदाकदाचित सदर खरेदीखतामध्ये काही चुक/चुका झाल्याचे आढ़्ल्यास त्याचा
दुरुस्ती लेख / चुक दुरुस्ती पत्राचा दस्त लिहुन देणार हे लिहुन घेणार यांना विना विलंब
विनामोबदला विनातक्रार लिहुन व नोंदवुन देतील. सदरील दस्तऐवजास लागणारे
कागदपत्रे लिहुन देणार यांनी स्वतःसंबंधित कार्यालयातून आणलेले आहेत. व जर सदर
दस्तातील माहीती चुक व खोटी आढ़ळुन आल्यास नोंदणी अधिनियम 1908 चे कलम
82 नुसार लिहुन देणार शिक्षेस पात्र राहील.</p>
<p>वर वर्णन केलेल्या मिळकती संबंधी भविष्यात काही वाद उदभवल्यास त्याची
संपुर्ण जबाबदारी लिहुन घेणार व लिहुन देणार यांच्यावर राहील.अधिकारी किंवा
संगणक टायपींग करणार यांच्यावर राहणार नाही. </p>
<p>सदरील खरेदीखताचा मजकुर कॉम्प्युटर प्रिंटर केला असुन लिहुन घेणार व लिहुन
देणार यांनी दिलेल्या माहितीप्रमाणे प्रिंट केला आहे. जो लिहुन घेणार व लिहुन देणार या
दोघांनीही वाचुन,समजुन घेवुन खालील साक्षीदारासमक्ष या खरेदीखतावर सह्या केल्या
आहेत. करीता हे खरेदीखत खरे व बरोबर आहे असे मान्य केले आहे.</p>
<p>
या लेखाआधारे लिहुन घेणार हे विक्री मिळकतीचे पुर्णपणे मालक व कब्जेदार
झाले असुन या लेखा आधारे राजस्व कागदोपत्री 7/12 वर फेर अमल करुन घेऊ शकता
सबब हे कायम खरेदीखत राजीखुशीने व सवयसंतोषाने अक्कल हूशारीने समजून उमजून वाचून घेवुन कोणाच्याही दबावाला बळी न पडता, कोणत्याही प्रकारची नशापाणी न
करता लिहून व नोंदवून दिले जे खरे व बरोबर आहे.
</p>
       
      </div>
    </div>
     
  </>
  )
}

export default Page04