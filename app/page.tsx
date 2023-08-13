import { ToastsContainer } from '@/components/toast_container'
import { CreateToastButton } from './sections/button_client'


export default function Home() {
  return (
    <>
      <CreateToastButton />

      <ToastsContainer />
    </>
  )

}


