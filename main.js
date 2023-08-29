const form = document.getElementById('Form');
const qrCode = document.getElementById('qr-code');
const formData = document.getElementById('formData');
const error = document.getElementById('error');
const wInput = document.getElementById('w');
const hInput = document.getElementById('h');


const generateQrCode = (url, w, h) =>{
    //Clean the wrapper
    qrCode.innerHTML = '';
    
    //Generate QrCode
    const qr = new QRCode(document.getElementById('qr-code'), {
        text: url,
        width: w,
        height: h
    })
}

const generateSubmit = (e)=>{
    e.preventDefault();
    const url = formData.value;
    console.log(url);

    //CHECK ON THE VALUES
    if(url.length <= 0){
        error.classList.remove('d-none')
    } else {
        error.classList.add('d-none');
        
        //Set QRCode sizes
        let w = 300;
        let h = 300;

        if(wInput.value.length > 0 && hInput.value.length > 0){
            w = wInput.value;
            h = hInput.value;
        }

        //Generate qr code
        generateQrCode(url, w, h);
    }
}


form.addEventListener('submit', generateSubmit);
