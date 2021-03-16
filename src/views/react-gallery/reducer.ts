//type
import {
  TState,
  TAction,
  EAction,
  TPhotos,
  TPhoto,
  ECategory,
  TTopics,
} from './type';

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
  category: ECategory.PHOTOS,
  isDataLoad: true,
  isShowInfo: false,
  page: 1,
  query: '',
  isMore: true,
  total: null,
  totalPage: null,
  topics: [],
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
    isMore: true,
  };
};

const getSearchPhotos = (state: TState, data: any): TState => {
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
  let page = state.page + 1;
  return { ...state, page, isDataLoad: true };
};

const getQuery = (state: TState, query: string): TState => {
  return {
    ...state,
    photos: [],
    page: 1,
    query,
    isDataLoad: true,
    total: null,
    totalPage: null,
  };
};

const changeCategory = (state: TState, category: string): TState => {
  return {
    ...state,
    category,
    topics: [],
    photos: [],
    isDataLoad: true,
    total: null,
    totalPage: null,
    query: '',
  };
};

const getTopics = (state: TState, data: any[]): TState => {
  console.log(data);
  const topics: TTopics[] = data.map((ele) => ({
    id: ele.id,
    title: ele.title,
    image: ele.cover_photo.urls.regular,
  }));
  return {
    ...state,
    photos: [],
    topics,
    isDataLoad: false,
  };
};

const refresh = (state: TState): TState => {
  return { ...state, isDataLoad: true, photos: [], topics: [] };
};

const getCollections = (state: TState, collections: any): TState => {
  return { ...state };
};

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case EAction.GET_PHOTOS:
      return getPhotos(state, action.payload);
    case EAction.GET_PHOTO:
      return getPhoto(state, action.payload);
    case EAction.GET_SEARCH_PHOTOS:
      return getSearchPhotos(state, action.payload);
    case EAction.CURRENT_PHOTO:
      return currentPhoto(state, action.payload);
    case EAction.TOGGLE_INFO:
      return toggleInfo(state);
    case EAction.NEXT_PAGE:
      return nextPage(state);
    case EAction.GET_QUERY:
      return getQuery(state, action.payload);
    case EAction.CHANGE_CATEGORY:
      return changeCategory(state, action.payload);
    case EAction.GET_TOPICS:
      return getTopics(state, action.payload);
    case EAction.REFRESH:
      return refresh(state);
    case EAction.GET_COLLECTIONS:
      return getCollections(state, action.payload);
    default:
      return state;
  }
};
