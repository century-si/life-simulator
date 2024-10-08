import { GirlFriend } from "../types/type";
import {
  Hobby,
  Food,
  Drink,
  Song,
  Movie,
  Book,
  Animal,
  Place,
  PersonNameList
} from "../../dist/data/data.list.js";
/**
 * @method 生成人物
 * @param count 生成数量
 */
function generate(count: number = 1): GirlFriend | GirlFriend[] {
  let newGirl: GirlFriend[] = [];
  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const randomFloat = (min: number, max: number) =>
    Math.random() * (max - min) + min;
  const randomString = (length: number) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };
  for (let i = 0; i < count; i++) {
    newGirl.push({
      oneDimensional: randomInt(0, 10),
      twoDimensional: randomInt(0, 10),
      threeDimensional: randomInt(0, 10),
      AppearanceLevel: randomInt(1, 10),
      Name: PersonNameList[randomInt(0, PersonNameList.length - 1)],
      Age: randomInt(18, 35),
      Height: randomFloat(150, 180).toFixed(2),
      Weight: randomFloat(40, 70).toFixed(2),
      Birthday: `${randomInt(1, 12)}/${randomInt(1, 28)}/19${randomInt(
        80,
        99
      )}`,
      Hobby: Hobby[randomInt(0, Hobby.length - 1)],
      SelfDescription: randomString(20),
      FavoriteFood: Food[randomInt(0, Food.length - 1)],
      FavoriteDrink: Drink[randomInt(0, Drink.length - 1)],
      FavoriteSong: Song[randomInt(0, Song.length - 1)],
      FavoriteMovie: Movie[randomInt(0, Movie.length - 1)],
      FavoriteBook: Book[randomInt(0, Book.length - 1)],
      FavoriteAnimal: Animal[randomInt(0, Animal.length - 1)],
      FavoritePlace: Place[randomInt(0, Place.length - 1)],
    });
  }

  // return count === 1 ? newGirl[0] : newGirl;
  return newGirl;
}

export { generate };
