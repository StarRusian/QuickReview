import React from "react";
import CountUp from "react-countup";

const subTitle = "Why Choose Us";
const title = "Make Your Choice Smart";
const desc =
  "Make Quickreview your go-to destination for quick and reliable product insights. Embrace a smarter way to shop with our QuickReview feature – because your time is valuable, and so are your choices";

const btnText = "Apply Now";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "100",
    text: "Number of User from last Month",
  },

  {
    iconName: "icofont-notification",
    count: "40",
    text: "New Member ",
  },
];

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-cl-3">
            <div className="col">
              {countList.map((val, i) => (
                <div key={i} className="count-item">
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                        <h2>
                            <span>
                                <CountUp end={val.count} />
                            </span>
                            <span>+</span>
                        </h2>
                        <p> {val.text} </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col">
                <div className="instructor-content">
                    <span className="subtitle">
                        {subTitle}
                    </span>
                    <h2 className="title">
                        {title}
                    </h2>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>    

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
