// /lib/training.ts
export interface TrainingItem {
    id: string;
    title: string;
    day: string;
    time: string;
    target: string;
    location?: string;
    school?: string;
  
    // 追加フィールド
    img?: {
      url: string; // microCMS 画像URL
      height?: number;
      width?: number;
    };
    map?: string; // microCMSのリッチエディタで保存したiframe HTML
  }
  