const scrapefrom = require("scrapefrom");
const configs = require("./configs/index");
const clean = require("./cleaners/index")
const db = require("projectdb").get();


// const keys = Object.keys(configs);

// const promises = keys.map(
//   key =>
//     new Promise((resolve, reject) =>
//       scrapefrom
//         .custom(configs[key])
//         .then(data => {
//           let cleanData = clean(key, data)
//           resolve(cleanData)
//         })
//         .catch(err => reject(err))
//     )
// );

// const rawData = () =>
//   new Promise((resolve, reject) =>
//     Promise.all(promises)
//       .then(responses => {
//         const merged = [].concat.apply([], responses);
//         resolve(merged);
//       })
//       .catch(err => reject(err))
//   );

// rawData().then(data => {
//   db.set(data)
// })

// // scrapefrom.custom(configs['_930']).then(res => console.log(resc))
let cleaned = clean(null, db)
// console.log(db)

cleaned.forEach(event => console.log(event.time))

