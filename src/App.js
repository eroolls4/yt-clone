import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";
import {Provider} from "react-redux";
import store from "./utils/store";
import {createBrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import {RouterProvider} from "react-router-dom";

function App() {

    const appRouter=createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
        {
            path : "/browse",
            element: <Body/>
        }
    ])

    return (
        <Provider store={store} >
        <div>

            <RouterProvider router={appRouter} />
        </div>
       </Provider>
    );
}

export default App;
