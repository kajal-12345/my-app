import { InputHTMLAttributes } from "react";
import {FC} from "react";
interface inputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<inputProps> = ({type,className,...props}) => {
  return <input type={type} className={className} {...props} />;
};

export default Input;
