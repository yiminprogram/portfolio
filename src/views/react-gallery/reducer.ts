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
  searchPage: 1,
  query: '',
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
  const current = state.photos.find((ele) => ele.id === currentID);
  let currentPhoto: TPhoto = initialState.currentPhoto;
  if (current) {
    currentPhoto = { ...currentPhoto, ...current };
  }
  return { ...state, currentID, currentPhoto };
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

const toggleInfo = (state: TState): TState => {
  return { ...state, isShowInfo: !state.isShowInfo };
};

const nextPage = (state: TState): TState => {
  return { ...state, page: state.page + 1, isDataLoad: true };
};

const nextSearchPage = (state: TState): TState => {
  return { ...state, searchPage: state.searchPage + 1, isDataLoad: true };
};

const getQuery = (state: TState, query: string): TState => {
  return { ...state, photos: [], searchPage: 1, query };
};

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case EAction.GET_PHOTOS:
      return getPhotos(state, action.payload);
    case EAction.GET_PHOTO:
      return getPhoto(state, action.payload);
    case EAction.CURRENT_PHOTO:
      return currentPhoto(state, action.payload);
    case EAction.TOGGLE_INFO:
      return toggleInfo(state);
    case EAction.NEXT_PAGE:
      return nextPage(state);
    case EAction.GET_QUERY:
      return getQuery(state, action.payload);
    case EAction.NEXT_SEARCH_PAGE:
      return nextSearchPage(state);
    default:
      return state;
  }
};
