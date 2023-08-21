export function CustomRadioButton({
  on,
  onToggle,
  activeColor,
}: {
  on: boolean;
  activeColor: {
    background: string;
    border: string;
  }
  onToggle: () => void;
}): JSX.Element {

  return (
    <div className={`transition-all delay-100 relative rounded-full h-6 w-6 inline-block border ${on ? activeColor.border : `border-slate-300`}`}
      onClick={onToggle}>
      <div className={`transition-all delay-100 absolute top-[6.25%] left-[6.25%] block w-5 h-5 rounded-full ${on ? activeColor.background : `bg-transparent`}`} />
    </div>
  )
}