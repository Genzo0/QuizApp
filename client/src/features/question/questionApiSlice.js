import { apiSlice } from "../../app/api/apiSlice"

export const questionsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuestions: builder.query({
            query: (id) => `/questions/${id}`,
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            }
        })
    })
})

export const {
    useGetQuestionsQuery
} = questionsApiSlice