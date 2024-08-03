import { SortOrder } from "@/stores/constants";

export interface Pagination {
  page: number;
  itemsPerPage: number;
  sortBy: Sort[];
}

export interface Sort {
  key: string,
  order: SortOrder
}
