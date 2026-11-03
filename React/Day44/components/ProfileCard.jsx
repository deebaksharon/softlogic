import "./Style1.css";
import profileImage from "./profile.webp";

function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        src={profileImage}
        alt="Profile"
        className="profile-img"
      />

      <h2>Deebak Sharon</h2>
      <h4>Software Developer</h4>
      <p>
        I love creating websites and learning
        new technologies.
      </p>

      <button className="follow-btn">Follow</button>
    </div>
  );
}

export default ProfileCard;
