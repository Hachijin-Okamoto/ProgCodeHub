export type Problem = {
  id: number;
  title: string;
  description: string;
};

export type Submission = {
  id: number;
  problemId: number;
  userName: string;
  code: string;
}; // 提出日時は一旦消す
