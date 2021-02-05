const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    /* return self.connection.dropDatabase(); */
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    console.log('successfully connected');

  //   Recipe.create({    
  //     "title": "Chicken Thighs",
  //     "level": "Amateur Chef",
  //     "ingredients": [
  //       "1/2 cup rice vinegar",
  //       "5 tablespoons honey",
  //       "1/3 cup soy sauce (such as Silver Swan®)",
  //       "1/4 cup Asian (toasted) sesame oil",
  //       "3 tablespoons Asian chili garlic sauce",
  //       "3 tablespoons minced garlic",
  //       "salt to taste",
  //       "8 skinless, boneless chicken thighs"
  //     ],
  //     "cuisine": "Unknown",
  //     "dishType": "main_course",
  //     "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
  //     "duration": 40,
  //     "creator": "Ahmed"}).then(recipe => {
  //       console.log('This recipe was created: ', recipe.title);
  //     })
  //     .catch(error => {
  //       console.error('Error adding element to database', error);
  //     })
  // })
  // .catch(error => {
  //   console.error('Error connecting to the database', error);


    // Recipe.insertMany(data).then(recipes => {
    //   recipes.forEach(recipe => {console.log('This recipe was created: ', recipe.title);});
    // })
    // .catch(error => {
    //   console.error('Error adding element to database', error);
    // })


    // Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100}, {new: true})
    // .then(recipe => {
    //   console.log(`The recipe ${recipe.title} is successfully updated.`, recipe);
    // })
    // .catch(error => {
    //   console.error('Error updating an element in the database', error);
    // })

    Recipe.deleteOne({title: 'Carrot Cake'}).then( () => {
      console.log(`Recipe is successfully deleted.`);
      mongoose.connection.close();
    })
    .catch(error => {
      console.error('Error deleting an element from the database', error);
    })

  });