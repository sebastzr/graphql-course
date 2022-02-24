const tasks = require("./tasks");
const User = require("./models/User");

const resolvers = {
  Query: {
    hello() {
      return "Hello world with graphql";
    },
    greetings(root, args) {
      return `Whats up ${args.name}`;
    },
    iNeedName(root, { name }) {
      return `Thank you ${name}`;
    },
    tasks() {
      return tasks;
    },
    lookAtThisContext(root, args, ctx) {
      return ctx.messageId;
    },
    async Users() {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    async createUser(_, { input }) {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    async deleteUser(_, { _id }) {
      return await User.findByIdAndDelete(_id);
    },
    async updateUser(_, { _id, input }) {
      return await User.findByIdAndUpdate(_id, input);
    },
  },
};

module.exports = resolvers;
