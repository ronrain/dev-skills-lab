import { Skill } from '../models/skill.js'
// This ^^ takes the place of the import we were using previously, so we can delete it!
// ~~import { todos } from '../data/todo-data.js'~~


// function index(req.res) {
//   res.render('todos/index', {

//   })
// }

// Inside the index controller, use the Skill model to query for ALL skills
function index(req, res){
  Skill.find({})
  .then(skills => {  // skills represents the result of the query, in this case ALL skills
    res.render('skills/index',{
      skills: skills,
      time: req.time
    })
  })
  .catch(error => {  // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req,res){
  res.render('skills/new')  
}


function create(req, res) {
  console.log(req.body)
  req.body.done = false
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}


function show(req,res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Todo.findByIdAndDelete(req.params.skillIdId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
}