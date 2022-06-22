const form = document.forms.namedItem('preferences');
const response = document.querySelector('code');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  makePOSTrequestWithFormURLencodedFormat(new FormData(form))
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then((json) => {
      console.log({ json });
      response.textContent = JSON.stringify(json, null, 1);
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
});

function makePOSTrequestWithMultipartFormDataFormat(formData) {
  return fetch('/api', {
    method: 'POST',
    body: formData,
    // Content-Type is automatically set as "multipart/form-data"
  });
}

function makePOSTrequestWithFormURLencodedFormat(formData) {
  return fetch('/api', {
    method: 'POST',
    body: new URLSearchParams(formData),
    // Content-Type is automatically set as "application/x-www-form-urlencoded;charset=UTF-8"
  });
}

function makeGETrequest(formData) {
  return fetch(`/api?${new URLSearchParams(formData)}`);
}
