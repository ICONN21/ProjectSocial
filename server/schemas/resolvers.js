const user = require('../models/User');
const Event = require('../models/Event');
const CharacterSheet = require('../models/CharacterSheet');
const User = require('../models/User');

const resolvers = {
    Query: {
        users: async() => await User.find(),
        user: async (_, { id }) => await User.findById(id),
        events: async () => await Event.find(),
        event: async (_, { id }) => await Event.findById(id),
        characterSheets: async () => await CharacterSheet.find(),
        characterSheet: async (_, { id }) => await CharacterSheet.findById(id),
    },

    Mutation: {
        createUser: async (_, { input }) => {
            const user = new User(input);
            await user.save();
            return user;
        },
        createEvent: async (_, { input }) => {
            const event = new Event(input);
            await event.save();
            return event;
        },
        createCharacter: async (_, { input }) => {
            const characterSheet = new CharacterSheet(input);
            await characterSheet.save()
            return characterSheet;
        },
        signupForEvent: async (_, { eventId, userId }) => {
            const event = await Event.findById(eventId);
            if (!event) throw new Error('Event not found');
            event.participants.push(userId);
            await event.save();
            return event;
        },
        deleteUser: async (_, { id }) => {
            const result = await User.findByIdAndDelete(id);
            return result ? true : false;
        },
        deleteEvent: async (_, { id}) => {
            const rewuslt = await Event.findByIdAndDelete(id);
            return result ? true : false;
        },
        deleteCharacter: async (_, { id }) => {
            const result = await CharacterSheet.findByIdAndDelete(id);
        },
    },
};

module.exports = resolvers