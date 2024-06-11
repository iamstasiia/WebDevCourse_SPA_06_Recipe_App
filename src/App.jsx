import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home.page";
import RecipePage from "./pages/Recipe.page.jsx";
import { QueryProvider } from "./contexts/Query.context.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/recipes">
      <Route index element={<Home />} />
      <Route path=":recipeLabel" element={<RecipePage />} />
    </Route>
    <Route path="*" element={<Navigate to='/recipes' />} />
    </>
  )
)

function App() {
    return (
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    );
}

export default App;
