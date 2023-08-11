import { ToastsContainer } from '@/components/toast_container'
import { CreateToastButton } from './button_client/button_client'


export default function Home() {
  return (
    <>
      <CreateToastButton />

      <ToastsContainer />
    </>
  )

}


