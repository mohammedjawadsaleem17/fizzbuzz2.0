please run the following commands
1)npm init -y
2)npm install cors
3)npm install express

 

npm run dev - to start a server

4)Inorder to test the api using thunderclient / postman
a)Make a new POST request to http://localhost:5000/fizzbuzz
b)and in the body section provide the test case
{
  "values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, "hello"]
}
Although the backend part is deployed to vercel which can be accessed on : https://server-three-kappa.vercel.app/
to test : https://server-three-kappa.vercel.app/test

The Post Request is made using the URL : https://server-three-kappa.vercel.app/fizzbuzz


/*
Configure Vercel deployment

create a vercel.json configuration file 
{
  "version": 2,
  "builds": [{ "src": "index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "index.js" }]
}

Deploy npm install -g vercel
vercel
*/