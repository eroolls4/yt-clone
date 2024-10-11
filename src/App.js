import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";
import {Provider} from "react-redux";
import store from "./utils/redux/store";
import {createBrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import {RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {

    const appRouter=createBrowserRouter([
        {
            path : "/login",
            element : <Login />
        },
        {
            path : "/browse",
            element: <Body/>,
            children : [
                {
                    path : "/browse",
                    element : <MainContainer />,
                },
                {
                    path : "watch",
                    element : <WatchPage />,
                },
            ]
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
