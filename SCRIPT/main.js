var CLUSTER = document.getElementsByClassName('CLUSTER')[0];


var numberOBJ = ARRAY.length;
console.log('Объектов всего:', numberOBJ);


var n = 0;

while (n < numberOBJ) {
    if (ARRAY[n].NAME){ // не выводить пустые эл.
        CLUSTER.innerHTML += `
            <div class="CARD">
                <div class="ICON" style="background-image: url(IMG/${ARRAY[n].ICON})"></div>
                <div class="NAME">${ARRAY[n].NAME}</div>
                <div class="BUTTONS">
                    <a class="LOAD" download href="EXE/${ARRAY[n].EXE}.7z" title="Скачать с нашего сайта">Скачать</a>
                    <a class="URL" href="${ARRAY[n].URL}" title="Перейти на официальный сайт">↑</a>
                    <!--<object type="image/svg+xml" width="30px" height="30px" data="IMG/ICON/open_in_new.svg" id="object" class="icon"></object>-->
                </div>
            </div>
        `;
    };
    n++;
};


console.log('Кол-во завершённых итераций:', n);