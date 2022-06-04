import "./App.css";
import { useState } from "react";
import firebase from "./firebase";
import Button from "react-bootstrap/Button";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { Link as LinkAs } from "react-scroll";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState("No");
  const [company, setCompany] = useState("");

  const [salary, setSalary] = useState(30000);
  const [amount, setAmount] = useState(3000.0);
  const [days, setDays] = useState(10);
  const [submitted, setSubmitted] = useState(false);

  // Push Function

  const calcAmount = (e) => {
    setDays(e.target.value);
    setAmount(((salary / 31) * e.target.value).toFixed(2));
  };

  const calcAmountSalChange = (sal) => {
    setAmount(((sal / 31) * days).toFixed(2));
  };

  const postMessage = () => {
    const todoRef = firebase.database().ref("Users");
    const todo = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      company: company,
      selected: selected,
    };
    var newKey = todoRef.push(todo).getKey();
    setSubmitted(true);
    setFirstName("");
    setSecondName("");
    setCompany("");
    setEmail("");
    setSelected("");
  };

  return (
    <div class Name="App">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="letter_logo.png"
              alt="Avatar Logo"
              style={{
                transform: "scale(1.5)",
                marginLeft: "15px",
                width: "30px",
              }}
              class="rounded-pill"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <LinkAs to="about" spy={true}>
                  <a className="nav-link" href="#">
                    About
                  </a>
                </LinkAs>{" "}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="row" style={{ backgroundColor: "#F8F3EA", padding: "10px" }}>
        <div class="col-lg-2"></div>
        <div class="col-lg-4">
          {" "}
          <br />
          <br />
          <center>
            <img src="image1.png" style={{ width: "100%" }} />
          </center>
          <br />
          <br />
        </div>
        <div class="col-lg-4">
          <br />
          <br />
          <center>
            <img src="mainpage.png" style={{ width: "100%" }} />
          </center>
          <br />
          <br />
        </div>
        <div class="col-lg-2"></div>
        <br />
        <br />
        <br />
      </div>
      <div>
        <div
          className="row"
          style={{ backgroundColor: "#EF7E46", padding: "10px" }}
        >
          <div class="col-lg-2"></div>
          <div class="col-lg-3">
            <br />
            <br />
            <br />
            <h2 style={{ color: "#fff", fontFamily: "Open Sans" }}>
              <b>Earned salary</b> is a part of your salary that you can access
              before your payday.
            </h2>
            <br />
            <br />
            <h4 style={{ color: "#fff", fontFamily: "Open Sans" }}>
              Were you aware of earned salary before this?
            </h4>

            <center>
              <Button
                variant="outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={() => {
                  setSelected("Yes");
                }}
              >
                Yes
              </Button>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <Button
                variant="outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={() => {
                  setSelected("No");
                }}
              >
                No
              </Button>{" "}
            </center>
            <br />
            <br />
          </div>
          <div class="col-lg-1"></div>
          <div
            class="col-lg-4 p-2
          "
          >
            <br />
            <br />
            <center>
              <h3 style={{ color: "#fff", fontFamily: "Open Sans" }}>
                Calculate your earned salary
              </h3>

              <br />
              <TextField
                id="standard-basic"
                label="Enter Salary"
                variant="standard"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                  calcAmountSalChange(e.target.value);
                }}
              />
            </center>
            <br />
            <br />
            <h5 style={{ fontFamily: "Open Sans" }}>Day of the month </h5>
            <center>
              <Slider
                label="eagwrsfbg"
                defaultValue={10}
                onChange={calcAmount}
                value={days}
                aria-label="Default"
                valueLabelDisplay="auto"
                valueLabelDisplay="on"
                max="31"
              />
              <br />
              <h4>
                Rs. {amount}
                <br />
              </h4>
              <h5 style={{ color: "#fff", fontFamily: "Open Sans" }}>
                Access this money before your payday!
              </h5>
              <br /> <br />
            </center>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
      <div>
        {/* The Modal */}
        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{ backgroundColor: "#F8F3EA" }}
            >
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Thanks for showing interest!</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
              {/* Modal body */}
              <div
                className="modal-body"
                style={{ backgroundColor: "#F8F3EA" }}
              >
                <div className="container mt-3">
                  <form>
                    <div className="row">
                      <h5>
                        Please fill the below details to learn more and follow
                        for updates!
                      </h5>

                      <div className="col">
                        <br />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name*"
                          value={firstName}
                          required
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="col">
                        <br />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Second Name*"
                          required
                          value={secondName}
                          onChange={(e) => setSecondName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <br />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id*"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </form>
                  <div className="row">
                    <div className="col">
                      <center>
                        <br />
                        <button
                          onClick={() => {
                            postMessage();
                          }}
                          type="button"
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </center>
                    </div>
                    <div className="col">
                      {" "}
                      <center>
                        <br />
                        <a
                          href="Noww_INFORMATION_DOCUMENT_v1.pdf"
                          download="proposed_file_name"
                        >
                          <button type="button" className="btn btn-primary">
                            Download
                          </button>
                        </a>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <center>
                <button type="button" className="btn btn-primary">
                  Take a quick survey
                </button>
              </center>
              <br />
              <center>
                <h4>Sucessfully Submitted</h4>
              </center>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        class="row"
        style={{ backgroundColor: "#F8F3EA", padding: "10px" }}
      >
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <br />
          <br />
          <br />
          <h3 style={{ color: "#EF7E46", fontFamily: "Open Sans" }}>
            Life happens from paycheck to paycheck...
          </h3>
          <img src="image3.png" style={{ width: "100%" }} />
          <h4
            style={{
              color: "#EF7E46",
              fontFamily: "Open Sans",
              textAlign: "center",
            }}
          >
            Financial needs and emergencies don’t move around the 30-day pay
            cycle
          </h4>
        </div>
        <div class="col-lg-2"></div>
        <br />
        <div class="col-lg-2"></div>
        <div class="col-lg-4">
          <br />
          <br />
          <br />
          <center>
            <div
              style={{
                border: "3px solid #EF7E46",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <h5 style={{ fontFamily: "Open Sans", textAlign: "justify" }}>
                Access to earned wages is a right, and we believe providing
                simple access to these earnings will empower people to stay away
                from short-term unwanted borrowing. Our vision is to positively
                impact the lives of a billion working population. We democratise{" "}
                <b style={{ color: "#EF7E46" }}>access and control</b> to your
                payroll and data in a reliable, quick and secure way.
              </h5>
            </div>
            <br /> <br /> <br />
          </center>
        </div>
        <div class="col-lg-4">
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <img
              src="try.png"
              alt="imag"
              style={{
                width: "50%",
              }}
            />
            <br /> <br /> <br />
          </center>
        </div>
        <div class="col-lg-2"></div>
        <br />
      </div>
      <div>
        <center>
          <div
            className="row"
            style={{ backgroundColor: "#EF7E46", padding: "10px" }}
          >
            <div class="col-lg-2"></div>
            <div class="col-lg-3">
              <h3 style={{ color: "#fff", fontFamily: "Open Sans" }}>
                You can Noww earn a portion of your{" "}
                <b>real-time earned salary</b>
                at any time before your payday through our platform!
              </h3>
              <br />
            </div>
            <div class="col-2"></div>
            <div class="col-lg-3">
              <div class="row">
                <div class="col-2">
                  <img
                    src="unexpanded.png"
                    style={{
                      width: "100%",
                      marginTop: "-30px",
                      transform: "scale(2)",
                    }}
                  />
                </div>
                <div class="col-2"></div>
                <div class="col-2">
                  <img
                    src="expanded.png"
                    style={{
                      width: "100%",
                      marginTop: "-30px",
                      transform: "scale(2)",
                    }}
                  />
                </div>
                <div class="col-2"></div>
                <div class="col-2">
                  <img
                    src="Withdrawal.png"
                    style={{
                      width: "100%",
                      marginTop: "-30px",
                      transform: "scale(2)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-2"></div>
          </div>
        </center>
      </div>

      <div class="row" style={{ backgroundColor: "#F8F3EA", padding: "10px" }}>
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <br />
          <br />
          <br />
          <h3 style={{ color: "#EF7E46", fontFamily: "Open Sans" }}>
            A smooth financial experience like no other
          </h3>
          <h4 style={{ color: "#EF7E46", fontFamily: "Open Sans" }}>
            and appreciate the real financial wellness!
          </h4>
          <br />
          <br />
          <img src="image2.png" style={{ width: "100%" }} />
        </div>
        <div class="col-lg-2"></div>
        <br />
        <br />
        <div className="container mt-3">
          <center>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Learn More
            </button>
            <br />
            <br /> <br />
          </center>
        </div>
        <br />
      </div>
      <nav class=" bg-dark navbar-dark p-1">
        <div class="container-fluid"></div>
        <center>
          <img
            src="dark.png"
            style={{
              width: "90px",
              borderRadius: "16px",
              border: "2px solid grey",
            }}
          />
        </center>
      </nav>
    </div>
  );
}
