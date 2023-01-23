import React, { Fragment } from "react";
import Menu from "../Menu/Menu";
import "./aboutUs.css";

const AboutUs = () => {
  const paragraphs = {
    p1: "The Innovation Lab fosters a unique culture to cultivate curiosity and use creativity as a tool for the development of innovative technology projects. Through an environment characterized by teamwork, ensuring project success through experimentation of new ideas and the explicit permissibility of making mistakes and fail in order to achieve allow members to express themselves, learn, share and grow as a community.",
    p2: "The Lab is committed to see beyond the obvious, we are aware that more important than finding a single correct answer we need to consider all questions as we can imagine and explore different ideas. We like to use design thinking, build prototypes and make use of innovative technologies such as 3D printing, drones, computer vision and augmented reality (Leap Motion, Kinect, Google Glass, Oculus Rift), the Internet of Things (Arduino, Launchpad, BeagleBone Black and RaspberryPi) and bring these technologies together to our experiments. Build circuits, write code, develop software and do the necessary to make things work.",
    p3: "In the pursuit of innovation is also required a market and raise awareness in people that would be users of this technology that eventually will become products that people can receive and improve their lifestyle. Therefore, the Lab also has a commitment to promoting entrepreneurship and creating startups. The startups that the Lab supports work in the area of ​​technology because we believe that is the way to have a tangible and short-term change at all levels.",
    p4: "In 2016, Guatemala is ranked 97th globally in terms of innovation, our score is 27.30/100. Both the global leader (Switzerland) and the Latin American leaders (Chile & Costa Rica) have won their seats by investing on research, technological development and education. For us, there is a great opportunity for improvement in the area of ​​innovation.",
    p5: "Innovation requires novelty, can be a small change (sustained innovation) or a radical ( disruptive innovation) but either way, it will be something new. From my perspective this is achieved through the creativity that is nothing else that imagination put into practice. So to succeed in creating, we make use of innovation in assessing how to provide value and solve the right problems in a better way. We constantly look how to be agents of change and to connect ideas when doing technological development, that’s when we use innovation as our key tool in order that things can be implemented. That is why we decided to implement this effort as a laboratory rather than a department. For since the name suggests action implicit, that practical activities will be conducted and projects will be implemented.",
  };
  return (
    <Fragment>
      <section className="topAboutSection" id="top">
        <Menu url={"/aboutUs"} />
        <div className="paragraphs">
          <h3>About Innovation Lab</h3>
          <p className="about">{paragraphs.p1}</p>
          <p className="about">{paragraphs.p2}</p>
          <p className="about">{paragraphs.p3}</p>
          <h3>Why Innovation?</h3>
          <p className="about">{paragraphs.p4}</p>
          <p className="about">{paragraphs.p5}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
