let arr = JSON.parse(localStorage.getItem("studentInfo")) || [];
    function Stundetdata(img,name,course,unit,batch){
        this.img = img;
        this.name=name;
        this.course = course;
        this.unit = `unit ${unit}` ;
        this.batch = `ft-web${batch}`;
    }
    function mainfun(event){
        
        event.preventDefault();
        let form = document.getElementById("form")
        let a = form.img.value;
        let b = form.name.value;
        let c = form.course.value;
        let d = form.unit.value;
        let e =form.batch.value;
 let s1 = new Stundetdata(a,b,c,d,e);
  arr.push(s1);
    localStorage.setItem("studentInfo",JSON.stringify(arr));
    window.location.reload()
//    console.log(arr)
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
   