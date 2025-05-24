import Container from "../Container/Container";
import Logo from "../Logo/Logo";

import "./Header.scss";

const Header = () => {
	return (
		<header>
			<Container className="header">
				<Logo className="header__logo" />
			</Container>
		</header>
	);
};

export default Header;
