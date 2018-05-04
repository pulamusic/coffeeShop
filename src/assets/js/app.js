import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;


// sweetalert2 for contact form validation
import swal from 'sweetalert2';

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$('#contact-form')
  // field element is invalid
   .on("invalid.zf.abide", function(ev,elem) {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
      })
   })

   // form validation passed, form will submit if submit event not returned false
   .on("formvalid.zf.abide", function(ev,frm) {
      const form = $(this)

      $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function(data) {
          let result = data
          let response = JSON.parse(result)
          console.log(response)
          swal(
            response.message,
            'Thank you, ' + response.name + ' for your reservation.',
            'success'
          )
        }
      })

   })
   // to prevent form from submitting upon successful validation
   .on("submit", function(ev) {
     ev.preventDefault();
     console.log("Submit for form id "+ev.target.id+" intercepted");
   });
