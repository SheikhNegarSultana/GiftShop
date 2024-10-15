// If using class --> querySelectorAll()

// Problem : 1
// Not Work :     document.querySelectorAll('.Confirm')
//                        .addEventListener( 'click' , function(){
//                             alert( 'You clicked the button!' );
//                                   })
//            It Will Not Work For "CLASS"

// Solve :

document.querySelectorAll('.Confirm')
        .forEach( function (button) {
            button.addEventListener( 'click' , function(){
                alert('Done')
                
                })
        } )