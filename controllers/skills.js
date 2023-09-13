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
    })
  })
  .catch(error => {  // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}


export {
  index
}