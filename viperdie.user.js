// ==UserScript==
// @name         ViperDie
// @namespace    https://liquidram.tech/
// @version      0.1
// @description  dont do the verification things on vipdirect.cc
// @author       memcorrupt
// @match        https://vipdirect.cc/*
// @grant        none
// @run-at document-end
// ==/UserScript==

window.open = function(link){window.location.href=link};ab=5;asdf();
