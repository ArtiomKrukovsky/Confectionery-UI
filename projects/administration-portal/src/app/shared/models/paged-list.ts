export interface IPagedList<T> {
  items: T[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
}
