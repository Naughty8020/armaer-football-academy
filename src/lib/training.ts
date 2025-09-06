// /lib/training.ts
export interface TrainingItem {
    id: string;
    title: string;
    day: string;
    time: string;
    target: string;
    location?: string;
    school?: string; // ここを追加
  }
  