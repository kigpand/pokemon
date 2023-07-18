import { IServerType } from "../interface/IServerType";

export const MOBILE_SIZE = 412;

export const LAST_NUM = 898;

interface IBackgroundColor {
  [index: string]: string; // 이렇게 한 줄만 써주면 된다
  HP: string;
  공격: string;
  방어: string;
  특수공격: string;
  특수방어: string;
  스피드: string;
}

/** 속성에 맞는 색상 반환 함수 */
export function getColor(type: string) {
  if (type === "water" || type === "물") return "#0267c2";
  if (type === "grass" || type === "풀") return "#389a02";
  if (type === "poison" || type === "독") return "#6b246e";
  if (type === "fire" || type === "불꽃") return "#e25304";
  if (type === "normal" || type === "노말") return "#ada594";
  if (type === "electric" || type === "전기") return "#fbb917";
  if (type === "ice" || type === "얼음") return "#6dd3f5";
  if (type === "fighting" || type === "격투") return "#c03028";
  if (type === "ground" || type === "땅") return "#c9561c";
  if (type === "flying" || type === "비행") return "#5d73d4";
  if (type === "psychic" || type === "에스퍼") return "#dd3c6c";
  if (type === "bug" || type === "벌레") return "#88960e";
  if (type === "rock" || type === "바위") return "#9e863d";
  if (type === "ghost" || type === "고스트") return "#695582";
  if (type === "dragon" || type === "드래곤") return "#4e3ba4";
  if (type === "dark" || type === "악") return "#3c2d23";
  if (type === "steel" || type === "강철") return "#8d8d9e";
  if (type === "fairy" || type === "페어리") return "#df8ddf";
}

/** 속성에 맞는 border or line 색상 반환 함수 */
export function getLineColor(type: string) {
  if (type === "water" || type === "물") return "#0267c2";
  if (type === "grass" || type === "풀") return "#389a02";
  if (type === "poison" || type === "독") return "#871dc5";
  if (type === "fire" || type === "불꽃") return "#b60000";
  if (type === "normal" || type === "노말") return "#5a5a5a";
  if (type === "electric" || type === "전기") return "#e4d72a";
  if (type === "ice" || type === "얼음") return "#24dfe6";
  if (type === "fighting" || type === "격투") return "#973e15";
  if (type === "ground" || type === "땅") return "#794b05";
  if (type === "flying" || type === "비행") return "#194ec0";
  if (type === "psychic" || type === "에스퍼") return "#f52ba1";
  if (type === "bug" || type === "벌레") return "#145a26";
  if (type === "rock" || type === "바위") return "#816f1d";
  if (type === "ghost" || type === "고스트") return "#3d1877";
  if (type === "dragon" || type === "드래곤") return "#434e8b";
  if (type === "dark" || type === "악") return "#383020";
  if (type === "steel" || type === "강철") return "#444444";
  if (type === "fairy" || type === "페어리") return "#ff18a7";
}

/** 영어 이름에 맞는 한글 속성 반환 함수  */
export function getTypeKo(type: string) {
  if (type === "water") return "물";
  if (type === "grass") return "풀";
  if (type === "poison") return "독";
  if (type === "fire") return "불꽃";
  if (type === "normal") return "노말";
  if (type === "electric") return "전기";
  if (type === "ice") return "얼음";
  if (type === "fighting") return "격투";
  if (type === "ground") return "땅";
  if (type === "flying") return "비행";
  if (type === "psychic") return "에스퍼";
  if (type === "bug") return "벌레";
  if (type === "rock") return "바위";
  if (type === "ghost") return "고스트";
  if (type === "dragon") return "드래곤";
  if (type === "dark") return "악";
  if (type === "steel") return "강철";
  if (type === "fairy") return "페어리";
  return "노말";
}

/** 한글 이름에 맞는 영어 타입 반환 함수 */
export function getTypeEn(type: string) {
  if (type === "물") return "water";
  if (type === "풀") return "grass";
  if (type === "독") return "poison";
  if (type === "불꽃") return "fire";
  if (type === "노말") return "normal";
  if (type === "전기") return "electric";
  if (type === "얼음") return "ice";
  if (type === "격투") return "fighting";
  if (type === "땅") return "ground";
  if (type === "비행") return "flying";
  if (type === "에스퍼") return "psychic";
  if (type === "벌레") return "bug";
  if (type === "바위") return "rock";
  if (type === "고스트") return "ghost";
  if (type === "드래곤") return "dragon";
  if (type === "악") return "dark";
  if (type === "강철") return "steel";
  if (type === "페어리") return "fairy";
  return "노말";
}

/** 타입에 해당하는 아이콘 반환 함수  */
export function getTypeIcon(type: string) {
  if (type === "water" || type === "물") return "/imgs/water.png";
  if (type === "grass" || type === "풀") return "/imgs/grass.png";
  if (type === "poison" || type === "독") return "/imgs/poision.png";
  if (type === "fire" || type === "불꽃") return "/imgs/fire.png";
  if (type === "normal" || type === "노말") return "/imgs/normal.png";
  if (type === "electric" || type === "전기") return "/imgs/electic.png";
  if (type === "ice" || type === "얼음") return "/imgs/ice.png";
  if (type === "fighting" || type === "격투") return "/imgs/fight.png";
  if (type === "ground" || type === "땅") return "/imgs/earth.png";
  if (type === "flying" || type === "비행") return "/imgs/air.png";
  if (type === "psychic" || type === "에스퍼") return "/imgs/magic.png";
  if (type === "bug" || type === "벌레") return "/imgs/bug.png";
  if (type === "rock" || type === "바위") return "/imgs/rock.png";
  if (type === "ghost" || type === "고스트") return "/imgs/ghost.png";
  if (type === "dragon" || type === "드래곤") return "/imgs/dragon.png";
  if (type === "dark" || type === "악") return "/imgs/dark.png";
  if (type === "steel" || type === "강철") return "/imgs/iron.png";
  if (type === "fairy" || type === "페어리") return "/imgs/fairy.png";
  return "노말";
}

/** detail page status bar 색상 반환 함수 */
export function getStatusBarColor(name: string) {
  const backgroundColor: IBackgroundColor = {
    HP: "red",
    공격: "orange",
    방어: "rgb(55, 55, 255)",
    특수공격: "pink",
    특수방어: "purple",
    스피드: "green",
    총합: "",
  };

  return backgroundColor[name];
}

/** 영어 이름에 해당하는 stat 반환 함수 */
export function getStatList(stat: string) {
  const items = stat.split(",");
  const splitItems = items.map((item) => {
    if (item === "hp") return "HP";
    if (item === "attack") return "공격";
    if (item === "defense") return "방어";
    if (item === "special-attack") return "특수공격";
    if (item === "special-defense") return "특수방어";
    if (item === "speed") return "스피드";
    return item;
  });
  const stateItem = [];
  const allCount =
    Number(splitItems[1]) +
    Number(splitItems[3]) +
    Number(splitItems[5]) +
    Number(splitItems[7]) +
    Number(splitItems[9]) +
    Number(splitItems[11]);
  stateItem.push({ name: splitItems[0], stat: Number(splitItems[1]) });
  stateItem.push({ name: splitItems[2], stat: Number(splitItems[3]) });
  stateItem.push({ name: splitItems[4], stat: Number(splitItems[5]) });
  stateItem.push({ name: splitItems[6], stat: Number(splitItems[7]) });
  stateItem.push({ name: splitItems[8], stat: Number(splitItems[9]) });
  stateItem.push({ name: splitItems[10], stat: Number(splitItems[11]) });
  stateItem.push({ name: "총합", stat: allCount });
  return stateItem;
}

/** 포켓몬 타입리스트 문자열 받아들여 타입 배열로 반환하는 함수 */
export function getTypeConvertData(typeInfo: string) {
  const array: string[] = typeInfo.split(",");
  if (array.length > 0 && array[0] !== "") {
    return array.map((arr: string) => {
      return arr;
    });
  }

  return null;
}

/** 타입의 반감, 2배, 노데미지 판정 확인해서 반환해주는 함수 */
export function typeConvertDamegeData(typeData: IServerType) {
  const name = getTypeKo(typeData.name);
  const doubleFrom =
    typeData.doubleDamegeFrom !== ""
      ? typeData.doubleDamegeFrom.split(",").map((v: string) => {
          return getTypeKo(v);
        })
      : [];
  const doubleTo =
    typeData.doubleDamegeTo !== ""
      ? typeData.doubleDamegeTo.split(",").map((v: string) => {
          return getTypeKo(v);
        })
      : [];
  const halfFrom =
    typeData.halfDamegeFrom !== ""
      ? typeData.halfDamegeFrom.split(",").map((v: string) => {
          return getTypeKo(v);
        })
      : [];
  const halfTo =
    typeData.halfDamegeTo !== ""
      ? typeData.halfDamegeTo.split(",").map((v: string) => {
          return getTypeKo(v);
        })
      : [];
  const noFrom =
    typeData.noDamegeFrom !== ""
      ? typeData.noDamegeFrom.split(",").map((v: string) => {
          return getTypeKo(v);
        })
      : [];
  const noTo =
    typeData.noDamegeTo !== ""
      ? typeData.noDamegeTo.split(",").map((v: string) => {
          return getTypeKo(v);
        })
      : [];

  return { name, doubleFrom, doubleTo, halfFrom, halfTo, noFrom, noTo };
}

/** 데미지 한글이름 반환 */
export const getDamegeType: any = {
  doubleFrom: "x2 데미지 받음",
  doubleTo: "x2 데미지 줌",
  halfFrom: "0.5 데미지 받음",
  halfTo: "0.5 데미지 줌",
  noFrom: "데미지를 받지않음",
  noTo: "데미지를 줄수없음",
};
