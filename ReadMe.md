# Description 
### This application allows the user to set goals, track milestones, and monitor progress of th user.
----------------------------------------------------------------------------------------------------------------------------------------------------
# Getting Started
1. clone the repo 
    - git@github.com:OmarIbraheem123/project-2.git

3. touch .env

2. npm install :point_down:
----------------------------------------------------------------------------------------------------------------------------------------------------
## Installation
--- 
- npm install express 
- npm install morgan
- npm install jest
- npm install supertest
- npm install mongodb-memory-server
- npm install artillery
- npm install mongoose
- npm install dotenv
---------------------------------------------------------------------------------------------------------------------------------------------------
# RESRful Routes 

## USER 

| Action | Method | Path | Action |
| -----------| ----------- | ----------- | ----------- |
| create | Post | /user | Creates a User |
| login| Post | /user/login | logs in a created User |
| update | Put | /user:id | updates a created User |
| delete | delete | /user:id | deletes already existing User |


## GOALS 

| Action | Method | Path | Action |
|-----------| ----------- |----------- | ----------- |
| index | Get | /goals | shows a list of Goals |
| create | Post | /goals | Creates a Goal |
| update | Put | /goals:id | updates a already existing Goal |
| delete | delete | /goals:id | deletes a already existing Goal|
| create | Post | /goals:id/achieved | create a achieved Goal |

 ---------------------------------------------------------------------------------------------------------------------------------------------------

 # POSTMAN 

## USER

### /user
- creates User

```
{
"name": "Omar",
 "email": "Omariscool@hi.com",
 "password": "$2b$08$eoAsU9QPoAp0EWWXnErNZO7UQzArfkrbTpxnhQ2GK0R8vOO2yAhcK",
 "goals": [],
 "achievedGoals": [],
"_id": "65bdd4a6f0e225dcc06eea2e",
"__v": 0
}
```
### /user/login
- logs in a created User

```
{
"user": {
"_id": "65bdd4a6f0e225dcc06eea2e",
 "name": "Omar",
"email": "Omariscool@hi.com",
"password": "$2b$08$eoAsU9QPoAp0EWWXnErNZO7UQzArfkrbTpxnhQ2GK0R8vOO2yAhcK",
"goals": [],
 "achievedGoals": [],
 "__v": 0
 },
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJkZDRhNmYwZTIyNWRjYzA2ZWVhMmUiLCJpYXQiOjE3MDY5Mzk4MTN9.AJ_ZMO_jrQwC-Rmwr9GWHj6grShgK5eW4gSOjZ0-o-0"
}
```
### /user:id
-  updates a created User
 ```
{
 "_id": "65bdd4a6f0e225dcc06eea2e",
 "name": "OmarIbraheem",
 "email": "Omariscool@hi.com",
"password": "$2b$08$96DL7TeplauI34plOPexMOcujWb6RTHnDJOmwwWppMjT9EWSaaOZ6",
 "goals": [],
"achievedGoals": [],
"__v": 0
}
```
### /user:id
- deletes already existing User

```
 {
"message": "User deleted"
}
```
## GOALS

### /goals
 - Creates a Goal
```
 {
"category": "projects",
"objective": "finish read Me",
"status": "new",
"_id": "65bde1d1f0e225dcc06eea49",
 "__v": 0
 }
 ```
### /goals
-  shows a list of Goals
```
[
{
 "_id": "65b56d9b44484fd07853146b",
 "category": "prjects",
 "objective": "start projest 3",
 "status": "new",
 "__v": 0
 },
{
"_id": "65b58287a2a62e531d1231e6",
"category": "prjects",
"objective": "start projest 1",
"status": "new",
"__v": 0
},
{
"_id": "65b9aaad6067be1c9f13d0f8",
"category": "Project",
"objective": "finish project",
"status": "new",
"__v": 0
},
{
"_id": "65b9aad26067be1c9f13d0fc",
"category": "Project",
"objective": "finish project-3",
"status": "new",
"__v": 0
},
{
"_id": "65bde1d1f0e225dcc06eea49",
"category": "projects",
"objective": "finish read Me by today",
"status": "new",
"__v": 0
}
]
```
### /goals:id
-  updates a already existing Goal
```
{
 "_id": "65bde1d1f0e225dcc06eea49",
"category": "projects",
"objective": "finish read Me by today",
"status": "new",
"__v": 0
}
```
### /goals:id
-  deletes a already existing Goal
```
{
"msg": "Deleted Goal"
}
```






 
