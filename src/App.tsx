
import QueryClientProvider from "./libs/react-query/Provider"
import Routing from "./pages/Routing"
import { Toaster } from "sonner"


function App() {
  return <QueryClientProvider>
    <Routing />
    <Toaster position="top-center" richColors/>
  </QueryClientProvider>
}

export default App
