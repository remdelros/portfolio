import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Icons = () => {
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <a
        href="https://www.linkedin.com/in/christian-remoh-mappatao-8942012a6/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <FaLinkedin style={{ fontSize: '24px' }} />
      </a>

      <a
        href="https://github.com/remdelros"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <FaGithub style={{ fontSize: '24px' }} />
      </a>

      <a
        href="https://www.facebook.com/remoh.mappatao.01/"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <FaFacebook style={{ fontSize: '24px' }} />
      </a>

      <a
        href="https://www.instagram.com/remohmora/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <FaInstagram style={{ fontSize: '24px' }} />
      </a>
    </div>
  );
};

export default Icons;
