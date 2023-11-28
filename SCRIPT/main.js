var CLUSTER = document.getElementsByClassName('CLUSTER')[0];


var numberOBJ = ARRAY.length;
console.log('Объектов всего:', numberOBJ);


var n = 0;

while (n < numberOBJ) {
    if (ARRAY[n].NAME){ // не выводить пустые эл.
        CLUSTER.innerHTML += `
        <a class="URL" href="${ARRAY[n].URL}" title="Перейти на официальный сайт">            
            <div class="CARD">
                <div class="ICON" style="background-image: url(IMG/${ARRAY[n].ICON})"></div>
                <div class="NAME">${ARRAY[n].NAME}</div>
            </div>
        </a>
        `;
    };
    n++;
};


console.log('Кол-во завершённых итераций:', n);