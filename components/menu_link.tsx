import { MenuLinkProps } from "@/types/options/menu_link_props"
import { MenuSubLink } from "./menu_sub_link"



export function MenuLink({
  link,
  text,
  subLinks,
}: MenuLinkProps) {
  if (subLinks) {
    return <MenuSubLink link={link} text={text} subLinks={subLinks} />
  }

  return (
    <div className="block w-full relative">
      <a className="block p-2 hover:bg-slate-300 hover:text-white" href={link}>{text}</a>
    </div>
  )
}