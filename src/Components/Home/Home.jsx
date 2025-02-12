import logo from './../../assets/ScreenShot.png'
import "./Home.css"
import logo2 from "../../assets/Laptop.png"
import logo3 from "../../assets/Term and Conditions.png"




export default function Footer(){
    let startingDate='25Feb, 2025';
    let endingDate='25Feb, 2025';
    let seconds=300;
    let questions=10; 

  return (
    <>
      <div className="container-fluid py-3 All  ">
        <div className="row d-flex justify-content-evenly  "> 
            <div className="col-lg-10 ">
                <div className="d-flex justify-content-between w-100 pt-2">
                    <div className=" heading d-flex  align-items-center  ">
                        <div className=" ">
                            <img  src={logo}/>
                        </div>
                        <div className=' px-3 '>
                            <h3 className=' my-0 '><strong>Road Safety Quiz</strong></h3>
                            <span className=' text-success '> Start Date: </span> {startingDate}
                            <span className=' text-danger '> End Date:   </span> {endingDate} 
                        </div>
                    </div>
                    <div class="d-flex align-items-end" > 
                            <button type="button" className="btn pink-btn btn-outline align-self-end btn-md ">   Terms and Conditions</button>
                            <button type="button" className="btn pink-btn btn-outline btn-md ms-2"> Login to Play Quiz</button>
                    </div>
                </div>
                <hr />
            </div>
            <div className="grey-box  col-lg-10 d-flex justify-content-center mt-4   ">
                <div class="d-flex my-5 ">
                    <div className=''>
                        <img className=' rounded-3 img-fluid' src="https://static.mygov.in/media/quiz/2025/01/mygov_6788a18065499.jpg"/>
                    </div>
                    <div className=" px-4 py-3 b d-flex align-items-center  ">
                        <div >
                            <div className='d-flex gap-2'> 
                                <div className="grey-block rounded-3 text-center text-white px-4 py-4 ">
                                    <h3 className='white-box-text'><strong>10</strong></h3>
                                    <h4 className='text-white'>Questions</h4>
                                </div>
                                <div className="grey-block rounded-3 text-center text-white px-4 py-4 ">
                                    <h3 className='white-box-text '><strong>300</strong></h3>
                                    <h4 className='text-white'>Seconds</h4>
                                </div>
                            </div>
                            <div className='pt-3'>
                                <button className='btn btn-red w-100 text-white rounded-3 pt-3'><h4>Login To Play Quiz</h4></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row d-flex justify-content-evenly  "> 
            <div className="col-lg-10 ">
                <div className=''>
                    <div className=' about_quiz d-flex align-items-center image w-100 gap-1 pt-3'>
                        <img src={logo2}/>
                        <strong>About Quiz</strong>
                    </div>
                        <hr/>
                    <div>
                        <div class="about_quiz">
                            <p><strong><span >Indian Road Safety Campaign (IRSC) and Ministry of Road Transport and Highways (MoRTH) in collaboration with MyGov have organized the Road Safety Quiz.</span></strong></p>
                            <p><span >Road safety is a shared responsibility, and understanding traffic rules and safe practices is crucial for everyone. This quiz is designed to test and enhance your knowledge about road safety, traffic regulations, and emergency responses to ensure safer roads for all. This quiz is an engaging learning experience designed to guide you toward making informed and responsible choices on the road.</span></p>
                            <p><span >The quiz features real-world scenarios and thought-provoking questions that highlight common situations you might encounter, such as:</span></p>
                            <p><span >1. Navigating traffic situations with confidence and care.</span></p>
                            <p><span >2. Understanding the legal and ethical steps after a road accident.</span></p>
                            <p><span >3. Safe practices for various road users.</span></p>
                            <p><span >4. Giving way to emergency vehicles like ambulances and fire trucks.</span></p>
                            <p><span >&nbsp;</span></p>
                            <p><span >Whether you're a driver, commuter, or pedestrian, this quiz will equip you with essential knowledge to ensure your safety and that of others. Take the first step toward becoming a road safety ambassador—participate, learn, and inspire change!</span></p>
                            <p><span >Let's work together to make roads safer—one informed decision at a time!</span></p>
                            <p><span >&nbsp;</span></p>
                            <p><strong><span >Gratification:</span></strong></p>
                            <p><span >1. Top 3 Participants shall be rewarded with prize money of INR 5,000 each.&nbsp;</span></p>
                            <p><span >2. All participants will receive a e-Certificate of Participation as a token of appreciation for their efforts for contributing to safer roads.</span></p>
                            <p><span >&nbsp;</span></p>
                            <p><span >Let's work together to make roads safer—one informed decision at a time!</span></p>
                            <p><span >&nbsp;</span></p>
                            <p><strong><span >इंडियन रोड सेफ्टी कैंपेन (IRSC) और सड़क परिवहन और राजमार्ग मंत्रालय (MoRTH) ने MyGov के सहयोग से सड़क सुरक्षा क्विज़ का आयोजन किया है।</span></strong></p>
                            <p><span >सड़क सुरक्षा एक साझा जिम्मेदारी है, और यातायात नियमों तथा सुरक्षित व्यवहार को समझना सभी के लिए महत्वपूर्ण है। यह क्विज़ आपकी सड़क सुरक्षा, यातायात नियमों और आपातकालीन स्थितियों से निपटने की प्रतिक्रिया के बारे में ज्ञान को परखने और बढ़ाने के लिए डिज़ाइन किया गया है। यह क्विज़ आपको सड़क पर सूचित और जिम्मेदार निर्णय लेने के लिए मार्गदर्शन प्रदान करने हेतु एक रोचक शिक्षण अनुभव प्रदान करता है।</span></p>
                            <p><span >&nbsp;</span></p>
                            <p><span >क्विज़ में वास्तविक जीवन की परिस्थितियाँ और विचारोत्तेजक प्रश्न शामिल हैं, जो निम्नलिखित जैसे सामान्य स्थितियों पर प्रकाश डालते हैं:</span></p>
                            <p><span >1. आत्मविश्वास और सावधानी के साथ यातायात स्थितियों को संभालना।</span></p>
                            <p><span >2. सड़क दुर्घटना के बाद कानूनी और नैतिक कदमों को समझना।</span></p>
                            <p><span >3. विभिन्न सड़क उपयोगकर्ताओं के लिए सुरक्षित व्यवहार।</span></p>
                            <p><span >4. एम्बुलेंस और अग्निशमन वाहनों जैसी आपातकालीन गाड़ियों को रास्ता देना।</span></p>
                            <p><span >&nbsp;</span></p>
                            <p><span >चाहे आप चालक हों, यात्री हों या पैदल यात्री, यह क्विज़ आपको आवश्यक ज्ञान से लैस करेगा ताकि आपकी और दूसरों की सुरक्षा सुनिश्चित हो सके। सड़क सुरक्षा एंबेसडर बनने के लिए पहला कदम उठाएं—भाग लें, सीखें और परिवर्तन की प्रेरणा बनें!</span></p>
                            <p><span >&nbsp;</span></p>
                            <p><strong><span >पुरस्कार:</span></strong></p>
                            <p><span >1. शीर्ष 3 प्रतिभागियों को INR 5,000 प्रत्येक का नकद पुरस्कार दिया जाएगा।</span></p>
                            <p><span >2. सभी प्रतिभागियों को सड़क सुरक्षा में उनके प्रयासों के लिए भागीदारी का ई-प्रमाणपत्र प्रदान किया जाएगा।</span></p>
                            <p>&nbsp;</p>
                            <p><span >आइए सड़कों को सुरक्षित बनाने के लिए मिलकर काम करें—एक समय में एक सोच-समझकर लिया गया निर्णय!</span></p>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className='quiz_condition d-flex align-items-center image w-100 gap-1 pt-3'>
                        <img className="logo3" src={logo3}/>
                        <strong>Terms and Conditions</strong>
                    </div>
                        <hr/>
                    <div>
                        <div id="terms" class="quiz_condition">
                            <p><span >1. Quiz is open for all Indian Citizens. / यह क्विज़ सभी भारतीय नागरिकों के लिए खुला है।&nbsp;</span></p>
                            <p><span >2. Quiz will start as soon as the participant clicks on the ‘Play Quiz’. / क्विज़ ‘Play Quiz’ पर क्लिक करने के तुरंत बाद शुरू हो जाएगा।&nbsp;&nbsp;</span></p>
                            <p><span >3. Entries once submitted cannot be withdrawn. / एक बार सबमिट की गई प्रविष्टियाँ वापस नहीं ली जा सकतीं।&nbsp;</span></p>
                            <p><span >4. Participants will be required to provide their name, email address, telephone number, and additional details as required by the entry form. By submitting their details and participating in the quiz, participants give consent to IRSC &amp; MoRTH to use this information as required to facilitate the conduct of the quiz competition which may include confirmation of participant details. / प्रतिभागियों को अपना नाम, ईमेल पता, टेलीफोन नंबर और अन्य विवरण प्रदान करने होंगे। अपना विवरण प्रस्तुत करके और क्विज़ में भाग लेकर, प्रतिभागी आईआरएससी और एमओआरटीएच को क्विज़ प्रतियोगिता के संचालन को सुविधाजनक बनाने के लिए आवश्यकतानुसार इस जानकारी का उपयोग करने के लिए सहमति देते हैं, जिसमें प्रतिभागी विवरणों की पुष्टि शामिल हो सकती है।&nbsp;&nbsp;</span></p>
                            <p><span >5. Multiple entries from the same participant will not be accepted. / एक ही प्रतिभागी द्वारा कई प्रविष्टियाँ स्वीकार नहीं की जाएंगी।</span></p>
                            <p><span >6. Bonafide documents (proof of identity, age, address and bank details) will be required to be submitted by the winners after announcement of the result of the quiz. Non-furnishing of the above Information/documents at appropriate stage will render the selection null and void. / विजेताओं को परिणाम की घोषणा के बाद प्रमाणित दस्तावेज़ जमा करने की आवश्यकता होगी।&nbsp;</span></p>
                            <p><span >7. Discovery/detection/noticing of use of any unfair/spurious means/malpractices, including but not limited to impersonation, double participation etc., during the participation in the quiz, will result in the participation being declared null and void and hence, rejected. The organizers of the quiz competition or any agency acting on their behalf reserves the right in this regard. / अनुचित तरीकों या धोखाधड़ी का उपयोग करने वाले प्रतिभागियों की प्रविष्टियाँ रद्द कर दी जाएंगी।&nbsp;</span></p>
                            <p><span >8. Employees, directly or indirectly connected with organizing the quiz, are not eligible to participate in the quiz. This ineligibility also applies to their immediate family members. / क्विज़ आयोजन से जुड़े कर्मचारी और उनके परिवार भाग नहीं ले सकते।&nbsp;</span></p>
                            <p><span >9. The IRSC &amp; MoRTH will disburse the winning amount/ rewards to the selected winner(s) after publishing the Winner Announcement Blog on blog.mygov.in / विजेताओं को पुरस्कार राशि की घोषणा के बाद प्रदान की जाएगी।&nbsp; &nbsp;</span></p>
                            <p><span >10. In the event of unforeseen circumstances, the IRSC &amp; MoRTH reserve the right to amend the terms and conditions of the competition at any time or cancel the competition as considered. / अप्रत्याशित परिस्थितियों में प्रतियोगिता की शर्तों में संशोधन या रद्द करने का अधिकार आयोजकों के पास सुरक्षित है।</span></p>
                            <p><span >11. The IRSC &amp; MoRTH will not accept any responsibility for entries that are lost, are late, incomplete or have not been transmitted due to computer error or any other error beyond the organizer’s responsibility. / देर से, अपूर्ण या तकनीकी त्रुटियों के कारण खोई प्रविष्टियों की ज़िम्मेदारी आयोजक नहीं लेंगे।</span></p>
                            <p><span >12. The participants shall abide by all the terms and conditions of the quiz competition, including any amendments or further updates. / सभी प्रतिभागी क्विज़ प्रतियोगिता की शर्तों का पालन करने के लिए बाध्य होंगे।&nbsp;</span></p>
                            <p><span >13. The decision of the IRSC &amp; MoRTH on the Quiz shall be final, and binding and no correspondence will be entered into regarding the same. / क्विज़ पर आयोजकों का निर्णय अंतिम और बाध्यकारी होगा।&nbsp;</span></p>
                            <p><span >14. All disputes/ legal complaints are subject to the jurisdiction of Delhi only. Expenses incurred for this purpose will be borne by the parties themselves. / सभी विवाद दिल्ली न्यायालय के अधीन होंगे। इस प्रयोजन के लिए किया गया व्यय पार्टियों द्वारा स्वयं वहन किया जाएगा।&nbsp;&nbsp;</span></p>
                            <p><span >15. IRSC &amp; MoRTH will not accept any responsibility for entries that are lost, are late or incomplete or have not been transmitted due to computer error or any other error beyond the organizer’s reasonable control. Please note proof of submission of the entry is not proof of receipt of the same. / आईआरएससी और एमओआरटीएच उन प्रविष्टियों के लिए कोई ज़िम्मेदारी स्वीकार नहीं करेंगे जो खो गई हैं, देर से या अधूरी हैं या कंप्यूटर त्रुटि या आयोजक के उचित नियंत्रण से परे किसी अन्य त्रुटि के कारण प्रेषित नहीं की गई हैं। कृपया ध्यान दें कि प्रविष्टि जमा करने का प्रमाण उसकी प्राप्ति का प्रमाण नहीं है।</span></p>
                            <p><span >16. By participating in the Quiz, the participant accepts and agrees to be bound by the above-mentioned terms and conditions. / क्विज़ में भाग लेकर प्रतिभागी शर्तों और नियमों से सहमत होते हैं।&nbsp;</span></p>
                            <p><span >17. The terms and conditions henceforth shall be governed by Indian laws and the judgments of the Indian judicial system. / अब से नियम और शर्तें भारतीय कानूनों और भारतीय न्यायिक प्रणाली के निर्णयों द्वारा शासित होंगी।</span></p>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

