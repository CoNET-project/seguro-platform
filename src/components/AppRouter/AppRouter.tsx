import { BrowserRouter as Router } from 'react-router-dom'
import { ReactNode } from "react";

type AppRouterProps = {
    children: ReactNode
}


const AppRouter = ({children}: AppRouterProps) => {
    return (
        <Router>
            { children }
        </Router>
    )
}