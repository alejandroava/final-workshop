import { LoginScene } from "./scenes/login/login.scene"
import { notFoundScene } from "./scenes/not-Found/notFoundScene"
import { RegisterScene } from "./scenes/resgister/register.scene"
import { TaskScene } from "./scenes/task/task.scene"
import { TaskEditScene } from "./scenes/taskEdit/taskEdit.scene"

export const routes = {
    public: [
        { path: '/login', scene: LoginScene },
        { path: '/notFound', scene: notFoundScene },
        { path: '/register', scene: RegisterScene}
    ],
    private: [
        { path: '/task', scene: TaskScene },
        { path: '/task/edit', scene: TaskEditScene }
    ]
}
