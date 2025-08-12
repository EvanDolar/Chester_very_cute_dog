function Display_image(src, height, width,alt) {
let img = document.createElement("img");

img.src = src;
img.height = height;
img.width = width;
img.alt = alt;

document.body.amendchild(img);
}
