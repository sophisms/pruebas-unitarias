const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('add user to userController', () => {    
    let user = new User(2553,"Sofi", "sofi@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {    
  let user = new User(4278,"Rosa", "rosa@generation.org");
  userController.add(user);    
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('verify email user to userController', () => {    
  let user = new User(2244,"Lily", "lily@generation.org");
  userController.add(user);    
  expect(userController.getUsers(userController.findByEmail("lily@generation.org"))).toContain(user);
});

test('verify email user to userController', () => {    
  let user = new User(4560,"Dany", "dany@generation.org");
  userController.add(user);    
  expect(userController.getUsers(userController.findByEmail("dany@generation.org"))).toContain(user);
});

test('verify id user to userController', () => {    
  let user = new User(6341,"Jorge", "jorge@generation.org");
  userController.add(user);    
  expect(userController.getUsers(userController.findById(6341))).toContain(user);
});

test('verify id user to userController', () => {    
  let user = new User(6341,"Jonathan", "jonathan@generation.org");
  userController.add(user);
  console.log(user.id); 
  expect(userController.getUsers(userController.findById(6341))).toContain(user);
});