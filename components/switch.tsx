export function Switch({
  on,
  onClick
}: {
  on: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`transition-all delay-100 w-12 h-6 py-0.5 rounded-full ${on ? `bg-green-500` : `bg-slate-500`}`} onClick={
      onClick
    }>
      <input type="checkbox"
        className={`transition-all delay-100 appearance-none bg-white rounded-full w-[22px] h-5 ${on ? `translate-x-[100%]` : `translate-x-[20%]`}`} />
    </div>
  )
}