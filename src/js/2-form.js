import { save, load } from './localStorage';
import iziToast from 'izitoast';

const feedbackFormEl = document.querySelector('.js-feedback-form');
const formData = {
  email: '',
  message: '',
};


const fillFormField = () => {
  const formDataFromLS = load('feedback-form-state');

  if (!formDataFromLS || typeof formDataFromLS !== 'object') {
    return;
  }

  Object.keys(formDataFromLS).forEach(key => {
    feedbackFormEl.elements[key].value = formDataFromLS[key];
    formData[key] = formDataFromLS[key];
  });
};

fillFormField();


const onFormFieldChange = event => {
  const { target: formField } = event;

  const fieldName = formField.name;
  const fieldValue = formField.value;

  formData[fieldName] = fieldValue.trim(); 

  save('feedback-form-state', formData);
};


const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const formDataValues = Object.values(formData);


  if (formDataValues.some(el => el.trim() === '')) {
    iziToast.error({
      message: 'Fill please all fields!',
      position: 'topRight',
    });

    return;
  }


  console.log(formData);


  event.currentTarget.reset();
  Object.keys(formData).forEach(key => (formData[key] = ''));
  localStorage.removeItem('feedback-form-state');
};


feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

