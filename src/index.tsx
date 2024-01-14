// utils
import ReactDOM from "react-dom/client"
// App
import App from "./app/App"
// Assets
import "@/app/styles/_style.scss"
import "@/public/index.html"

const rootElement = document.querySelector("#root")

if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
