const mongoose = requore('mongoose');

const CharacterSheetSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    characterName: String,
    class: String,
    level: Number,
    abilities: object,
    equipment: Array,
    
});

module.exports = mongoose.model('CharacterSheet', characterSheetSchema);

