import React from "react";
import cv from "../cv.json";
import { Footer, Href, MetaTags } from "../components";
import { Link } from "react-router-dom";

const Cv = () => {
  return (
    <>
      <MetaTags
        name="CV"
        description="Hi! My name is Aneta and I have been working as a freelance front end developer and illustrator"
        image="/images/intro.png"
      />
      <Link to="/cv">
        <div className="portrait"></div>
      </Link>
      <div className="blog-container cv-container">
        <div className="blogs">
          <div className="portrait-img">
            <img
              src="/images/intro.png"
              alt="aneta camo portrait"
              style={{ objectFit: "cover", filter: "none" }}
            />
          </div>
          <div className="header">
            <h2>
              <span className="large-font">Hi</span> my name is Aneta Camo
            </h2>
            <Href href="mailto:anetacamova@gmail.com?subject=greeting">
              anetacamo@gmail.com
            </Href>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Href href="https://www.instagram.com/anetacamo">
              illustrations
            </Href>
            <br />
            <p style={{ marginTop: 4 }}>
              born in Prague &nbsp; | &nbsp; based in Aarhus &nbsp;
            </p>
            <div className="divider"></div>
            {/* <p>
              Hi there, I have been working as a freelance or employed
              front-ender developer with a lot of interest into designing and
              illustrating the items. I have an eye on small details, smooth
              transitions and all sorts of details that can enhance the whole
              expirence of using a web or an application on all devices. I
              really enjoy building things with react, next, typescript and sass
              but also love to learn new things and am not afraid to set up own
              server or any kind of databases
            </p> */}
            <h2>TOOLSTACK</h2>
            {cv.cv.toolstack.map((tool) => (
              <li>{tool}</li>
            ))}
            <div className="divider"></div>
            <h2>Working EXPERIENCE</h2>
            {cv.cv.experience.map((exp) => (
              <>
                <h4>
                  <a href={exp.link}>{exp.company}</a>
                </h4>
                <p>
                  <i>{exp.time}</i>
                </p>
                <p>
                  {exp.text}
                  <li>
                    <a href={exp.link}>{exp.company}</a>
                  </li>
                </p>
              </>
            ))}
            <div className="divider"></div>
            <h2>REFERENCES</h2>
            <div className="boxes">
              {cv.cv.references.map((ref) => (
                <div className="box">
                  <div className="cv-circle circle">
                    <Href href={ref.link}>
                      <img src={ref.image} alt="a wallet illustration" />
                    </Href>
                  </div>
                  <h2>
                    <Href href={ref.link}>{ref.title}</Href>
                  </h2>
                  <p>{ref.text}</p>
                  <div className="tags">
                    {ref.tags.map((tag) => (
                      <li>{tag}</li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cv;
