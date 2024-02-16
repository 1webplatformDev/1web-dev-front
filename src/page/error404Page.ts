export function error404Page(){
    const div = document.createElement("div");
    div.style.color = "red";
    div.innerText = "Страница не найдена";
    document.body.appendChild(div);
}