import { SubmissionPayload } from '@/types'
import { create } from 'zustand'
import { SubmissionSocketResponse } from '../socket/socketClient';

interface SubmissionState {
    submission: SubmissionPayload | null;
    setSubmission: (submission: SubmissionPayload) => void;
    clearSubmission: () => void;
    getSubmission: () => SubmissionPayload | null;
}

interface SubmissionSocketResponseState {
    submissionResponse: SubmissionSocketResponse | null;
    setSubmissionResponse: (submissionResponse: SubmissionSocketResponse) => void;
    clearSubmissionResponse: () => void;
    getSubmissionResponse: () => SubmissionSocketResponse | null;
}

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
