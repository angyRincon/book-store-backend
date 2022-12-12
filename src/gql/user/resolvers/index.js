//@models
import User from "../../../models/User.js";

//@utils
import { createToken } from "../../../utils/auth.js";
import Role from "../../../models/Role.js";

export const userResolvers = {
    Query: {
        users: async () => await User.find().populate('roles')
    },

    Mutation: {
        signIn: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) return "Incorrect email"
            const isCorrectPassword = await User.comparePassword(password, user.password)
            if (!isCorrectPassword) return "Incorrect Password"
            user.password = undefined
            return createToken(user);
        },

        signUp: async (_, { user }) => {
            const { password, roles } = user
            const newUser = new User({
                ...user,
                password: await User.encryptPassword(password)
            });

            if (roles) {
                const foundRoles = await Role.find({ name: { "$in": roles } });
                newUser.roles = foundRoles.map(role => role._id);
            } else {
                const role = Role.findOne({ name: 'no_login' });
                newUser.roles = [role._id];
            }
            await newUser.save();
            newUser.password = undefined
            return createToken(newUser)
        }
    }
}
