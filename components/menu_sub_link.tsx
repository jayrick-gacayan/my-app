import { MenuLinkProps } from "@/types/options/menu_link_props"
import { MenuLink } from "./menu_link"

export function MenuSubLink({
  link,
  text,
  subLinks,
}: MenuLinkProps) {
  return (
    <section className={`block w-full relative [&>div]:hover:visible`}>
      <a className="block p-2 hover:bg-slate-300 hover:text-white" href={link}>{text}</a>

      {
        subLinks && (
          <div className={`absolute top-0 bg-white left-full invisible border w-20 border-slate-300`}>
            {
              subLinks && subLinks.map((subLink: MenuLinkProps) => {
                return <MenuSubLink
                  key={`sub-link-item-${subLink.text}`}
                  link={subLink.link}
                  text={subLink.text}
                  subLinks={subLink.subLinks} />
              })
            }
          </div>
        )
      }

    </section>

  )
}