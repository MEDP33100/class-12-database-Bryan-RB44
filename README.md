[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/sOTBciC-)
# Template for MEDP 33100 projects and homeworks
### Assignment

Create a MongoDB database and display its contents on a page.

Requirements:

1. Create a new database in [MongoDB Atlas](https://cloud.mongodb.com/v2/65a9608a0842e37fef26a154#/metrics/replicaSet/6734356ece067d1843aada98/explorer/blog/posts/find)
2. Manually create a new collection in the database
    1. Your collection can be about anything: a collection of students, books, characters, etc.
    2. Your collection should have at least 3 fields (ie. a collection of students has fields `name`, `grade`, `graduationYear`)
    3. Tip: use ChatGPT to generate the data
3. Manually add documents to your collection 
4. Create a new Express app using `npx express-generator --view=hbs`
5. Connect your Express app to the database in `app.js`
6. Update `/routes/index.js` to query a collection from the database and display the data.