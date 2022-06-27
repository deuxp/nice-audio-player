import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import style from "./Footer.module.scss";

function Footer() {
  const { container, anchor } = style;
  return (
    <>
      <footer className={container}>
        <a
          className={anchor}
          href="mailto:friedi.frieds@gmail.com?subject=hireMe"
        >
          <MailOutlineIcon fontSize="small" />
        </a>
        <a
          className={anchor}
          href="https://linkedin.com/in/gottfriedkleinberger"
        >
          <LinkedInIcon fontSize="small" />
        </a>
        <a className={anchor} href="https://github.com/deuxp">
          <GitHubIcon fontSize="small" />
        </a>
        <a className={anchor} href="https://medium.com/@friedi.frieds">
          <RssFeedIcon fontSize="small" />
          {/* <img src="../../../public/img/medium(1).png" /> */}
        </a>
      </footer>
    </>
  );
}

export default Footer;
