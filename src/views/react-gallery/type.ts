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

export type TTopics = {
  id: string;
  image: string;
  title: string;
};

export type TState = {
  photos: TPhotos[];
  currentID: string;
  currentPhoto: TPhoto;
  category: string;
  topics: TTopics[];
  isDataLoad: boolean;
  isShowInfo: boolean;
  page: number;
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

export type GetSearchPhoto = {
  type: EAction.GET_SEARCH_PHOTOS;
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

export type ChangeCategory = {
  type: EAction.CHANGE_CATEGORY;
  payload: string;
};

export type GetTopics = {
  type: EAction.GET_TOPICS;
  payload: any[];
};

export type Refresh = {
  type: EAction.REFRESH;
};

export type GetCollections = {
  type: EAction.GET_COLLECTIONS;
  payload: any[];
};

export type TAction =
  | GetPhoto
  | GetPhotos
  | CurrentPhoto
  | ToggleInfo
  | NextPage
  | GetQuery
  | ChangeCategory
  | GetSearchPhoto
  | GetTopics
  | Refresh
  | GetCollections;

export enum EAction {
  GET_PHOTOS = 'GET_PHOTOS',
  GET_PHOTO = 'GET_PHOTO',
  GET_QUERY = 'GET_QUERY',
  GET_TOPICS = 'GET_TOPICS',
  GET_COLLECTIONS = 'GET_COLLECTIONS',
  GET_SEARCH_PHOTOS = 'GET_SEARCH_PHOTOS',
  CURRENT_PHOTO = 'CURRENT_PHOTO',
  TOGGLE_INFO = 'TOGGLE_INFO',
  NEXT_PAGE = 'NEXT_PAGE',
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
  REFRESH = 'REFRESH',
}

export enum ECategory {
  PHOTOS = 'PHOTOS',
  COLLECTIONS = 'COLLECTIONS',
  TOPICS = 'TOPICS',
}
