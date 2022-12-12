import Role from "../models/Role.js";

export const createRoles = async () => {
    const count = await Role.estimatedDocumentCount()

    if (count > 0) return;

    return await Promise.all([
        new Role({ name: 'admin' }).save(),
        new Role({ name: 'user' }).save(),
        new Role({ name: 'no_login' }).save()
    ])
}
