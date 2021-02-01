const imageContent = document.getElementById('image');

class App extends React.Component {
  render() {
    return (
      <div>
            <h1>Nishchita Ajit</h1>
            <img alt="react logo"  src="Headshot.jpg"  />
            <p>I am Nishchita Ajit, currently pursuing masters in Computer Science at San Diego State University.<br/>
            I am a patient, hardworking and dedicated person.<br/>
            I'm interested in acquiring knowledge about the latest technologies which includes various fields in computer science such as<br/>
            front end and back end web technologies, data visualization, deep learning and more.<br/>
            I've previously worked as a Software Engineer at Arm Embedded Technologies. My hobbies include reading novels and cooking.</p>
            <p>
              <button> <a href="https://github.com/nishchitaajit" target="_blank">VIEW MY GITHUB REPO</a></button>
            </p>
          </div>
    );
  }
}
ReactDOM.render(<App />, imageContent);
