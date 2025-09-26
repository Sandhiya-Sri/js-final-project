// This function updates the background image and text in the #image div
function upDate(previewPic) {
    // 1) Change the background image URL of the div with id="image" 
    //    to the src of the previewPic image element
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // 2) Change the text of the div with id="image" to the alt text of the previewPic
    imageDiv.textContent = previewPic.alt;
}

// This function restores the original background image and text in the #image div
function unDo() {
    const imageDiv = document.getElementById("image");

    // 1) Set background image back to original (as per your CSS, assuming original URL)
    imageDiv.style.backgroundImage = "url('https://via.placeholder.com/400x300')"; 
    // <-- Replace this URL with the original background image URL from your CSS

    // 2) Change the text back to original text (e.g., "Hover over an image below to display here.")
    imageDiv.textContent = "Hover over an image below to display here.";
}
