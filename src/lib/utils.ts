import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import socketService, { SubmissionResponse } from "./socket/socketClient"
import axios from "axios"
import { CREATE_SUBMISSION } from "@/api"
import { SubmissionPayload } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const submitProblem = async (payload: SubmissionPayload) => {
  try {
    if (!payload) {
      throw new Error("Submission payload is null");
    }
    payload.userId = payload?.userId || "1";
    console.log("Submitting problem with payload:", payload);
    socketService.setUserId(payload.userId);
    const response = await axios.post(CREATE_SUBMISSION(), payload);
    const submissionPayload: SubmissionResponse = await socketService.getSubmissionPayload();
    console.log("submission payload web socket", submissionPayload);
    return { response: response.data, submissionResponse: submissionPayload };
  } catch (error) {
    console.error("Error submitting problem:", error);
    throw error;
  }
}