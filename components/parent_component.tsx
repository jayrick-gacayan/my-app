export function ParentComponent({
  type,
  placeholder,
  onChange,
  value
}: {
  type: 'text',
  placeholder: string;
  onChange: (data: string) => void;
  value: any;
}): JSX.Element {
  return (
    <div className="w-full my-2" >

    </div>
  )
}