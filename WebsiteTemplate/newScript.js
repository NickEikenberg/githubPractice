const mobileLink = document.querySelector('.mobile-links-opener');
const modalContainer = document.querySelector('.links-modal-container');

mobileLink.addEventListener('click', function (event) {
  event.preventDefault();
  modalContainer.style.display = 'block';

  mobileLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (modalContainer.style.display === 'block') {
      modalContainer.style.display = 'none';
    } else {
      modalContainer.style.display = 'block';
    }
  });
});

// document.addEventListener("keydown", function (event) {
//   event.preventDefault();

//   if ((event.key === "Escape" && modalContainer.style.display = "block")) {
//     modalContainer.style.display = "none";
//   }
// });

document.addEventListener('keydown', function (event) {
  event.preventDefault();

  if (modalContainer.style.display === 'block') {
    modalContainer.style.display = 'none';
  }
});

modalContainer.addEventListener('click', function (event) {
  event.preventDefault();

  if (modalContainer.style.display === 'block') {
    modalContainer.style.display = 'none';
  }
});

console.log('test');
