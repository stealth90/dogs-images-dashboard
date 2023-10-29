import { DOG_API_BASE_URL } from '../constants';
import type {
  Breed,
  BreedsListResponse,
  GetAllBreedsListResponse,
  GetImagesListByBreedAndSubBreedResponse,
  GetImagesListByBreedResponse,
  GetRandomImageByBreedAndSubBreedResponse,
  GetRandomImageByBreedResponse,
} from '../types';

/*
  DOG Api service for generate dogs random images
  Visit this link for documentation https://dog.ceo/dog-api/documentation/
*/
class DogService {
  private api_url: string = '';

  constructor() {
    this.api_url = DOG_API_BASE_URL
  }

  getAllBreedsList = async (): Promise<GetAllBreedsListResponse> => {
    const response = await fetch(`${this.api_url}/breeds/list/all`, { method: 'GET' });
    const responseFormatted: GetAllBreedsListResponse = await response.json();
    return responseFormatted;
  };

  getRandomImageByBreed = async (breed: Breed): Promise<GetRandomImageByBreedResponse> => {
    const response = await fetch(`${this.api_url}/breed/${breed}/images/random`, { method: 'GET' });
    const responseFormatted: GetRandomImageByBreedResponse = await response.json();
    return responseFormatted;
  };

  getImagesListByBreed = async (
    breed: Breed,
    numberOfImages = 10
  ): Promise<GetImagesListByBreedResponse> => {
    const response = await fetch(`${this.api_url}/breed/${breed}/images/random/${numberOfImages}`, {
      method: 'GET',
    });
    const responseFormatted: GetImagesListByBreedResponse = await response.json();
    return responseFormatted;
  };

  getRandomImageByBreedAndSubBreed = async (
    breed: Breed,
    subBreed: Breed
  ): Promise<GetRandomImageByBreedAndSubBreedResponse> => {
    const response = await fetch(`${this.api_url}/breed/${breed}/${subBreed}/images/random`, {
      method: 'GET',
    });
    const responseFormatted:GetRandomImageByBreedAndSubBreedResponse = await response.json();
    return responseFormatted;
  };

  getImagesListByBreedAndSubBreed = async (
    breed: Breed,
    subBreed: Breed,
    numberOfImages = 10
  ): Promise<GetImagesListByBreedAndSubBreedResponse> => {
    const response = await fetch(
      `${this.api_url}/breed/${breed}/${subBreed}/images/random/${numberOfImages}`,
      {
        method: 'GET',
      }
    );
    const responseFormatted: GetImagesListByBreedAndSubBreedResponse = await response.json();
    return responseFormatted;
  };

  getBreedsList = async(): Promise<BreedsListResponse> => {
    return (await this.getAllBreedsList()).message;
  }
}

const dogApi = new DogService();

export default dogApi;
