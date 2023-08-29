const form = document.getElementById('Form');
const qrCode = document.getElementById('qr-code');
const formData = document.getElementById('formData');
const error = document.getElementById('error')


const generateQrCode = (url) =>{
    //Clean the wrapper
    qrCode.innerHTML = '';
    
    //Generate QrCode
    const qr = new QRCode(document.getElementById('qr-code'), {
        text: url,
        width: 300,
        height: 300
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
        
        //Generate qr code
        generateQrCode(url);
    }
}


form.addEventListener('submit', generateSubmit);
