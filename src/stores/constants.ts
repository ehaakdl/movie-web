export enum SortOrder {
  Asc = "asc",
  Desc = "desc"
}
export enum MovieApiProvider {
  Kobis = "kobis"
}
export enum ResponseStatus {
  Success = "success",
  Fail = "fail"
}

export const getSortOrder = (order: string): SortOrder | undefined => {
  if (order === SortOrder.Asc) {
    return SortOrder.Asc;
  } else if (order === SortOrder.Desc) {
    return SortOrder.Desc;
  }
  return undefined; // 문자열이 유효한 enum 값이 아닌 경우 undefined 반환
}
