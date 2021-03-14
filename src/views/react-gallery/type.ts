export type TPhotos = {
  id: string;
  src: string;
  altDescription: string;
  color: string;
  height: number;
  vertical: boolean;
  blurImage: string;
};

export type TPhoto = {
  id: string;
  photo: string;
  blurImage: string;
  userName: string;
  userPhoto: string;
  download: number;
  time: string;
  tags: Tags[];
  website: string;
};

type Tags = {
  title: string;
};

export type TState = {
  photos: TPhotos[];
  currentID: string;
  currentPhoto: TPhoto;
  currentCategory: string;
  isDataLoad: boolean;
  isShowInfo: boolean;
  page: number;
  searchPage: number;
  query: string;
  isMore: boolean;
  total: number | null;
  totalPage: number | null;
};

export type TDispatch = {
  dispatch: React.Dispatch<TAction>;
};

export type GetPhotos = {
  type: EAction.GET_PHOTOS;
  payload: any[];
};

export type CurrentPhoto = {
  type: EAction.CURRENT_PHOTO;
  payload: string;
};

export type GetPhoto = {
  type: EAction.GET_PHOTO;
  payload: any;
};

export type SearchPhoto = {
  type: EAction.SEARCH_PHOTOS;
  payload: any;
};

export type ToggleInfo = {
  type: EAction.TOGGLE_INFO;
};

export type NextPage = {
  type: EAction.NEXT_PAGE;
};

export type GetQuery = {
  type: EAction.GET_QUERY;
  payload: string;
};

export type NextSearchPage = {
  type: EAction.NEXT_SEARCH_PAGE;
};

export type ChangeCategory = {
  type: EAction.CHANGE_CATEGORY;
  payload: string;
};

export type TAction =
  | GetPhoto
  | GetPhotos
  | CurrentPhoto
  | ToggleInfo
  | NextPage
  | GetQuery
  | NextSearchPage
  | ChangeCategory
  | SearchPhoto;

export enum EAction {
  GET_PHOTOS = 'GET_PHOTOS',
  GET_PHOTO = 'GET_PHOTO',
  CURRENT_PHOTO = 'CURRENT_PHOTO',
  TOGGLE_INFO = 'TOGGLE_INFO',
  NEXT_PAGE = 'NEXT_PAGE',
  GET_QUERY = 'GET_QUERY',
  NEXT_SEARCH_PAGE = 'NEXT_SEARCH_PAGE',
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
  SEARCH_PHOTOS = 'SEARCH_PHOTOS',
}

export enum ECategory {
  PHOTOS = 'PHOTOS',
  COLLECTIONS = 'COLLECTIONS',
}
