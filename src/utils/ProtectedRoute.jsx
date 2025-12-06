import { Navigate } from "react-router-dom";
import useLoggedStore from "../stores/Logged";


function ProtectedRoute({ children }) { 
    const loggedState = useLoggedStore((state) => state.isLogged);

    if (!loggedState) { 
        return <Navigate to="/login" replace />;
    }

    return children;
}


export default ProtectedRoute;