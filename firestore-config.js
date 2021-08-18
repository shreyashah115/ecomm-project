// CONNECTION TO FIREBASE GOES HERE, WITH "db" as the firebase.firestore()

var firebaseConfig = {
  apiKey: "AIzaSyB6-AAe68QiCaeB3loIORz6E6Hg3Znr7ec",
  authDomain: "webstore-9da1d.firebaseapp.com",
  projectId: "webstore-9da1d",
  storageBucket: "webstore-9da1d.appspot.com",
  messagingSenderId: "607890589045",
  appId: "1:607890589045:web:9ef7e8aa05f0b051c3ff3c",
};

const firebase = require("firebase");

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/**
 * Updates a collection with multiple records, using the "slug" property (if it exists) as the document id
 * @param   {String} collection  The name of the collection to update
 * @param   {Array}  records     Objects representing one document each
 * @return  {Promise}
 */



 db.collection("products")
 .doc("DRAVEN-20")
 .set({
   slug: "DRAVEN-20",
   name: "DRAVEN",
   description: "Twin over full bunk bed",
   amount: 221,
   ratings: 4,
   type: "kids",
   color: "white",
   total_ratings: "12",
   images: [
     "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-metal-2.webp?alt=media&token=d7ed2246-7258-405a-a707-9f51660905d2",
     "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-metal-2.webp?alt=media&token=d7ed2246-7258-405a-a707-9f51660905d2",
     "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-metal-1.webp?alt=media&token=e350a575-fbe9-4bfa-bea4-d122cb8efe38",
     "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-metal-1.webp?alt=media&token=e350a575-fbe9-4bfa-bea4-d122cb8efe38",
   ],
   alt: "White colored kids bed",
   fav: false,
   cart: 0,
 })
 .then(() => {
   console.log("Document successfully written!");
 })

// const batchSetter = async (collection, records) => {
//   const batch = db.batch();

//   records.forEach((record) => {
//     console.log(record.id)
//     console.log(record)
//     let t = batch.set(db.collection(collection).doc(record.slug), record);
//     console.log(t)
//   });

//   return await batch.commit().then(() => {
//     console.log("Update to `${collection}` is complete");
//   });
// };

// const runScripts = async () => {
  // await batchSetter("products", [
    
  //   {
  //     "name": "MALM",
  //     "slug": "MALM-1",
  //     "description": "High bed frame/2 storage boxes, Queen",
  //     "amount": 356,
  //     "ratings": 4.5,
  //     "type": "storage",
  //     "color": "black",
  //     "total_ratings": "26",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack.webp?alt=media&token=638725fe-14cb-46fe-877f-8d080bd7b9df",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack.webp?alt=media&token=638725fe-14cb-46fe-877f-8d080bd7b9df",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-2.webp?alt=media&token=a5217db5-889a-4765-ae9a-bc9234955987",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-2.webp?alt=media&token=a5217db5-889a-4765-ae9a-bc9234955987",
  //     ],
  //     "alt": "Black large bed with storage",
  //     "fav": false,
  //     "cart": 0,
  //   },
  //   {
  //    "slug": "HEMNES-2",
  //     "name": "HEMNES",
  //     "description": "Bed frame, Queen",
  //     "amount": 578,
  //     "ratings": 5,
  //     "type": "storage",
  //     "color": "white",
  //     "total_ratings": "81",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite.webp?alt=media&token=a8ddb433-f2a4-4ff6-8854-52c3413afd78",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite.webp?alt=media&token=a8ddb433-f2a4-4ff6-8854-52c3413afd78",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-2.webp?alt=media&token=2cfd3938-5034-4354-ae9a-e3a16ea36813",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-2.webp?alt=media&token=2cfd3938-5034-4354-ae9a-e3a16ea36813",
  //     ],
  //     "alt": "White bed without storage",
  //     "fav": false,
  //     "cart": 0,
  //   },
  //   {
  //   "slug": "SOMBRE-3",
  //   "name": "SOMBRE",
  //     "description": "Upholstered bed frame, Queen",
  //     "amount": 159,
  //     "ratings": 2,
  //   "type": "full",
  //     "color": "grey",
  //     "total_ratings": "6",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fgrey.webp?alt=media&token=85cd2ccc-f628-4a92-96ad-fffe2b443a38",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fgrey.webp?alt=media&token=85cd2ccc-f628-4a92-96ad-fffe2b443a38",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fgrey-2.webp?alt=media&token=4604dcaa-b9f8-4d95-85b4-928bbd4036ba",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fgrey-2.webp?alt=media&token=4604dcaa-b9f8-4d95-85b4-928bbd4036ba",
  //     ],
  //     "alt": "Grey large bed with storage",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "KQITE-4",
  //   "name": "KQITE",
  //     "description": "Bed frame, Full",
  //     "amount": 492,
  //     "ratings": 4,
  //   "type": "full",
  //     "color": "beige",
  //     "total_ratings": "47",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbeige.webp?alt=media&token=2df4e808-2b73-45b6-88b0-29e3125eb587",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbeige.webp?alt=media&token=2df4e808-2b73-45b6-88b0-29e3125eb587",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbeige-2.webp?alt=media&token=dc22956a-9852-486b-87b9-d20872444de5",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbeige-2.webp?alt=media&token=dc22956a-9852-486b-87b9-d20872444de5",
  //     ],
  //     "alt": "Beige large bed with storage",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "IOSEU-5",
  //   "name": "IOSEU",
  //     "description": "High bed, Twin",
  //     "amount": 156,
  //     "ratings": 3.5,
  //   "type": "twin",
  //     "color": "white",
  //     "total_ratings": "9",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-white-2.webp?alt=media&token=a9a33861-2059-42e7-8042-c6e7ddb9b16b",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-white-2.webp?alt=media&token=a9a33861-2059-42e7-8042-c6e7ddb9b16b",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-white.webp?alt=media&token=86fb0447-d007-4d5d-b74e-56dfeef12d03",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-white.webp?alt=media&token=86fb0447-d007-4d5d-b74e-56dfeef12d03",
  //     ],
  //     "alt": "White twin bed with storage",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "NIESTA-6",
  //   "name": "NIESTA",
  //     "description": "Metal frame bed, Twin",
  //     "amount": 98,
  //     "ratings": 1,
  //   "type": "twin",
  //     "color": "black",
  //     "total_ratings": "3",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fmetal-2.webp?alt=media&token=6d865c53-eb92-42c2-8fe6-d3c1d69ccfe0",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fmetal-2.webp?alt=media&token=6d865c53-eb92-42c2-8fe6-d3c1d69ccfe0",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-metal.webp?alt=media&token=27303897-0625-4937-9540-1f4bf59564db",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-metal.webp?alt=media&token=27303897-0625-4937-9540-1f4bf59564db",
  //     ],
  //     "alt": "Metal twin bed without storage",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "KLAIR-7",
  //   "name": "KLAIR",
  //     "description": "Low Profile Platform Bed, Twin",
  //     "amount": 234,
  //     "ratings": 5,
  //   "type": "twin",
  //     "color": "black",
  //     "total_ratings": "89",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblue-twin.webp?alt=media&token=0b7342c1-b9c5-4369-88a3-88b2e364a766",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblue-twin.webp?alt=media&token=0b7342c1-b9c5-4369-88a3-88b2e364a766",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblue-twin-2.webp?alt=media&token=6c6508dd-a013-40c6-b548-ce0a16545b16",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblue-twin-2.webp?alt=media&token=6c6508dd-a013-40c6-b548-ce0a16545b16",
  //     ],
  //     "alt": "Blue colored twin bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "BUSHWICK-8",
  //   "name": "BUSHWICK",
  //     "description": "Full bunk bed",
  //     "amount": 657,
  //     "ratings": 3,
  //   "type": "kids",
  //     "color": "grey",
  //     "total_ratings": "23",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fkids-2.webp?alt=media&token=fd59b6a5-f0d0-4eeb-9ada-768ab17bf1ce",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fkids-2.webp?alt=media&token=fd59b6a5-f0d0-4eeb-9ada-768ab17bf1ce",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fkids.webp?alt=media&token=a4c7027b-7351-4864-8b5b-a20b7354c866",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fkids.webp?alt=media&token=a4c7027b-7351-4864-8b5b-a20b7354c866",
  //     ],
  //     "alt": "Kids bed with storage",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "ARROW-9",
  //   "name": "ARROW",
  //     "description": "Twin over full bunk bed",
  //     "amount": 356,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fkids-white.webp?alt=media&token=730f501c-2818-4697-b3db-263a862bec6e",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fkids-white.webp?alt=media&token=730f501c-2818-4697-b3db-263a862bec6e",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fkids-white-2.webp?alt=media&token=fcf02f2a-b291-4767-a5f8-971e71a35c7d",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fkids-white-2.webp?alt=media&token=fcf02f2a-b291-4767-a5f8-971e71a35c7d",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //     "slug":"FLINN-10",
  //   "name": "FLINN",
  //     "description": "Twin over full bunk bed",
  //     "amount": 267,
  //     "ratings": 3,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "3",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fanother-beige-2.webp?alt=media&token=847b3ab8-3979-4edf-8028-9a65c723db30",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fanother-beige-2.webp?alt=media&token=847b3ab8-3979-4edf-8028-9a65c723db30",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fanother-beige-1.webp?alt=media&token=05b32d06-e247-4a24-ad28-c6ede13fd6e4",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fanother-beige-1.webp?alt=media&token=05b32d06-e247-4a24-ad28-c6ede13fd6e4",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "KANIEL-11",
  //   "name": "KANIEL",
  //     "description": "Twin over full bunk bed",
  //     "amount": 983,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbeige-bed-2.webp?alt=media&token=e30eb3b1-08d7-4108-82f9-29b2fc21a1aa",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbeige-bed-2.webp?alt=media&token=e30eb3b1-08d7-4108-82f9-29b2fc21a1aa",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbeige-bed-1.webp?alt=media&token=65f01bcc-92f4-4701-98d8-6d20f62040c5",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbeige-bed-1.webp?alt=media&token=65f01bcc-92f4-4701-98d8-6d20f62040c5",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "PINHEIRO-12",
  //   "name": "PINHEIRO",
  //     "description": "Twin over full bunk bed",
  //     "amount": 536,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-bed-2.webp?alt=media&token=1fb18458-a793-4e4c-a81b-0cc423bf1850",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-bed-2.webp?alt=media&token=1fb18458-a793-4e4c-a81b-0cc423bf1850",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-bed-1.webp?alt=media&token=7750c645-f2f3-47c3-b1ef-341763a954eb",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-bed-1.webp?alt=media&token=7750c645-f2f3-47c3-b1ef-341763a954eb",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "IRENE-13",
  //   "name": "IRENE",
  //     "description": "Twin over full bunk bed",
  //     "amount": 456,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-bed-another-2.webp?alt=media&token=f6dc4af7-d4c9-4562-93b3-8e435edb63a9",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-bed-another-2.webp?alt=media&token=f6dc4af7-d4c9-4562-93b3-8e435edb63a9",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-bed-another-1.webp?alt=media&token=e8799636-19d2-49fc-b845-8dd3ab4ddc00",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblack-bed-another-1.webp?alt=media&token=e8799636-19d2-49fc-b845-8dd3ab4ddc00",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "EICHHORN-14",
  //   "name": "EICHHORN",
  //     "description": "Twin over full bunk bed",
  //     "amount": 299,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbrown-bed-2.webp?alt=media&token=4d8a71ee-90d0-4c07-a3c5-231c48518774",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbrown-bed-2.webp?alt=media&token=4d8a71ee-90d0-4c07-a3c5-231c48518774",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbrown-bed-1.webp?alt=media&token=0fb0fc72-da0e-480d-bb37-101f258aad60",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fbrown-bed-1.webp?alt=media&token=0fb0fc72-da0e-480d-bb37-101f258aad60",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "MENDEZ-15",
  //   "name": "MENDEZ",
  //     "description": "Twin over full bunk bed",
  //     "amount": 379,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblue-bed-2.webp?alt=media&token=2952c4c9-b676-49e9-adb0-d90403a82821",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblue-bed-2.webp?alt=media&token=2952c4c9-b676-49e9-adb0-d90403a82821",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblue-bed-1.webp?alt=media&token=c183e62f-7547-42a3-a6dc-1af03a866e66",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fblue-bed-1.webp?alt=media&token=c183e62f-7547-42a3-a6dc-1af03a866e66",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "SLEIGH-16",
  //   "name": "SLEIGH",
  //     "description": "Twin over full bunk bed",
  //     "amount": 289,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fgrey-bed-2.webp?alt=media&token=559ac1b1-27d9-49d9-a6bd-b0cec08bd137",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fgrey-bed-2.webp?alt=media&token=559ac1b1-27d9-49d9-a6bd-b0cec08bd137",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fgrey-bed-1.webp?alt=media&token=1119e394-f9a3-40a7-a528-68a48c946e10",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fgrey-bed-1.webp?alt=media&token=1119e394-f9a3-40a7-a528-68a48c946e10",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "BROWGH-17",
  //   "name": "BROWGH",
  //     "description": "Twin over full bunk bed",
  //     "amount": 356,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fmetal-white-twin.webp?alt=media&token=3f9e9c94-47bb-42e1-9045-78594575c8bd",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fmetal-white-twin.webp?alt=media&token=3f9e9c94-47bb-42e1-9045-78594575c8bd",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fmetal-white-twin-2.webp?alt=media&token=27df1db7-da87-49df-b1f4-1e97d5931422",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fmetal-white-twin-2.webp?alt=media&token=27df1db7-da87-49df-b1f4-1e97d5931422",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "WYNSUM-18",
  //   "name": "WYNSUM",
  //     "description": "Twin over full bunk bed",
  //     "amount": 289,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-bed-2.webp?alt=media&token=db0cb71e-5451-4de5-be63-b0e81366fb48",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-bed-2.webp?alt=media&token=db0cb71e-5451-4de5-be63-b0e81366fb48",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-bed-1.webp?alt=media&token=3f305f69-1b57-478a-9c8a-36642a64173b",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Ftwin-bed-1.webp?alt=media&token=3f305f69-1b57-478a-9c8a-36642a64173b",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "SAVANNAH-19",
  //   "name": "SAVANNAH",
  //     "description": "Twin over full bunk bed",
  //     "amount": 111,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-another-2.webp?alt=media&token=16b379ff-c3be-48ac-a948-c5ec98df69d3",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-another-2.webp?alt=media&token=16b379ff-c3be-48ac-a948-c5ec98df69d3",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-another-1.webp?alt=media&token=4b986cdf-5147-4031-87ff-227c703058c4",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-another-1.webp?alt=media&token=4b986cdf-5147-4031-87ff-227c703058c4",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  //   {
  //   "slug": "DRAVEN-20",
  //   "name": "DRAVEN",
  //     "description": "Twin over full bunk bed",
  //     "amount": 221,
  //     "ratings": 4,
  //   "type": "kids",
  //     "color": "white",
  //     "total_ratings": "12",
  //     "images": [
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-metal-2.webp?alt=media&token=d7ed2246-7258-405a-a707-9f51660905d2",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-metal-2.webp?alt=media&token=d7ed2246-7258-405a-a707-9f51660905d2",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-metal-1.webp?alt=media&token=e350a575-fbe9-4bfa-bea4-d122cb8efe38",
  //       "https://firebasestorage.googleapis.com/v0/b/webstore-9da1d.appspot.com/o/bed-large%2Fwhite-metal-1.webp?alt=media&token=e350a575-fbe9-4bfa-bea4-d122cb8efe38",
  //     ],
  //     "alt": "White colored kids bed",
  //     "fav": false,
  //   "cart": 0,
  //   },
  // ]);

  // Other set() scripts can go here

//   process.exit();
// };

// runScripts();
