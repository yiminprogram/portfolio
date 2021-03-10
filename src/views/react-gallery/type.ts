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
  isDataLoad: boolean;
  isShowInfo: boolean;
  page: number;
};

export type TDispatch = {
  dispatch: React.Dispatch<TAction>;
  lastItem?: (node: any) => void;
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

export type CloseInfo = {
  type: EAction.CLOSE_INFO;
};

export type NextPage = {
  type: EAction.NEXT_PAGE;
};

export type TAction =
  | GetPhoto
  | GetPhotos
  | CurrentPhoto
  | CloseInfo
  | NextPage;

export enum EAction {
  GET_PHOTOS = 'GET_PHOTOS',
  GET_PHOTO = 'GET_PHOTO',
  CURRENT_PHOTO = 'CURRENT_PHOTO',
  CLOSE_INFO = 'CLOSE_INFO',
  NEXT_PAGE = 'NEXT_PAGE',
}
