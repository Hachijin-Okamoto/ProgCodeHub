export const getQuestions = (): number[] => {
  return getDammyIdData();
};

export const createQuestion = (_question: string): number => {
    return -1;
}

export const getSubmissionsSubmitIdQuestion = (_questionId: number): number[] => {
    return getDammyIdData();
}

const getDammyIdData = (): number[] => {
    return [1, 2, 3];
}

export const getSubmissions = (): number[] => {
    return getDammyIdData();
}

export const createSubmission = (_submission: string): number => {
    return -1;
}