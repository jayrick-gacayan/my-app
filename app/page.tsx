import { ToastsContainer } from '@/components/toast_container'
import { CreateToastButton } from './sections/button_client'
import { ToastContextProvider } from '@/providers/toast_context_provider'


export default function Home() {
  return (
    <>
      <ToastContextProvider>
        <CreateToastButton />

        <ToastsContainer />
      </ToastContextProvider>
    </>
  )

}


