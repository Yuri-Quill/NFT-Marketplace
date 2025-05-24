import { Link } from "react-router-dom";
import cn from "@/utils/cn";

import LogoImg from "@assets/icons/logo.svg";

import "./Logo.scss";

interface ILogoProps {
	className: string;
}

const Logo = ({ className }: ILogoProps) => {
	return (
		<Link className={cn({ baseClass: "logo", additionalClass: className })} to="/" aria-label="Go to the main page">
			<img className="logo__img" src={LogoImg} alt="NFT Marketplace logo" />
			<span className="logo__text">NFT Marketplace</span>
		</Link>
	);
};

export default Logo;
