class style{
    toast( text , duration , gravity , stopOnFocus , bgOne , bgTwo){
        Toastify({
            text: text,
            duration: duration,
            destination: "",
            newWindow: true,
            close: true,
            gravity: gravity, // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, "+bgOne+", "+bgTwo+")",
            },
            onClick: function () {} // Callback after click
        }).showToast();
    }
    
}

var styleToast = new style();

    // Alpine js function 
    function wizard() {
        // return data 
        return {
            // step
            step: 1,
            // username and password
            username: '',
            password: '',
            // next step
            nextStep() {
                // if step 1 and username is empty
                if (this.step === 1 && this.username === '') {
                    // return toastify
                    return styleToast.toast("Please enter Any Word ", 3000, "top", true, "#00b09b", "#96c93d");
                    
                }
                // if step 2 and password is empty
                 else if (this.step === 2 && this.password === '') {
                    // return toastify
                 return styleToast.toast("Please enter Any Word ", 3000, "top", true, "#00b09b", "#96c93d");

                }
                this.step++
            },
            // previous step
            previousStep() {
                this.step--
            }
        }
    }

        
    // Alpine js function 
    function wizardKr() {
        // return data 
        return {
            // step
            step: 1,
            // username and password
            username: '',
            password: '',
            // next step
            nextStep() {
                // if step 1 and username is empty
                if (this.step === 1 && this.username === '') {
                    // return toastify
                    return styleToast.toast("تکایە هەر ناوێک دابنێ", 3000, "top", true, "#00b09b", "#96c93d");
                }
                // if step 2 and password is empty
                 else if (this.step === 2 && this.password === '') {
                    // return toastify
                    return styleToast.toast("تکایە هەر ناوێک دابنێ", 3000, "top", true, "#00b09b", "#96c93d");
                }
                this.step++
            },
            // previous step
            previousStep() {
                this.step--
            }
        }
    }
