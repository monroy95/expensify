# EXPENSIFY

Expensify is an application to keep a track of the expenses that you could have in the month.

To use it you need to have logged in with your google credentials Demo [here](http://expensify-with-react.herokuapp.com/)

![Imgur](https://i.imgur.com/ZHm1zKT.png)

### Views
1- `/dashboard` : In this view all the expenses that were had in the month are listed, there is a selection of dates. By default the expenses are ordered by date, but you can change it to sort them by total of the expense.

2- `/create` : In this view the expenses are created. There are required values such as description, amount and date. The amount also has to use a type value (D * .DD) (.cents).

3- `/` : This is the root of the app, used to login. If you do not have a session started you can not use the application.

![Imgur](https://i.imgur.com/nCVrvqn.png)

### Development
If you want to clone the repository and use it:
Follow these steps:

1- `$ git clone https://github.com/loconluis/expensify.git`

2- `$ cd expensify`

3- `$ yarn install`

4- `$ yarn run dev-server`

5- For test run `$ yarn test`


Code with ♥ by [LoconLuis](https://twitter.com/loconluis)

Project seen in the course of [React](https://mead.io/) by [Andrew Mead](https://twitter.com/andrew_j_mead)