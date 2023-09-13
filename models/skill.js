import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const skillSchema = new Schema({
  text: String,
  active: Boolean
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}