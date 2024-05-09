please run the following commands
1)npm init -y
2)npm install cors
3)npm install express

please configure package.json with "dev":"nodemon index.js" in script object

npm run dev - to start a server

4)Inorder to test the api using thunderclient / postman
a)Make a new POST request to http://localhost:5000/fizzbuzz
b)and in the body section provide the test case
{
  "values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, "hello"]
}