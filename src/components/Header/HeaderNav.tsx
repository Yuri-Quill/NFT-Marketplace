import { memo } from "react";
import { Link } from "react-router-dom";

import { headerNavData } from "@/data/headerNav.data";

const HeaderNav = () => {
	return (
		<nav className="header__nav">
			<ul className="header__nav-list">
				{headerNavData.map((item) => (
					<li className="header__nav-item" key={item.id}>
						<Link className="header__nav-link" to={item.href} aria-label={item.description}>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default memo(HeaderNav);
