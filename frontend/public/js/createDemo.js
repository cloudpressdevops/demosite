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
  
  console.log(formDataJson);
};