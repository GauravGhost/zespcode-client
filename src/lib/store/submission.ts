import { SubmissionPayload } from '@/types'
import { create } from 'zustand'

interface SubmissionState {
    submission: SubmissionPayload;
    setSubmission: (submission: SubmissionPayload) => void;
    clearSubmission: () => void;
    getSubmission: () => SubmissionPayload;
}

const submissionPayload = create<SubmissionState>((set, get) => ({
    submission: null,
    setSubmission: (submission: SubmissionPayload) => set({ submission }),
    clearSubmission: () => set({ submission: null }),
    getSubmission: () => get().submission,
}))

export default submissionPayload
