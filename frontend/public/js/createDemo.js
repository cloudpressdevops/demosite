const submitButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.submit');
const form = document.querySelector('form');
let employeeSelector = document.querySelector('#employee');
let customerSelector = document.querySelector('#customer');
let descriptionSelector = document.querySelector('#description');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateFields();
});

employeeSelector.addEventListener('input', () => {
  if(employeeSelector.classList.contains("is-danger")) {
    employeeSelector.classList.remove("is-danger");
    document.querySelector('#help-email').style.display = 'none';
  }
});

customerSelector.addEventListener('input', () => {
  if(customerSelector.classList.contains("is-danger")) {
    customerSelector.classList.remove("is-danger");
    document.querySelector('#help-customer').style.display = 'none';
  }
});

descriptionSelector.addEventListener('input', () => {
  if(descriptionSelector.classList.contains("is-danger")) {
    descriptionSelector.classList.remove("is-danger");
    document.querySelector('#help-description').style.display = 'none';
  }
})

const createDemo = async (data) => {
  
  let url = 'http://localhost:5001/create'

  await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      return res.json()
    })
    .then(res => console.log(res))
    .catch(res => console.log("Couldn't create Demo."))
};

const checkFields = (name, field, type, minLength) => {
  if(type === 'email') {
    const expression = /\S+@\S+/
    if(!expression.test(String(field).toLowerCase()))
    {
      return name;
    }
  } 
  
  if (type === 'text') {
    if(minLength > 0) {
      if (field.toString().length +1 <= minLength ) {
        return name;
      } 
    }
  }
}

const validateFields = () => {
  
  var formData = new FormData(form);

  let formDataJson = {
    'employee': formData.get('employee'),
    'customer': formData.get('customer'),
    'branche': formData.get('branche'),
    'description': formData.get('description'),
    'workflow': formData.get('workflow'),
    'requestBy': formData.get('requestBy'),
    'licenses': formData.get('licenses')
  }
  
  let validationErrors = [];
  validationErrors.push(checkFields('employee',formData.get('employee'),'email'));
  validationErrors.push(checkFields('customer',formData.get('customer'),'text',3));
  validationErrors.push(checkFields('description',formData.get('description'),'text',15));

  validationErrors = validationErrors.filter( (el) => {
    return el !=null;
  });
  
  if (validationErrors.length > 0) {

    if(validationErrors.includes('employee')) {
      if(!employeeSelector.classList.contains("is-danger")) {
        employeeSelector.classList += " is-danger"
        document.querySelector('#help-email').style.display = 'block';
      }
    } else {
      if (employeeSelector.classList.contains("is-danger")) {
        employeeSelector.classList.remove("is-danger");
      }
    }

    if(validationErrors.includes('customer')) {
      if(!customerSelector.classList.contains("is-danger")) {
        customerSelector.classList += " is-danger"
        document.querySelector('#help-customer').style.display = 'block';
      }
    } else {
      if (customerSelector.classList.contains("is-danger")) {
        customerSelector.classList.remove("is-danger");
      }
    }

    if(validationErrors.includes('description')) {
      if(!descriptionSelector.classList.contains("is-danger")) {
        descriptionSelector.classList += " is-danger"
        document.querySelector('#help-description').style.display = 'block';
      }
    } else {
      if (descriptionSelector.classList.contains("is-danger")) {
        descriptionSelector.classList.remove("is-danger");
      }
    }
    
  } else {
    createDemo(formDataJson);
}
};
