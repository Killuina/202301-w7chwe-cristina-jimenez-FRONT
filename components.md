# Data

## Data layer

- List of users:
  - username
  - email
  - avatar
  - isLogged
  - List of friends
  - List of enemies

## Data modifications

- Load the list of users
- Create an user
- Edit an user
- Delete an user
- Toggle friend status of an user
- Toggle enemy status of an user

# Components

## App

- Shows the whole app

## Layout

- Shows Header component
- Shows LogPage component when isLogged status is false
- Shows HomePage component when isLogged status is true

## Header

- Shows app title: 'Feisbuk'
- Shows NavBar component

## NavBar

- Shows 'Register' button when isLogged status is set to false
- Shows 'Logout' button and 'Edit profile' button when isLogged status is set to true

## LogPage

- Shows title 'Welcome to Feisbuk' on a heading
- Shows Login component
- Shows 'Register' Button on the header

## RegisterPage

- Shows Register component

## HomePage

- Shows Filter component
- Shows UserList component

## ProfilePage

- Shows Profile component
- Shows EditForm component

## Profile

- Shows user's username
- Shows user's avatar
- Shows user's email
- Shows 'Edit' button

# EditForm

- Receives the update user action

- Shows an input for the new username with label "Username:"
- Shows an input for the new avatar with label "Avatar"
- Shows an input for the new email with label "Email:"

- On submit executes the received update user action

## UserList

- Receives a list of users
- Shows a UserCard for every user in the list
- Sends a user to each UserCard component

## UserCard

- Receives toggle friend status action
- Receives toggle enemy status action
- Receives a user with user data

- Shows the user's username
- Shows the user's avatar
- Shows relationship status (friend or enemy)

- Shows 'Add to friends' Button
- Shows 'Add to enemies' Button

- Executes toggle friend status action when the user clicks on 'Friends' button
- Exectures toggle enemy status action when the user clicks on 'Enemies' button

## RegisterForm

- Receives the register user action

- Shows an input for the new username with label "Username:"
- Shows an input for the new avatar with label "Avatar:"
- Shows an input for the new email with label "Email:"

- On submit executes the received register user action

## LoginForm

- Receives the login user action

- Shows an input for users' username with label "Username:"
- Shows an input for users' password with label "Password:"

- On submit executes the received login user action

## Filter

- Shows 'Friends' button to filter by friends
- Shows 'Enemies' button to filter by enemies
- Shows 'All' button to remove filters

## Logout Button

- Receives logout user action

- Shows 'Logout' text

- On click executes the given logout user action
