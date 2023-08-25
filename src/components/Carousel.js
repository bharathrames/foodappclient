import React, { useState } from 'react';


const RecipeCarousel = ({ recipes }) => {
  
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const itemWidth = document.querySelector('.carousel-item').clientWidth;
  
    let currentIndex = 0;
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
      updateCarouselPosition();
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % carouselInner.children.length;
      updateCarouselPosition();
    });
  
    function updateCarouselPosition() {
      carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }


  return (
    <>
    <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src="recipe1.jpg" alt="Recipe 1"/>
      </div>
      <div class="carousel-item">
        <img src="recipe2.jpg" alt="Recipe 2"/>
      </div>
      <div class="carousel-item">
        <img src="recipe3.jpg" alt="Recipe 3"/>
      </div>      
    </div>
  </div>

  <div class="carousel-controls">
    <button id="prevBtn">◄</button>
    <button id="nextBtn">►</button>
  </div>
   
  </>

  );
};

export default RecipeCarousel;
