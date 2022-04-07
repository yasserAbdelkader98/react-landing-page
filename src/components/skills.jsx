import "../styles/style.css";
import Progress from "./progressBar";

function Skills() {
  return (
    <>
      <div className="skills-container">
        <h1 className="skills-header">Skills</h1>
        <p className="skills-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel
          sapiente incidunt beatae itaque consequatur sunt voluptatum velit
          quisquam! Impedit, harum? Recusandae, molestiae. Hic voluptatibus
          tempora itaque quod perspiciatis quaerat? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officia at magni ipsa nisi amet et
          beatae! Omnis neque nihil autem velit, magni eaque necessitatibus
          aliquid aut optio harum quibusdam recusandae.
        </p>
        <div className="d-flex justify-content-around">
          <div className="col-4 text-light">
            <h2 className="text-light">My Focus</h2>
            <ul className="list-unstyled px-5">
              <li>JavaScript</li>
              <li>angular</li>
              <li>react</li>
              <li>nodejs</li>
            </ul>
          </div>
          <div className="d-flex flex-column my-5">
            <Progress newName="Html" newValue="100" />
            <Progress newName="Css" newValue="80" />
            <Progress newName="JavaScript" newValue="70" />
            <Progress newName="Angular" newValue="80" />
            <Progress newName="React" newValue="60" />
            <Progress newName="Node" newValue="70" />
            <Progress newName="Mongo" newValue="70" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
