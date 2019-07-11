const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  createDemo();
});


const createDemo = () => {
  var formData = new FormData(document.querySelector('form'));

  const formDataJson = {
    'employee': formData.get('employee'),
    'customer': formData.get('customer'),
    'branche': formData.get('branche'),
    'description': formData.get('description'),
    'workflow': formData.get('workflow'),
    'requestBy': formData.get('requestBy')
  }
  
  // console.log(formDataJson);
  let url = 'http://localhost:5001/create'
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(formDataJson),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(JSON.stringify(res)))
};