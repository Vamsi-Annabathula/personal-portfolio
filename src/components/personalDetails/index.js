import dp from './../../images/dp.jpg';
import './style.css';

const PersonalDetails = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dp} className="display-picture" alt="logo" />
        <p>
          Hi! my name is <code>Vamsi Annabathula</code>
          <br />
          I am a <code>Full stack developer</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/Vamsi-Annabathula"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>My Github</code>
        </a>
      </header>
    </div>
  );
}

export default PersonalDetails;
