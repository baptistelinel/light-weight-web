export interface ExerciseDone {
  id?: string;
  name: string;
  weight: number;
  repetitions: number;
  rpe: number;
}

export interface Training {
  id: string;
  name: string;
  exercises: ExerciseDone[];
  date: Date;
  commentary?: string;
  totalWeight: number;
}
