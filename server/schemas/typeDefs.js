const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]

type Book {
    _id: ID
    bookId: ID
    authors: String
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username:String!): User
    me: User
}

type Mutation {
    login (email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookId: ID!): Book
    removeBook(bookId: ID!): Book
}
}

`;
