# One Civic Wonder

A store for selling a 1998 Honda Civic

## What is it?

This app was created as a demo app for a class about JavaScript in January 2024.

## Installation

Run the following in the /server directory:

`npm install`

- 'npm i' does the same thing

## Starting the server

`npm start`

## Starting the client

1. Install the client package globally

`cd client`
`npm install`

1. Start the client.

`npm start`

5. Open a browser and go to the url the client is running on.

## Team project 1

1. Each team member should have a github account where they'll make a fork of this repo
2. Each team member should clone their fork of the repo to their local machine.

   You can do this by opening VS Code, creating a new window (File > New Window) an selecting clone git repo from the Welcome screen or by entering `git clone [your-repo-url]` into a terminal window.

3. Add the original (this) repo as a remote for your fork:
   [Configuring a remote repository for a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork)

4. Have the person who forked the repo add everyone else as collaborators so that they all have access to push, pull ...

5. Have a brief planning session with your team and together pick one feature to work on.
   Hint: pick something small to start with.
6. One person will serve as the driver. They'll share their screen and checkout the develop branch (git checkout develop) then create a new branch for the feature (git checkout -b new-branch-name) and will do the coding while explaining what they're doing. The other team members will provide feedback and ask questions.
7. When the feature is done, the driver will merge the changes into their repo's develop branch and push the changes to the remote. (git push origin -u branch-name)
8. Go to github and navigate to this repo and create a pull request to merge your new branch into this repo's develop branch.
9. Go back to step 3 and switch drivers.
10. Sync your fork with the upstream repo. You can learn about how to do this here:
    [Syncing a fork branch from the command line](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-command-line)
11. Repeat until the time for the exercise is over.

# New Feature Backlog

- Display the product description and price for each item on the product page.
- Link each product and accessory to a unique route where individual product information will be displayed (something like /accessories/[id] or /products/[id])
- Build the individual product and accessories pages.
- Make the individual product and accessories pages display a single product or accessory when they recieve an id in the url.
- More tacky
- Less responsive
- Uncontrollable music
- reduce duplication in functions
- increase comments / documentation
- Any other feature you want. The smaller the feature the better.
