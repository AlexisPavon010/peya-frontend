import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../Components/Layout"
import { HomePage } from "../Pages"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout>
                        <HomePage />
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
    )
}
