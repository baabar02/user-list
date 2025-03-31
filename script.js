const userList = document.getElementById("user-list");

const user = {
  image: "https://randomuser.me/api/portraits/women/25.jpg",
  fullname: "Bold Bat",
  email: "test@gmail.com",
  phone: 99999911,
  website: "http://randomuser.me/",
};
const createUser = (user) => {
  const { image, fullname, email, phone, website } = user;

  return `<div class="user">
        <img
          src=${image}
          height="50px"
          width="50px"
          alt="man"
        />
        <p>${fullname}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>${website}</p>
      </div>`;
};

const users = [user, user, user, user, user];

const addUsers = () => {
  let usersHTML = "";

  users.forEach((user) => {
    const userHTML = createUser(user);
    usersHTML = usersHTML + userHTML;
  });

  console.log({
    usersHTML,
  });

  userList.innerHTML = usersHTML;
};
