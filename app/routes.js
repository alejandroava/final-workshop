import { LoginScene } from "./scenes/login/login.scene"
import { notFoundScene } from "./scenes/not-Found/notFoundScene"
import { RegisterScene } from "./scenes/resgister/register.scene"

export const routes = {
    public: [
        { path: '/login', scene: LoginScene },
        { path: '/notFound', scene: notFoundScene },
        { path: '/register', scene: RegisterScene}
    ]
}
