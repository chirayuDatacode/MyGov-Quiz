import "./Footer.scss";




export default function Footer(){
  return (
    <>
    <footer className="footer wrapper-footer ">
      <div className="logo-wrapper-start container-fluid d-flex justify-content-center pt-2 gap-3 w-100 mx-0 px-0 ">
          <div className="row d-flex justify-content-center w-100 ">
            <div className="col-lg-10 d-flex justify-content-between align-items-center mb-2">
                <div className="server-info-left"><span>Copyright © MyGov 2014</span></div>
                <div className="server-info-right"><span><strong>Last Updated: Feb, 2025 -aexa-quizweb01</strong></span></div>
            </div>
            <div className="hor_ruler col-lg-10 pt-0"><hr /></div>
            <div className="col-lg-10 d-flex justify-content-between align-items-center mb-2 ">
                <div className="row  w-100 d-flex justify-content-between">
                  <div className="col-6 ">
                    <div className="d-flex  ">
                    <img height="50px" src="https://quiz.mygov.in/wp-content/themes/quizz/assets/images/logo-nic.png" />
                    <p className="my-1 mx-1 text-white">© Content owned, updated and maintained by the <a className="text-white" href="https://www.mygov.in/" title="MyGov (External link will open in new window)" target="_blank">MyGov</a> Cell. This website belongs to <a href="https://www.mygov.in/" title="MyGov (External link will open in new window)" target="_blank">MyGov</a>, <a href="https://www.meity.gov.in/" title="Ministry of Electronics &amp; Information Technology (External link will open in new window)" target="_blank">Ministry of Electronics &amp; Information Technology</a>, <a href="https://www.india.gov.in/" title="Government of India. (External link will open in new window)" target="_blank">Government of India</a>. <br/>Platform is designed, developed and hosted by <a href="https://www.nic.in" title="NIC Logo (External link will open in new window)" target="_blank">National Informatics Centre.</a></p>
                    </div>
                  </div>
                  <div className="col-6 ">
                  <div class="social-content">
                    <p>Follow us</p>
                    <a href="https://twitter.com/mygovindia" target="_blank" title="MyGov-Twitter" class="jquery-once-4-processed"><i class="twitter-icon">MyGov-Twitter</i></a>
                    <a href="https://facebook.com/MyGovIndia/" target="_blank" title="MyGov-Facebook" class="jquery-once-4-processed"><i class="fb-icon">MyGov-Facebook</i></a>
                    <a href="http://youtube.com/mygovindia" target="_blank" title="MyGov-YouTube" class="jquery-once-4-processed"><i class="youtube-icon">MyGov-YouTube</i></a>
                    <a href="https://www.instagram.com/mygovindia/" target="_blank" title="MyGov-Instagram" class="jquery-once-4-processed"><i class="insta-icon">MyGov-Instagram</i></a>
                    <a href="https://wa.me/919013151515?text=Hi" target="_blank" title="MyGov-WhatsApp" class="jquery-once-4-processed"><i class="whatsapp-icon">MyGov-WhatsApp</i></a>
                    <a href="https://www.linkedin.com/company/mygov-india/" target="_blank" title="MyGov-LinkedIn" class="jquery-once-4-processed"><i class="linkedin-icon">MyGov-LinkedIn</i></a>
                    <a href="https://www.messenger.com/t/MyGovIndia" target="_blank" title="MyGov-Messenger" class="jquery-once-4-processed"><i class="messenger-icon">MyGov-Messenger</i></a>                    
                  </div>
                  </div>
                </div>
            </div>
          </div>      
      </div>
      <div className="logo-wrapper-center d-flex justify-content-center py-2 gap-3">
                  <a href=""><img src="https://www.mygov.in/footer_service/images/Transforming-india-logo.png" className="img-fluid center-img" /></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/innovation-logo.png" className="img-fluid center-img"/></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/mygov_quiz.png" className="img-fluid center-img"/></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/mygov-footer-logo.png" className="img-fluid center-img"/></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/Meity_logo.png" className="img-fluid center-img"/></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/e-greating.png" className="img-fluid center-img"/></a>
        </div>
        <div className="logo-wrapper-end d-flex  justify-content-center py-4 gap-4">
                  <a href=""><img src="https://www.mygov.in/footer_service/images/digital-india-logo.png" className="img-fluid image-end" /></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/data-gov-logo.png" className="img-fluid image-end"/></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/india-gov-logo.png" className="img-fluid image-end"/></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/mygov-footer-logo.png" className="img-fluid image-end"/></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/itowe-logo.png" className="img-fluid image-end"/></a>
                  <a href=""><img src="https://www.mygov.in/footer_service/images/pm-india-logo.png" className="img-fluid image-end"/></a>
        </div>
      </footer>
    </>
  )
}
