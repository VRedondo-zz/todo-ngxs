export interface Todo {
  id: string;
  createdDate: string;
  completedDate: string | null;
  isCompleted: boolean;
  description: string;
}
