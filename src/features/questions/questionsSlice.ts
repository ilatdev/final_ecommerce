import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { getQuestions, sendQuestion } from './questioinsAPI'

export const fetchQuestions = createAsyncThunk(
  'questions/getQuestions',
  getQuestions
)

export const sendNewQuestion = createAsyncThunk(
  'questions/sendQuestion',
  sendQuestion
)

export interface Question {
  custumer_name: string
  question: string
  answer: string
  sent_at: string
}

export interface QuestionsState {
  data: Question[]
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  newQuestionData: {}
  newQuestionStatus: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: QuestionsState = {
  data: [],
  status: 'idle',
  newQuestionData: {},
  newQuestionStatus: 'idle'
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.data = { ...action.payload }
      state.status = 'succeeded'
    })
    builder.addCase(fetchQuestions.rejected, (state) => {
      state.status = 'failed'
    })
    builder.addCase(sendNewQuestion.pending, (state) => {
      state.newQuestionStatus = 'pending'
      state.newQuestionData = {}
    })
    builder.addCase(sendNewQuestion.fulfilled, (state, action) => {
      state.newQuestionStatus = 'succeeded'
      state.newQuestionData = { ...action.payload }
    })
    builder.addCase(sendNewQuestion.rejected, (state) => {
      state.newQuestionStatus = 'failed'
    })
  }
})

export const questionCount = (state: RootState) => state.questions

export default questionsSlice.reducer
