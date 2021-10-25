#!/bin/zsh

function new_project() {
    cp -R _starter_code $1;
    cd $1;
    code index.html styles.css script.js
}
