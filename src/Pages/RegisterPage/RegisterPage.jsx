import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./RegisterPage.css";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import axios from "../../api/axios";

const url = "/hackathon/registration";
const categoryurl = "/hackathon/categories-list";
const RegisterPage = () => {
  const [teamInfo, setTeamInfo] = useState({});
  const [category, setCategory] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(categoryurl, {
          Headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);

        setCategory(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategory();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(teamInfo);

    if (
      teamInfo.team_name &&
      teamInfo.email &&
      teamInfo.phone_number &&
      teamInfo.project_topic &&
      teamInfo.category
    ) {
      try {
        const response = await axios.post(url, teamInfo, {
          Headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        setTeamInfo({});
        setModalToggle(true);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div
      className="register-page"
      style={{
        height: modalToggle && "100vh",
        overflowY: modalToggle && "hidden",
      }}
    >
      <Nav />

      <main>
        <div className="left">
          <img src="/images/worker.png" alt="worker" />
        </div>

        <div className="right">
          <form onSubmit={formSubmit}>
            <h3>Register</h3>

            <div className="header">
              <div className="uppertext">
                <span>Be part of this movement</span>
                <img src="/images/move.png" alt="movement" />
              </div>

              <h2>Create Your Account</h2>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Team's Name</label>
                <input
                  onChange={(e) =>
                    setTeamInfo({ ...teamInfo, team_name: e.target.value })
                  }
                  value={teamInfo.team_name}
                  type="text"
                  placeholder="Enter the name of your group"
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  onChange={(e) =>
                    setTeamInfo({
                      ...teamInfo,
                      phone_number: e.target.value,
                    })
                  }
                  value={teamInfo.phone_number}
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  onChange={(e) =>
                    setTeamInfo({ ...teamInfo, email: e.target.value })
                  }
                  value={teamInfo.email}
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label>Project Topic</label>
                <input
                  onChange={(e) =>
                    setTeamInfo({
                      ...teamInfo,
                      project_topic: e.target.value,
                    })
                  }
                  value={teamInfo.project_topic}
                  type="text"
                  placeholder="What is your group project topic"
                />
              </div>
            </div>

            <div className="form-row select-group">
              <div className="form-group">
                <label>Category</label>
                <select
                  onChange={(e) =>
                    setTeamInfo({ ...teamInfo, category: e.target.value })
                  }
                  value={teamInfo.category}
                >
                  <option>Select Your Category</option>
                  {category.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}

                  {/* <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option> */}
                </select>
              </div>

              <div className="form-group">
                <label>Group Size</label>
                <select
                  onChange={(e) =>
                    setTeamInfo({ ...teamInfo, group_size: e.target.value })
                  }
                  value={teamInfo.group_size}
                >
                  <option>Select</option>
                  <option>2</option>
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                </select>
              </div>
            </div>

            <p>Please review your registration details before submitting</p>

            <div className="checker-row">
              <input
                type="checkbox"
                checked={teamInfo.privacy_policy_accepted} // Use checked prop to reflect the state of the checkbox
                onChange={(e) =>
                  setTeamInfo({
                    ...teamInfo,
                    privacy_policy_accepted: e.target.checked, // Toggle the state based on the checkbox value
                  })
                }
              />
              <p>
                I agree with the event terms and conditions and privacy policy
              </p>
            </div>

            <button type="submit"> Register Now</button>
          </form>
        </div>
      </main>

      <div className="modal" style={{ display: modalToggle ? "flex" : "none" }}>
        <SuccessModal changeToggle={() => setModalToggle(false)} />
      </div>

      <div className="lenz-flare toplensflare"></div>

      <div className="lenz-flare bottomlensflare"></div>
      <img
        src="/images/lailacstar.png"
        alt="star"
        className=" registerlailacstar lailacstar"
      />
      <img
        src="/images/lightpurplestar.png"
        alt="lensflare"
        className="lightpurplestar"
      />
      <img
        src="/images/outlinestar.png"
        alt="lensflare"
        className="outlinestar"
      />
      <img src="/images/greystar.png" alt="lensflare" className="greystar" />
      <img src="/images/whitestar.png" alt="lensflare" className="whitestar" />
    </div>
  );
};

export default RegisterPage;
