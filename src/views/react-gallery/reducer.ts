//type
import { TState, TAction, EAction, TPhotos, TPhoto, ECategory } from './type';

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
  currentCategory: ECategory.PHOTOS,
  isDataLoad: true,
  isShowInfo: false,
  page: 1,
  searchPage: 1,
  query: '',
  isMore: true,
  total: null,
  totalPage: null,
};

const handlePhotosData = (data: any[]): TPhotos[] => {
  return data.map((ele) => ({
    id: ele.id,
    src: ele.urls.regular,
    altDescription: ele.alt_description,
    height: ele.height / 25,
    color: ele.color,
    blurImage: `${ele.urls.full}&w=10`,
    vertical: ele.width < ele.height,
  }));
};

const getPhotos = (state: TState, data: any[]): TState => {
  let photos: TPhotos[] = handlePhotosData(data);
  return {
    ...state,
    photos: [...state.photos, ...photos],
    isDataLoad: false,
  };
};

const searchPhotos = (state: TState, data: any): TState => {
  let photos: TPhotos[] = handlePhotosData(data.results);
  const isMore = Boolean(Math.floor(data.total / 30));
  return {
    ...state,
    photos: [...state.photos, ...photos],
    isDataLoad: false,
    total: data.total,
    totalPage: data.total_pages,
    isMore,
  };
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
  let page = state.page;
  let isMore = true;
  if (page === state.totalPage) {
    isMore = false;
  } else {
    page++;
  }
  return { ...state, page, isDataLoad: true, isMore };
};

const nextSearchPage = (state: TState): TState => {
  return { ...state, searchPage: state.searchPage + 1, isDataLoad: true };
};

const getQuery = (state: TState, query: string): TState => {
  return {
    ...state,
    photos: [],
    searchPage: 1,
    query,
    isDataLoad: true,
    total: null,
    totalPage: null,
  };
};

const changeCategory = (state: TState, currentCategory: string): TState => {
  return { ...state, currentCategory };
};

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case EAction.GET_PHOTOS:
      return getPhotos(state, action.payload);
    case EAction.GET_PHOTO:
      return getPhoto(state, action.payload);
    case EAction.SEARCH_PHOTOS:
      return searchPhotos(state, action.payload);
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
    case EAction.CHANGE_CATEGORY:
      return changeCategory(state, action.payload);
    default:
      return state;
  }
};
