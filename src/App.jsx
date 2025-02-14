import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const App = () => {

    

    return (
        <AuthProvider>

            <AppRouter/>
            
        </AuthProvider>
    )

}
