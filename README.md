# A Mycroft UI for Desktop and Magic Mirrors
A UI for Mycroft designed for a magic mirror also with a desktop mode

modular using reactjs and can handle plugins

*note* before starting edit config.json with your path to this clone and your mycroft-core folder

to run npm install && npm start

1. Have a working install of mycroft (https://github.com/MycroftAI/mycroft-core)
2. Have a working install of nodejs/npm (https://nodejs.org)
3. Clone this repo
```$ git clone https://github.com/joshymcd/mycroft-magic-mirror.git```

4. edit config.json in mycroft-magic-mirror folder with two paths to mycroft-core and this mycroft-magic-mirror (i will streamline this part);
5. in terminal
    ```$ cd mycroft-magic-mirror```
    ```$ npm install```

## Start-up scripts
There are a couple of ways to start up the UI

### Mode
1. Desktop Mode - shows a desktop friendly UI in a borderless window which can be resized and dragged around
2. Mirror Mode - A fullscreen black and white UI designed for use in magic mirror like projects

### Startup type
1. Manual - you manually have to select to start each Mycroft service and then connect (*hint* click on the 'Mycroft Inside' text to show the admin menu)
2. Auto - Automagically starts up Mycroft and connects
*Note:* Not yet implemented!

### Start Commands
####Basic
1. ``` npm start ```
This runs the UI in Desktop & Manual Mode
2. ``` npm run start-desktop ```
This runs the UI in Desktop & Manual Mode
3. ``` npm run start-mirror ```
This runs the UI in Mirror & Auto Mode

####Other Startup Modes
1. ```npm run start-desktop-auto```
2. ```npm run start-desktop-manual```
3. ```npm run start-mirror-auto```
4. ```npm run start-mirror-manual```
