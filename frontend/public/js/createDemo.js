const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  createDemo();
});


const createDemo = async () => {
  const form = document.querySelector('form')
  var formData = new FormData(form);

  let formDataJson = {
    'employee': formData.get('employee'),
    'customer': formData.get('customer'),
    'branche': formData.get('branche'),
    'description': formData.get('description'),
    'workflow': formData.get('workflow'),
    'requestBy': formData.get('requestBy')
  }
  
  // console.log(formDataJson);
  let url = 'http://localhost:5001/create'
  await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataJson)
  })
    .then(res => {
      return res.json()
    })
    .then(res => console.log(res))
    .catch(res => console.log("Couldn't create Demo."))
};