REM this takes forever just manually do it
REM call npm install


REM Change Directory
REM cd $(ProjectDir)\

REM Grab the current build configuration and set a variable we can use
set NODE_ENV=$(ConfigurationName) 

REM run gulp
node_modules\.bin\gulp