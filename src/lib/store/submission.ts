import { SubmissionPayload } from '@/types'
import { create } from 'zustand'
import { SubmissionSocketResponse } from '../socket/socketClient';
import { SubmissionSocketResponseState, SubmissionState } from '@/types/store';

const submissionPayload = create<SubmissionState>((set, get) => ({
    submission: null,
    setSubmission: (submission: SubmissionPayload) => set({ submission }),
    clearSubmission: () => set({ submission: null }),
    getSubmission: () => get().submission,
}));

export const submissionSocketResponseState = create<SubmissionSocketResponseState>((set, get) => ({
    submissionResponse: null,
    setSubmissionResponse: (submissionResponse: SubmissionSocketResponse) => set({ submissionResponse }),
    getSubmissionResponse: () => get().submissionResponse,
    clearSubmissionResponse: () => set({ submissionResponse: null })
}));

export default submissionPayload
