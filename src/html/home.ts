import LifeSimulator from "../../dist/model/LifeSimulator.js";
import { generate } from "../../dist/lib/lib.js";
import { GirlFriend } from "../types/type";
const GirlFriendEnum = {
  oneDimensional: "一维",
  twoDimensional: "二维",
  threeDimensional: "三维",
  AppearanceLevel: "颜值",
  Name: "名字",
  Age: "年龄",
  Height: "身高",
  Weight: "体重",
  Birthday: "生日",
  Hobby: "爱好",
  SelfDescription: "自我描述",
  FavoriteFood: "最喜欢的食物",
  FavoriteDrink: "最喜欢的饮料",
  FavoriteSong: "最喜欢的歌曲",
  FavoriteMovie: "最喜欢的电影",
  FavoriteBook: "最喜欢的书籍",
  FavoriteAnimal: "最喜欢的动物",
  FavoritePlace: "最喜欢的地方",
};
const { value: name } = document.getElementsByName(
  "name"
)[0] as HTMLInputElement;
const { value: money } = document.getElementsByName(
  "money"
)[0] as HTMLInputElement;
const { value: vigor } = document.getElementsByName(
  "vigor"
)[0] as HTMLInputElement;
const { value: stamina } = document.getElementsByName(
  "stamina"
)[0] as HTMLInputElement;
const { value: play } = document.getElementsByName(
  "stamina"
)[0] as HTMLInputElement;
const content = document.getElementById("content");
const submit = document.getElementById("submit")!;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const girls = generate();
  const person = new LifeSimulator(name, +money, +vigor, +stamina, girls, [
    play,
  ]);
  console.log(person);
  content!.innerHTML = `
    姓名：<span>${person.name}</span><br />
    金钱：<span>${person.money}</span><br />
    体力：<span>${person.vigor}</span><br />
    耐力：<span>${person.stamina}</span><br />
    娱乐：<span>${person.play}</span><br />
    女朋友：<div>
      ${person.girlfriends
        .map((girl: GirlFriend) => {
          return `
      <ul>
        ${Object.keys(girl)
          .map((key) => {
            return `
          <li>${(GirlFriendEnum as any)[key]}：${(girl as any)[key]}</li>
        `;
          })
          .join("")}
      </ul>
    `;
        })
        .join("")}
    </div>
  `;
});
