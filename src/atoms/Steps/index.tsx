import { Steps as AntdSteps, StepsProps, StepProps } from "antd";
import "./index.css";

export interface IStepsProps extends StepsProps {}
export interface IStepProps extends StepProps {}

export const Steps: React.FC<IStepsProps> = (props) => {
    return <AntdSteps className="custom-steps" {...props}></AntdSteps>;
};

export const Step: React.FC<IStepProps> = (props) => {
    return <AntdSteps.Step className="custom-step" {...props}></AntdSteps.Step>;
};
