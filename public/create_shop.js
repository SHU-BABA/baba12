function createImages() {
    var imgFiles = document.getElementById("imgUpload").files;
  
    for (var i = 0; i < imgFiles.length; i++) {
        var imgFile = imgFiles[i];
  
        // Create an object URL for the uploaded image
        var imgUrl = URL.createObjectURL(imgFile);
  
        // Create a link element and set its href to the image URL
        var link = document.createElement("a");
        var div = document.createElement("div");
        link.href = imgUrl;
  
        // Create an image element and set its source to the uploaded image URL
        var img = new Image();
        img.src = imgUrl;
            img.style.minHeight="100px";
            img.style.maxHeight="100px";
            img.style.minWidth="100px"
            img.style.maxWidth="100px"
        // Append the image to the link element, and the link element to the imgContainer div
        link.appendChild(img);
        document.getElementById("imgContainer").appendChild(link).appendChild(div);
    }
  }
  
  
  