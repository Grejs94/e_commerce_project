export interface Item {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

interface Idegree {
  sum: number;
  degree5: number;
  degree4: number;
  degree3: number;
  degree2: number;
  degree1: number;
}

export interface IChangedItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  supplyTime: number;
  showButton: boolean;
  supplyInfo: boolean;
  smart: boolean;
  greatSeller: boolean;
  deliveryCost: number;
  peopleWhoBought: number;
  qualityRatio: string;
  assessmentNumber: number;
  availableItemsToBought: number;
  qualityRatioAsNumber: number;
  degree: Idegree;
}
