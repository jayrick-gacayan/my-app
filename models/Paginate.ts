export interface Paginate<T> {
  currentPage: number;
  data: T;
  count: number;
}