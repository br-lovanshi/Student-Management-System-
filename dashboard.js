

function append() {
    let userData = JSON.parse(localStorage.getItem("studentInfo"));
    console.log(userData)
    // display(userData);

    // function display(userData){
        userData.forEach(function (el, ind) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td")
        let imdg = document.createElement("img")
        imdg.src = el.img;
        td1.append(imdg);
        let td2 = document.createElement("td")
        td2.innerText = el.name
        let td3 = document.createElement("td");
        td3.innerText = el.course
        let td4 = document.createElement("td");
        td4.innerText = el.unit;
        let td5 = document.createElement("td");
        td5.innerText = el.batch;
        let td6 = document.createElement("td");
        td6.innerText = "remove";
        td6.style.color="red"
        td6.addEventListener("click", function () {
            dltfun(ind)
        });
        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr)

    });
}
// }
append()

function dltfun(ind) {
   
    let userData = JSON.parse(localStorage.getItem("studentInfo"));
    let newData = userData.filter(function(el,i){
        if(i ===ind){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i !== ind;
           
        } window.location.reload();
    })
    localStorage.setItem("studentInfo",JSON.stringify(newData))
  
}

function calculat(){
    let arr = JSON.parse(localStorage.getItem("studentInfo"));
    let obj = {};
    for(let i = 0;i<arr.length;i++){
        if(!obj[arr[i].batch]){
            obj[arr[i].batch] = 0;
        }
    }
    for(let i =0;i<arr.length;i++){
        obj[arr[i].batch]++;
    }
  let a =  document.querySelector("#batches");
   console.log(obj.key)
for(let key in obj){
    
    a.append(` ${key} - ${obj[key]}  |  `)
}
}
calculat() 
// window.location.reload()
