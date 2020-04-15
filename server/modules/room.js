function Room(id) {
  this.id = id;
  this.users = new Map();
}

Room.prototype.size = function() {
  return this.users.length;
};

Room.prototype.hasUser = function(userId) {
  return this.users.has(userId);
}

Room.prototype.addUser = function(user) {
  if (!this.hasUser(user.id)) {
    this.users.set(user.id, user);
  }
  return user.id;
}

Room.prototype.removeUser = function(userId) {
  if (this.hasUser(userId)) {
    this.users.delete(userId);
    return userId;
  }
  return null;
}

module.exports = Room;