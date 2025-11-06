export type User = {
    id: string
    name: string
    role: 'student' | 'mentor'
    favouriteModule: string
}

export type UserId = string
