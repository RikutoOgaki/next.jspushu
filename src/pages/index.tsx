import { useEffect } from 'react'
import OneSignal from 'react-onesignal'

export default function Home() {

  useEffect(() => {
    (async () => {
      await OneSignal.init({
        appId: 'e2119e75-d6f8-4230-a495-28f9c18537c0',
        notifyButton: {
          enable: true,
        }
      });
    })()
  })

  return (
    <>
      <div className='onesignal-customlink-container'></div>
    </>
  )
}