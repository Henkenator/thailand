import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    submitFormScript();
  }

}

export function submitFormScript() {

  function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  function validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
      console.log('Robot Detected!');
      return true;
    } else {
      console.log('Welcome Human!');
    }
  }

  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;

    var fields = Object.keys(elements).filter(function (k) {
      return (elements[k].name !== 'honeypot');
    }).map(function (k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    }).filter(function (item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {
      formDataNameOrder: {},
      formGoogleSheetName: {},
      formGoogleSendEmail: {}
    };
    fields.forEach(function (name) {
      var element = elements[name];

      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || 'responses'; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ''; // no email by default

    // console.log(formData);
    return formData;
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var data: FormWithEmail = getFormData(form);         // get the values submitted in the form

    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
    if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }
    */
    console.log(form);
    console.log(data);
    var invalidEmail = form.querySelector('.email-invalid');
    var successfulSubmit = form.querySelector('.successful-submit');
    var failedSubmit = form.querySelector('.failed-submit');
    //if (invalidEmail) {
    invalidEmail.style.display = 'none'; // hide message before checking for validity
    successfulSubmit.style.display = 'none'; // hide message before checking for validity
    failedSubmit.style.display = 'none'; // hide message before checking for validity
    //}

    if (data.email && !validEmail(data.email)) {   // if email is not valid show error
      if (invalidEmail) {
        invalidEmail.style.display = 'block';
        return false;
      }
    } else {
      disableAllButtons(form);
      var loader: any = document.querySelector('.loader');
      var overlay: any = document.querySelector('.booking-form-item');
      loader.style.display = 'block'; // show spinner
      overlay.style.opacity = '0.75'; // make booking form whiter
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);
        /*var formElements = form.querySelector(".form-elements")
        if (formElements) {
          formElements.style.display = "none"; // hide form
        }*/

        loader.style.display = 'none'; // hide spinner
        overlay.style.opacity = '1'; // make booking form normal
        if (xhr.status === 200) {
          successfulSubmit.style.display = 'block';
        } else {
          failedSubmit.style.display = 'block';
        }

        form.querySelector('.name').value = '';
        form.querySelector('.address').value = '';
        form.querySelector('.zipCode').value = '';
        form.querySelector('.city').value = '';
        form.querySelector('.phone').value = '';
        form.querySelector('.email').value = '';
        form.querySelector('.message').value = '';

        return;
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
    }
  }

  function loaded() {
    console.log('Contact form submission handler loaded successfully.');
    // bind to the submit event of our form
    var forms = document.querySelectorAll('form.gform');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', handleFormSubmit, false);
    }
  };
  document.addEventListener('DOMContentLoaded', loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

  // run loaded function to add event listener to the form
  loaded();
}

export interface FormWithEmail {
  email?: any;
  formDataNameOrder?: any;
  formGoogleSheetName?: any;
  formGoogleSendEmail?: any;
}
