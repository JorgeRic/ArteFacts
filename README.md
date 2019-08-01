# Artefacts
>A Collaborative art gallery

![Artefacts](artefacts_preview.jpg)

## Description

Artefacts is an app where artists can share their jobs. It's focused on artists, but it's also opened to people interested on art, or maybe art galleries searching new talents.

## MVP

The MVP is to build a mobile app to allow artists uploading their jobs via filling a short form, to save arts as favorites and display artist's contact (once logged in).


## User stories

>##### Home View:
- As a user I can see a list of different arts uploaded by different artists
- As a user I can see art's details clicking on an icon in the art's card
- As a user I have a burguer navigation that toggles when clicking on a burguer menu icon
- As a user I can select arts by category inside the burguer menu
- As a user I can signup if I'm not registered
- As a user I can log in, if I've registered before 
- As a logged in user I can select favourite arts clicking on a "star icon" in the homepage's list of arts
- As a logged in user I can be linked to the upload art's form by clicking on a button in the homepage
- As a logged in user I can go to my private area by clicking on an icon in the header
- As a logged user I can logout from the app using the burger menu
- As a logged in user I navigate a my profile's page using a link in homepage

>##### Profile View:
- As a logged in user I can navigate between uploaded arts and favorite arts in my profile's page
- As a a logged in user I can get linked to a form to upload arts using a button in my profile page
- As a a logged in user, I can see a list of uploaded arts in my profile's page
- As a a logged user, I can edit my uploaded arts in my profile's page
- As a a logged in user, I can delete my uploaded arts in my profile's page
- As a logged in user I can see a list of favorite arts in my profile's page
- As a logged in user I can unlike my favourite arts in my profile's page

>##### Create view:
- As a logged in user, I can check that the arts have been uploaded OK.
- As a logged in user, I can send my arts and data related.
- As a logged in user, I can navigate to my list of uploaded arts.

>##### Errors views:
- 404: As a user I can see an not-found page if the route doesn't exist.
- 404: As a user I can navigate back to homepage.
- 500: As a user I want to see a error page when the super team screws it up so that I know that is not my fault.

## Backlog

>##### FIRST ITERATION:
*Adding features*
- Add categories feature, so users can search arts filtered by category.
- Add search for an artist feature.
- Display the signup/login form as a pop up when users try to save favourites or upload some art (if they are not logged in).

>##### SECOND ITERATION:
*Make the app available for tablet/desktops*
- Just make it responsive and display hover effects on desktop

>##### THIRD ITERATION:
*Add mapping API feature*
- Map the art (if it makes sense, e.g, a figurative paint of a place)
- Map the artist (if it makes sense, e.g, if has a gallery or somewhere to be able to see the arts physically)

## Routes

|Method|URL|Description|
|------|---|-----------|
|GET|'/'|Renders homepage|
|GET|'/auth/signup'|Renders the signup page|
|POST|'/auth/signup'|Add info of user into ddbb|
|GET|'/auth/login'|Renders the login page|
|POST|'/auth/login'|Check if user is in the ddbb & redirects to home|
|GET|'/auth/logout'|End user session. Redirect to home|
|GET|'/profile/arts'|Renders the user's page with uploaded arts if they exist (if array is empty, we display a message)|
|POST|'/profile/arts'|Updates the user's page with uploaded arts if they exist (if array is empty, we display a message)|
|POST|'/profile/arts/:id/delete'|Updates the user's page without deleted arts|
|GET|'/profile/favorites'|Renders the user's page with favorite arts if they exist (if the array is empty we display a message & a link to home)|
|POST|'/profile/favorites'|Updates the user's page with favorite arts if they exist (if the array is empty we display a message & a link to home)|
|POST|'/profile/favorites/:id/delete'|Updates the user's page without deleted favorite arts|
|GET|'/create' |Renders the form where user can upload the art|
|POST|'/create'|Updated the ddbb with new art added by artist. Renders the uploaded art in the top of the /create view|


## Design framework
- Home page
- Login page
- Signup page
- Profile page
- Form page
- Updated Arts list (partial)
- Favorite Arts list (partial)

## Models

User model

```
username: String
password: String
```

Artefact model

```
authorName: String
ownerId: ObjectId ref User
contact: String
image: String
artType: String
description: String

```

## Links


### Trello
Workflow of tasks and backlog:
[Link url](https://trello.com/b/2wFp1UgC)


### Git
URls for the project repo and deploy:
[Link Repo](https://github.com/JorgeRic/ArteFacts) |
[Link Deploy](https://arte-facts.herokuapp.com/)


### Slides
URls for the project presentation (slides):
[Link Slides.com](https://docs.google.com/presentation/d/18x106c1-I2rpo4fTlNCJjWsnj1AJRzgLKhLmbJG639c/edit?usp=sharing)


### Zeplin
Wirewframes:
[Link Zcene Zeplin](https://scene.zeplin.io/project/5d39e1e9d74b1c4ba7b6db17)