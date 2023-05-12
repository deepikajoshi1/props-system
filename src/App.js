import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Personal Digital Assistants
          </p>
        </div>
      </section>
      <div className="columns">
        <div class="column">
          <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
        </div>
        <div className="column">
          <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
        </div>
        <div className="column">
          <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
        </div>
      </div>
    </div>
  );
}
export default App;
