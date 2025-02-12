import "./Header.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Emblem from '../../assets/NationalEmblem2.png';
import flag from '../../assets/flag.jpg';






export default function Header() {
  return (
    <>
      <nav class="navbarUpper navbar-expand-lg  ">
        <div class="container-fluid justifly-content-center d-flex align-items-center h-100 ">
          <img src={flag} class="offset-lg-1"alt="Flag" id='img-flag'/>
          <p class='px-3 m-0  text-white'> GOVERNMENT OF INDIA</p>
        </div>
      </nav>

      <nav class="navbarLower navbar-expand-lg   ">
        <div class="navbarLowerContent container-fluid  h-100 justifly-content-center">
            <img src="https://quiz.mygov.in/wp-content/themes/quizz/assets/images/mygov-logo.png" class=" img-fluid offset-lg-1 py-2"alt="NationalEmblem" id='img-Emblem'/>
            <img src="https://quiz.mygov.in/wp-content/themes/quizz/assets/images/beta_logo.png" class=" img-fluid "  id='img-quiz'/>
        </div>
      </nav>
      <img src="https://quiz.mygov.in/wp-content/themes/quizz/assets/images/header-border.jpg" class=" img-fluid " alt="NationalEmblem" id='img-hr'/>
    </>
  )

}
