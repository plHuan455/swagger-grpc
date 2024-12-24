import WebApp from "@twa-dev/sdk"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function useShowBack(props?: {href: string}) {
  const navigate = useNavigate()
  useEffect(() => {
    WebApp.BackButton.show()

    WebApp.BackButton.onClick(() => {
      navigate(props?.href ?? '/')
    })

    return () => {
       WebApp.BackButton.hide()
    }
  }, [props])
}