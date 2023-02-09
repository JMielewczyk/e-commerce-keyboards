Hello !

This e-commerce page was created using create-react-app.

This project/site is displaying all products after fetching them from firebase storage. Each product has it's own images folder and json file with attributes of name, price, discount, discount amount, description, currency, and boolean if it's a new product(if so then product is displayed in 'New arrivals' on homepage). Other attributes such as url path to product are being added later in the process when user adds product to shopping cart. Each change of adding new products to firebase storage or changes in attributes will lead to change on the website. 
Categories such as keyboards, switches and so on are also being fetched from storage.
Same thing goes to listing products in categories and viewing product - it's all being fetched from firebase storage.
Featured product element on homepage is displaying randomly one product from all products in the storage.

Site has also functionality as authorization from firebase. Users can sign up via email or fast login via Google authorization.
If user would like to order a product firstly he needs to sign in.
In the payment page there is no checking if card informations are correct due to the fact that this is only a demo site.


Used technologies: React, styled-components, react-router, firebase(authentication, storage), font-awesome & additional tools helping write cleaner code - ESlint & Prettier.

Link to check the project: https://jmielewczyk.github.io/e-commerce-keyboards/ 

If you would like to contact me please leave a message on my linkedIn profile : https://www.linkedin.com/in/jakub-mielewczyk-b411a6221/
