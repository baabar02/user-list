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

const userList = document.getElementById('user-list');

const user = {

  image:"https://randomuser.me/api/portraits/women/25.jpg",
  name: "Bold Bat",
  email: "test@gmail.com",
  phone: 99999911,
  website: "http://randomuser.me/",

}; 
// console.log(user);


const createUser = (user) => {
  const {image, name, email, phone, website}= user;  

  return `<div class= "user">
            <img src = ${image}
               height="50px"
               width="50px"
               alt="man"
               />
               <p>${name}</p>
               <p>${email}</p>
               <p>${phone}</p>
               <p>${website}</p>
          </div>`
}

// console.log(createUser);

const users = [user, user, user, user];

const addUsers = () => {
  let usersHTML = "";
  users.forEach((user) => {
    const userHTML = createUser(user);
    usersHTML = usersHTML + userHTML;
  });
  userList.innerHTML = usersHTML;
};

const getUsers = async () =>{
  const url = "https://jsonplaceholder.typicode.com/users"
  try{
    const response = await fetch(url);
    const users = await response.json();
    return users; 
  } catch (error){
    console.log(error);
    return [];
  }
};



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




