export type TItemCategory =
  | 'Writing'
  | 'Office Supplies'
  | 'Art Supplies'
  | 'Educational'
  | 'Technology';

export interface IProduct {
  name: string;
  brand: string;
  price: number;
  category: TItemCategory;
  description: string;
  quantity: number;
  inStock: boolean;
}
