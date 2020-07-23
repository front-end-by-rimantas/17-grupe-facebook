"use strict";
import posts from './data.js';
import renderFeed from './renderFeed.js';

// generuojame turini
renderFeed( posts, '#feed' );

// susirandame jau egzistuojancius "read-more" ir pradedame stebeti paspaudimus ant ju
const readMoreList = document.querySelectorAll('.feed p > .read-more');
const readLessList = document.querySelectorAll('.feed p > .read-less');
const readMoreListSize = readMoreList.length;
const readLessListSize = readLessList.length;

function readMoreClick( event ) {
    event.target.closest('.short-text').classList.add('hidden');
    event.target.closest('.post-content').querySelector('.full-text').classList.remove('hidden');
}
function readLessClick( event ) {
    event.target.closest('.full-text').classList.add('hidden');
    event.target.closest('.post-content').querySelector('.short-text').classList.remove('hidden');
}

for ( let i=0; i<readMoreListSize; i++ ) {
    readMoreList[i].addEventListener('click', readMoreClick);
}
for ( let i=0; i<readLessListSize; i++ ) {
    readLessList[i].addEventListener('click', readLessClick);
}