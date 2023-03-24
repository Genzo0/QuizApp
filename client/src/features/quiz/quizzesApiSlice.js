import {
    createSelector, 
    createEntityAdapter,
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const quizAdapter = createEntityAdapter({})

const initialState = quizAdapter.getInitialState()

export const quizzesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuizzes: builder.query({
            query: () => '/quizzes',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedQuizzes = responseData.map(quiz => {
                    quiz.id = quiz._id
                    return quiz
                });
                return quizAdapter.setAll(initialState, loadedQuizzes)
            },
            providesTags: (result, error, arg) => {
                if(result?.ids){
                    return [
                        {type : 'Quiz', id: 'LIST'},
                        ...result.ids.map(id => ({ type : 'User', id}))
                    ]
                } else return [{ type : 'Quiz', id : 'LIST'}]
            }
        }),
        getQuizById: builder.query({
            query: (id) => `/quizzes/${id}`,
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            }
        })
    })
})

export const {
    useGetQuizzesQuery,
    useGetQuizByIdQuery
} = quizzesApiSlice

export const selectQuizzesResult = quizzesApiSlice.endpoints.getQuizzes.select()

const selectQuizzesData = createSelector(
    selectQuizzesResult, quizzesResult => quizzesResult.data
)

export const {
    selectAll: selectAllQuizzes,
    selectById: selectQuizById,
    selectIds: selectQuizIds
} = quizAdapter.getSelectors(state => selectQuizzesData(state) ?? initialState)