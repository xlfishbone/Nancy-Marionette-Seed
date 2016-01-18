REM this takes forever just manually do it
REM call npm install


REM run gulp on build
REM node_modules\.bin\gulp

REM Change Directory
REM cd $(ProjectDir)\

REM Grab the current build configuration and set a variable we can use
set NODE_ENV=$(ConfigurationName) 

REM run gulp
gulp