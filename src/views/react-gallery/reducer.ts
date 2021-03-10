//type
import { TState, TAction, EAction, TPhotos, TPhoto } from './type';

export const initialState: TState = {
  photos: [],
  currentID: '',
  currentPhoto: {
    id: '',
    photo: '',
    blurImage: '',
    userName: '',
    download: 0,
    time: '',
    tags: [],
    website: '',
    userPhoto: '',
  },
  isDataLoad: true,
  isShowInfo: false,
  page: 1,
};

const getPhotos = (state: TState, data: any[]): TState => {
  let photos: TPhotos[] = data.map((ele) => ({
    id: ele.id,
    src: ele.urls.regular,
    altDescription: ele.alt_description,
    height: ele.height / 25,
    color: ele.color,
    blurImage: `${ele.urls.full}&w=10`,
    vertical: ele.width < ele.height,
  }));
  return { ...state, photos: [...state.photos, ...photos], isDataLoad: false };
};

const currentPhoto = (state: TState, currentID: string): TState => {
  return { ...state, currentID };
};

const getPhoto = (state: TState, data: any): TState => {
  const currentPhoto: TPhoto = {
    id: data.id,
    photo: data.urls.full,
    blurImage: `${data.urls.full}&w=10`,
    userName: data.user.name,
    userPhoto: data.user.profile_image.small,
    download: data.downloads,
    time: new Date(data.created_at).toLocaleString(),
    tags: data.tags,
    website: data.links.html,
  };
  return { ...state, currentPhoto, isShowInfo: true };
};

const closeInfo = (state: TState): TState => {
  return { ...state, isShowInfo: false };
};

const nextPage = (state: TState): TState => {
  return { ...state, page: state.page + 1, isDataLoad: true };
};

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case EAction.GET_PHOTOS:
      return getPhotos(state, action.payload);
    case EAction.GET_PHOTO:
      return getPhoto(state, action.payload);
    case EAction.CURRENT_PHOTO:
      return currentPhoto(state, action.payload);
    case EAction.CLOSE_INFO:
      return closeInfo(state);
    case EAction.NEXT_PAGE:
      return nextPage(state);
    default:
      return state;
  }
};
