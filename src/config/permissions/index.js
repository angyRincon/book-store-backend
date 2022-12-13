import Role from "../../models/Role.js";

export const isLoggedIn = (_, args, { user }) => {
    if (!user) {
        return {
            data: null,
            message: 'Not Authenticated',
            status: 401
        }
    }
}

export const isAdmin = async (_, args, { user }) => {
    const { roles } = user
    const rolesFound = await Role.find({ _id: { "$in": roles } })

    for (let role of rolesFound) {
        if (!role.name.includes('admin')) {
            return {
                message: 'You are not allowed to do this operation',
                status: 403,
                data: null
            }
        }
    }
}
