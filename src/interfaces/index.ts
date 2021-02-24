export interface Item {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

type Idegree_degrees = {
  numberRatingsIssued: number;
  numbering: number;
  opinionPercentage: number;
};

type Idegree_averageGrade = {
  decimalAsString: string;
  intAsString: string;
  asNumber: number;
  inWords: string;
};

type IdegreeExpanded = {
  sum: number;
  degrees: Array<Idegree_degrees>;
  averageGrande: Idegree_averageGrade;
};

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
  assessmentNumber: number;
  availableItemsToBought: number;
  qualityRatioAsNumber: number;
  degree: IdegreeExpanded;
}
