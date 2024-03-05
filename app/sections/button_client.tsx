'use client';

import { ModalWrapperComponent } from "@/components/modal_wrapper";
import { Switch } from "@/components/switch";
import { ToastContext } from "@/contexts/toast_context";
import { useModal } from "@/hooks/use_modal";
import { useOutsideClick } from "@/hooks/use_outside_click";
import { useSwitch } from "@/hooks/use_switch";
import { useContext, useEffect, useRef, useState } from "react";
import { OtpInputContainer } from "./otp_input_container";
import { CustomRadioButton } from "@/components/custom_radio_button";
import { useToggle } from "@/hooks/use_toggle";
import { MenuLinkProps } from "@/types/options/menu_link_props";
import { MenuLink } from "@/components/menu_link";
import { MenuSubLink } from "@/components/menu_sub_link";

const menuLinks: MenuLinkProps[] = [
  {
    link: '#',
    text: 'Link 1',
    subLinks: [
      { link: '#', text: 'Link 1:1', },
      { link: '#', text: 'Link 1:2', },
      { link: '#', text: 'Link 1:3', }
    ]
  },
  {
    link: '#',
    text: 'Link 2',
    subLinks: [
      {
        link: '#',
        text: 'Link 2:1',
        subLinks: [
          {
            link: '#',
            text: 'Link 2:1:1',
          },
          {
            link: '#',
            text: 'Link 2:1:2',
          }
        ]
      },
      { link: '#', text: 'Link 2:2', },
    ]
  },
  {
    link: '#',
    text: 'Link 3',
    subLinks: [
      {
        link: '#',
        text: 'Link 3:1',
      },
      {
        link: '#',
        text: 'Link 3:2',
        subLinks: [
          {
            link: '#',
            text: 'Link 3:2:1',
            subLinks: [
              { link: '#', text: 'Link 3.2.1.1' },
              { link: '#', text: 'Link 3.2.1.2' }
            ]
          },
          {
            link: '#',
            text: 'Link 3:2:2',
          }
        ]
      },
    ]
  }
]

export function CreateToastButton() {
  const modalContentRef = useRef(null);
  const { on, setOn } = useSwitch();
  const { toggle: radioOn, setToggle: setRadioOn } = useToggle();
  const modalRef = useRef<HTMLDivElement>(null);
  const { isShowing, setIsShowing } = useModal();
  const { toastMessage } = useContext(ToastContext);
  const [requestStatus, setRequestStatus] = useState('none');

  useEffect(() => {
    if (requestStatus === 'success') {
      toastMessage('success', `Success Message`);
      setRequestStatus('none');
    }
  }, [requestStatus]);

  useOutsideClick(modalContentRef, () => {
    onClose();
  });

  function onClose() {
    if (modalRef.current) {
      modalRef.current.classList.remove('animate-fade-in');
      modalRef.current.classList.add('animate-fade-out');
      setTimeout(() => { setIsShowing(false); }, 400)
    }
  }

  return <>
    <button className="bg-slate-500 p-2 block"
      onClick={() => {
        setRequestStatus('success')
        // setIsShowing(!isShowing);
        // let alertActions = ['success', 'warning', 'info', 'danger'];
        // let alertAction = alertActions[Math.floor(Math.random() * alertActions.length)]
        // toastMessage(alertAction, `${alertAction} Message`)
      }}>
      Click me
    </button>
    <br />
    <Switch on={on} onClick={() => { setOn(!on); }} />
    <br />
    <CustomRadioButton on={radioOn}
      onToggle={() => { setRadioOn((on) => { return !on; }); }}
      activeColor={{
        background: 'bg-[#22C55E]',
        border: 'border-[#22C55E]'
      }} />
    <br />
    <div className="p-2">
      <div className="bg-white p-4 rounded-lg">
        <div className="relative bg-inherit">
          <input type="text"
            id="username"
            name="username"
            className="peer bg-transparent h-10 w-72  text-gray-200 placeholder-transparent px-2 border-b border-b-slate-300 focus:outline-none focus:border-sky-600" placeholder="Type inside me" />
          <label htmlFor="username"
            className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Type inside me</label>
        </div>
      </div>
    </div>

    <div className="p-2">
      <div className="bg-white p-4 rounded-lg">
        <div className="relative bg-inherit">
          <input type="text"
            id="username"
            name="username"
            className="peer bg-transparent h-10 w-72  text-gray-200 placeholder-transparent px-2 border-b border-b-slate-300 ring-2 focus:ring-slate-300 rounded-lg focus:outline-none focus:border-sky-600" placeholder="Type inside me" />
          <label htmlFor="username"
            className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Type inside me</label>
        </div>
      </div>
    </div>

    <div className="mb-2 w-20 relative border border-slate-300 bg-white">
      {
        menuLinks.map((value: MenuLinkProps, index: number) => {
          return <MenuLink key={`menu-link-${index}-${value.text}`}
            link={value.link}
            text={value.text}
            subLinks={value.subLinks} />
        })
      }
    </div>

    <OtpInputContainer />
    <ModalWrapperComponent
      ref={modalRef}
      show={isShowing}
      onClose={onClose}>
      <div className="bg-white w-80 rounded border border-slate-600 p-2 h-48 shadow-slate-600"
        ref={modalContentRef}>
        <div>
          I am here
          <button className="bg-green-500 text-white p-2" onClick={onClose}>Click Me</button>
        </div>
      </div>
    </ModalWrapperComponent>
  </>
}