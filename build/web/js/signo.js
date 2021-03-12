

const formsigno = document.getElementById('formSigno');
const card = document.querySelector('.card');
card.style.display='none';
formsigno.addEventListener('submit', (e) => {
    e.preventDefault();
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("post","./ServletGetHoroscope");
    var formData = new FormData(formsigno); 
    const data = new URLSearchParams();

    for (const pair of formData) 
        data.append(pair[0], pair[1]);

    httpRequest.send(data); 
    httpRequest.onreadystatechange = function () 
    {
        if (httpRequest.readyState === 4 && httpRequest.status === 200)
        {
            var teste = httpRequest.responseText;
            var obj = JSON.parse(teste);
            console.log(obj);

            card.style.display='block';
            card.querySelector('.img').src = obj.imagem;
            card.querySelector('.card-title').innerHTML = obj.signo;
            card.querySelector('.card-text').innerHTML = obj.previsao;
        }
    };
});
