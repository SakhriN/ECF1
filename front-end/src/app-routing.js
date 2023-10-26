import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Error from "./routes/Error"
import Project from "./routes/Project"
import Form from "./routes/Form"


const router = createBrowserRouter([
    {path :"/",
    element : <App />,
    errorElement : <Error/>,
    children: [
        {
            path :"/",
            element : <Project/>
        },
        {
            path :"/add",
            element : <Form/>
        },
        {
            path :"/edit/:id",
            element : <Form/>
        },
    ]},
])


export default router