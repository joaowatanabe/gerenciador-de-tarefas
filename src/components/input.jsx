function Input(props) {
  return (
    <input 
    type={props.type}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" />
  );
}

export default Input;
