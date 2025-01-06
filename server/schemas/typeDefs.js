const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        role: String!
        characterSheets: [CharacterSheet]
    }

    type Event {
        id: ID!
        title: String!
        date: String!
        maxParticipatns: Int!
        participants: [User]
    }
    
    type CharacterSheet {
        id: ID!
        user: User!
        characterName: String!
        class: String!
        level: Int!
        abilities: JSON
        equipment: [String]
    }

    input CreateUserInput {
        username: String!
        email: String!
        password: String!
    }

    input CreateEventInput {
        title: String!
        date: String!
        maxParticipants: Int!
    }

    input CreateCharacterInput {
        userId: ID!
        characterName: String!
        class: String!
        level: Int!
        abilities: JSON
        equipment: [String]
    }

    type Query {
        users: [User]
        user(id: ID!): User
        events: [Event]
        event(id: ID!): Event
        characterSheets: [CharacterSheet]
        characterSheet(id: ID!): CharacterSheet
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        createEvent(input: CreateEventInput!): Event
        createCharacter(input: CreateCharacterInput!): CharacterSheet
        signupForEvent(eventId: ID!, userId: ID!): Event
        deleteUser(id: ID!): Boolean
        deleteEvent(id: ID!): Boolean
        deleteCharacter(id: ID!): Boolean
    }
    `;

    module.exports = typeDefs;