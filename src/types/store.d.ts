import { SubmissionPayload } from ".";

export interface SubmissionSocketResponseState {
    submissionResponse: SubmissionSocketResponse | null;
    setSubmissionResponse: (submissionResponse: SubmissionSocketResponse) => void;
    clearSubmissionResponse: () => void;
    getSubmissionResponse: () => SubmissionSocketResponse | null;
}

export interface SubmissionState {
    submission: SubmissionPayload | null;
    setSubmission: (submission: SubmissionPayload) => void;
    clearSubmission: () => void;
    getSubmission: () => SubmissionPayload | null;
}