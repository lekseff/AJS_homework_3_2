/**
* Сортирует героев по уровню жизни
* @param {Array} heroes
* @returns
*/
export default function heroesSort(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
