// const userList = document.getElementById("user-list");

// const user = {
//   image: "https://randomuser.me/api/portraits/women/25.jpg",
//   fullname: "Bat Bat",
//   email: "test@gmail.com",
//   phone: 99999911,
//   website: "http://randomuser.me/",
// };
// const createUser = (user) => {
//   const { image, fullname, email, phone, website } = user;

//   return `<div class="user">
//         <img
//           src=${image}
//           height="50px"
//           width="50px"
//           alt="man"
//         />
//         <p>${fullname}</p>
//         <p>${email}</p>
//         <p>${phone}</p>
//         <p>${website}</p>
//       </div>`;
// };

// const users = [user, user, user, user, user];

// const addUsers = () => {
//   let usersHTML = "";

//   users.forEach((user) => {
//     const userHTML = createUser(user);
//     usersHTML = usersHTML + userHTML;
//   });

//   console.log({
//     usersHTML,
//   });

//   userList.innerHTML = usersHTML;
// };

// const userList = document.getElementById("user-list");

// const user = {
//   image: "https://randomuser.me/api/portraits/women/25.jpg",
//   name: "Bat Bat",
//   email: "test@gmail.com",
//   phone: 99999911,
//   website: "http://randomuser.me/",
// };
// // console.log(user);

// const createUser = (user) => {
//   const { image, name, email, phone, website } = user;

//   return `<div class= "user">
//             <img src = ${image}
//                height="50px"
//                width="50px"
//                alt="man"
//                />
//                <p>${name}</p>
//                <p>${email}</p>
//                <p>${phone}</p>
//                <p>${website}</p>
//           </div>`;
// };

// // console.log(createUser);

// const users = [user, user, user, user];

// const addUsers = () => {
//   let usersHTML = "";
//   users.forEach((user) => {
//     const userHTML = createUser(user);
//     usersHTML = usersHTML + userHTML;
//   });
//   userList.innerHTML = usersHTML;
// };

// const getUsers = async () => {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   try {
//     const response = await fetch(url);
//     const users = await response.json();
//     return users;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

// const userList = document.getElementById('user-list');

// const createUser = ( user) => {
//   console.log(createUser);

//   const {name, email, phone, website} = user;
//   console.log(name, email, phone, website);

//   return `
//   <div class="user">
//         <img
//            src="https://randomuser.me/api/portraits/women/25.jpg"
//            height="50px"
//            width="50px"
//            alt="man"
//          />
//          <p>${name}</p>
//          <p>${email}</p>
//          <p>${phone}</p>
//          <p>${website}</p>
//        </div>`;
// };

//        const addUsers = async () =>{
//         console.log('ajilj bn aa');

//         const users = await getUsers();
//         console.log(users);

//         let usersHTML = "";

//         users.forEach((user => {
//           const userHTML = createUser(user);
//           usersHTML += userHTML;
//         }));

//         userList.innerHTML = usersHTML;

//     };

// const getUsers = async () => {
//   const url = "https://jsonplaceholder.typicode.com/users";

//   try {
//     const response = await fetch (url);
//     const users = await response.json();
//     return users;
//   } catch (error) {
//     console.log(error);
//     return [];

//   }
// };

// const isAcronym = function (words, s) {
// let words1 = ["apple", "bear", "chock"];
// string = "abc";

// words1.forEach((word) => {
//   console.log(word[0]);
// });
// // };

// const result = words1.reduce((acc, el) => {
//   return (acc += el[0]);
// });

// if (result === String) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// console.log(result);

// const arr = [];
// console.log(arr.push(word[0]));

// };

// isAcronym();

// let nums = [3, 2, 4];
// let nums2 = 2;
// // let count = 0;

// nums % 3 !== 0;
// console.log(nums % 3 !== 0);
// console.log(nums2 % 3 !== 0);
// let act = 0;
// let count = 0;

// for (let i of nums) {
//   if ((act = i % 3 !== 0)) {
//     act++;
//   }
// }
// console.log(act);


// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 3 !== 0) {
//         nums[i]++;    
//     }
// }

// console.log(nums);

// nums.forEach((num) => {
//   if (num % 3) {
//     count++;
//   }
// });
// console.log(act);

// const word = "abchg";
// const word2 = "pqcdasss"; //a p b q c c

// test = [];

// test.push(word[0]);
// test.push(word2[0]);
// test.push(word[1]);
// test.push(word2[1]);

// console.log(test);

// for (let i = 0; i < word.length; i++) {
//   if (word[i] !== undefined) test.push(word[i]);
//   if (word2[i] !== undefined) test.push(word2[i]);
// }
// console.log(test.join(""));

// if (word.length < word2.length) {
//   for (let i = 0; i < word.length; i++) {
//     test.push(word[i]);
//     test.push(word2[i]);
//   }
// } else {
//   for (let i = 0; i < word2.length; i++) {
//     test.push(word[i]);
//     test.push(word2[i]);
//   }
// }

// let result2 = "";
// const max = Math.max(words1.length, word2.length);
// for (let i = 0; i < max; i++) {
//   if (word[i] !== undefined) result2 = result2.concat(word[i]);
//   if (word2[i] !== undefined) result2 = result2.concat(word2[i]);
// }
// console.log(result2);

let nums1 = [3, 1, 5];
let nums2 = [5, 7, 9];

// const sorted2 = nums2.sort((a, b) => a - b);
// const sorted1 = nums1.sort((a, b) => a - b);

// console.log(sorted2);
// console.log(sorted1);

// let x = [];

// x = sorted2[0] - sorted1[0];

// console.log(x);


// for (let i = 0; i < nums1.length; i++) {
//   for (let j = 0; j < nums1.length - 1 - i; j++) {
//       if (nums1[j] > nums1[j + 1]) {
//           // Swap elements
//           let temp = nums1[j];
//           nums1[j] = nums1[j + 1];
//           nums1[j + 1] = temp;
//       }
//   }
// }

// for (let i = 0; i < nums2.length; i++) {
//   for (let j = 0; j < nums2.length - 1 - i; j++) {
//       if (nums2[j] > nums2[j + 1]) {
//           // Swap elements
//           let temp = nums2[j];
//           nums2[j] = nums2[j + 1];
//           nums2[j + 1] = temp;
//       }
//   }
// }

// console.log(nums2);  
// console.log(nums1);  

// let x = nums2[0] - nums1[0];  


const hours = [1.2];

const minutes = hours.map((hour) => {
  let min = hour * 60;
  if(min >= 60){
    min++;
  }
  return min;
});

console.log(minutes);

const hours2 = 1.2;

let totalMinutes = hours * 60;
if(totalMinutes >= 60) {
  totalMinutes++;
}
console.log(totalMinutes);

const num = [1, 2, 4, 5, 7]

const nums = num.map((el)=>{
  if(el % 2 === 0){
    console.log('even:', el);
  } else {
    console.log('odd:', el);   
  }
}); // second!!!!


const nums3 = [1, 5, 2, 4]
let isIncreasing = true;
let increased = [];
for(let i = 0; i < nums3.length; i++){
  if(nums3[i] <= nums3[i] ){
    isIncreasing = false;
      increased = nums3.sort((a,b) => a - b );
      }
      
  };

console.log(isIncreasing);
console.log(nums3);
console.log(increased);

let max = nums3[0];

nums3.map((num) => {
  if(num > max) {
    max = num;
  }
  return num;
})

console.log(max);

const decreased = [...nums3].sort((a,b) => b - a)
 
console.log(decreased);




// 1. Өгөгдсөн цагийг минутруу шилжүүлээд буцаа.
// 2. Өгөгдсөн тоог тэгш тоо бол “even”, сондгой бол “odd” гэж буцаа.
// 3. Өгөгдсөн 3 тоо өсөх дарааллаар байгаа эсэхийг шалгаад тийм бол true, үгүй бол false буцаа.
// 4. Өгөгдсөн 3 тооны хамгийн ихийг буцаа.
// 5. Өгөгдсөн 3 тоог буурах эрэмбээр хэвлэ.

const users = [
  {
    "username": "Erdenebaatar Gankhuu",
    "nickname": "Baatarscc",
    "suggested": true
  },
  {
    "username": "Erdenebaatar Gankhuu",
    "nickname": "Baatarscc",
    "suggested": false
  },
  {
    "username": "Erdenebaatar Gankhuu",
    "nickname": "Baatarscc",
    "suggested": true
  },
  {
    "username": "Erdenebaatar Gankhuu",
    "nickname": "Baatarscc",
    "suggested": false
  },
  {
    "username": "Erdenebaatar Gankhuu",
    "nickname": "Baatarscc",
    "suggested": true
  },
  {
    "username": "Erdenebaatar Gankhuu",
    "nickname": "Baatarscc",
    "suggested": false
  },
  {
    "username": "Erdenebaatar Gankhuu",
    "nickname": "Baatarscc",
    "suggested": true
  }
];

let suggestedVal = users.map((user) => user.suggested);
console.log(suggestedVal);

const fs = require('fs')
async function printSuggested() {
  
try{
  const rawData = await fs.readFileSync('./data.json', 'utf-8');
  const data = JSON.parse(rawData);

  data.forEach(user => 
    console.log(user.suggested));
    
  } catch (error) {
    console.log('error:', error);
    
  }
};

printSuggested();
