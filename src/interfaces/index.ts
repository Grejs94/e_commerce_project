export interface Item {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
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
}
