import cn from "@/utils/cn";
import "./Container.scss";

interface IContainerProps {
	children: React.ReactNode;
	className: string;
}
const Container = ({ children, className }: IContainerProps) => {
	return <div className={cn({ baseClass: "container", modifier: className, mod: true })}>{children}</div>;
};

export default Container;
