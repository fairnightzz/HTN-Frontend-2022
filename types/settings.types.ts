export type TSortType = 'Most Recent' | 'Alphabetical' | 'First';
export type TEventFilter = [boolean, boolean, boolean]

export interface TUserFilters{
  sort: TSortType,
  filters: TEventFilter
}
