import UserContextProvider from "./ContextProvider"
import Login from "./components/login"
import Profile from "./components/profile"
import ThemeToggelBtn from "./Thembtn"
import { ContextProvider } from "./ThemeContext"

function App() {

  return (
    <div className="h-[100vh] w-auto dark:bg-[#061119] bg-gray-200 flex items-center justify-center ">
      <div className="flex flex-col items-center">
      <ContextProvider>
      <ThemeToggelBtn/>
      </ContextProvider>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>

      </div>
    </div>
  )
}

export default App
