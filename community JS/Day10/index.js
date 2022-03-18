const call = document.getElementById('name');
const callEvent = document.getElementById('calling');
const picture = document.getElementById('p');

callEvent.addEventListener('click', function () {
  setTimeout(calling, 2000);
});

picture.addEventListenr('click', function() {
    setTimeout(calling, 2000);
})

function calling() {
  call.innerHTML = '엄마';
  callEvent.innerHTML = '010-1212-1212';
  picture.src = "https://pbs.twimg.com/media/ErRNS50UUAAKyY_.jpg"
}