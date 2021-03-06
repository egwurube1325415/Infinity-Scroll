const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'tCz9cROIsjylzRRCDXH-JNE4e50F3u_Zkg6ymcLPbn8';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//helper Function to set attributes on DOM elements
function setAttributes(element, attributes) {
  for( const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Create Elements for links & photos for the DOM
function displayPhotos() {
  photosArray.forEach((photo) => {
    //creating <a> to link to splash
    const item = document.createElement('a');
    
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // create <img> for photos
    const img = document.createElement('img');
   
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })
    //put image inside anchor, then put both inside imagecontainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from UNsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();   
  } catch (error) {

  }
}
getPhotos();