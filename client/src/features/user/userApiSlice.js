import { apiSlice } from "../../app/api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints : builder => ({
        addNewUser: builder.mutation({
            query : initialUserData => ({
                url : '/users',
                method : 'POST',
                body : {
                    ...initialUserData
                }
            })
        })
    })
})

export const {
    useAddNewUserMutation
} = usersApiSlice