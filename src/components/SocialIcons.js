import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="social-links-row">
      <a
        href="https://www.facebook.com/people/Apex-Electricals/100090350542195"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
        />
      </a>
      <a
        href="https://www.instagram.com/apex.electricals"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};

export default SocialIcons;
