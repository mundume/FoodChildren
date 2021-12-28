/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/loves.png';
import logoWhite from 'assets/images/loves.png';

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image
        width="100"
        height="37"
        src={isWhite ? logoWhite : logo}
        alt="startup landing logo"
      />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    img: {
      maxWidth: [150, '100%'],
    },
  },
};
