import cn from "@/utils/cn";
import "./Container.scss";

interface IContainerProps {
	children: React.ReactNode;
}
const Container = ({ children }: IContainerProps) => {
	return <div className={cn("container", "header", true)}>{children}</div>;
};

export default Container;
