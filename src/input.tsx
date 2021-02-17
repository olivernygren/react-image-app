
import { ChangeEvent, CSSProperties } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function Input(props: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  }
  return (
    <input 
      placeholder="Sök efter bild"
      style={rootStyle} 
      value={props.value} 
      onChange={handleChange} 
    />);
}

const rootStyle: CSSProperties = {
  flex: 1,
  borderRadius: 100,
  border: 'none',
  background: 'rgb(235, 235, 235)',
  height: '2.2rem',
  padding: '0 1rem',
  fontSize: '1rem',
  outline: 'none'
};
  
export default Input;