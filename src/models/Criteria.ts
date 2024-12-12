export interface Cirteria {
  id: number;
  title: string;
  status: string;
  criteriaItems: CirteriaItem[];
  comments: [
    {
      id: number;
      userId: string;
      message: string;
      attachment: string;
    }
  ];
  invoices: [
    {
      id: number;
      image: string;
      accepted: boolean;
    }
  ];
}

export interface CirteriaItem {
  categoryId: number;
  productName: string;
  description: string;
  amount: number;
  measurementUnit: string;
}

export interface PostCriteria {
  Title: string;
  CriteriaItems: CirteriaItem[];
}
