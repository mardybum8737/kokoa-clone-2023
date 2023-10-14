function fetchEgg(chicken) {
  // fetch는 보통 네트워크에서 데이터를 가지고 올 때
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //   return Promise.resolve(`🌽 => 🐓`);
}

// getChicken()
// .catch((error) => {
//     console.log(error.name);
//     return '🐔';
// })
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg))
//  ;

getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
