export type QueryOptions = {
  lazy?: boolean;
};

export type QueryResponse<T = any> = [
  reponse: { data: T | undefined; isLoading: boolean; isError: boolean },
  fetchData: (...args: any[]) => Promise<void>
];

export type Breed = string;
export type ImageUrl = string;
export type ResponseStatus = "success" | "error";

export type BreedsListResponse = { [key: Breed]: Breed[] };

export type GetAllBreedsListResponse = {
  status: ResponseStatus;
  message: BreedsListResponse;
};

export type GetRandomImageByBreedAndSubBreedResponse = {
  status: ResponseStatus,
  message: ImageUrl
}

export type GetRandomImageByBreedResponse = {
  status: ResponseStatus,
  message: ImageUrl
}

export type GetImagesListByBreedAndSubBreedResponse = {
  status: ResponseStatus;
  message: ImageUrl[];
};

export type GetImagesListByBreedResponse = {
  status: ResponseStatus;
  message: ImageUrl[];
};
