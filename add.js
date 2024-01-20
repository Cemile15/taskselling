let form = document.querySelector("form");
let name = document.querySelector("#name");
let image = document.querySelector("#img");
let cat = document.querySelector("#cat");
let file = document.querySelector("input[type=file]");
let table = document.querySelector("table");


fetch("http://localhost:3000/selling")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `

        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.category}</td>
        
        <td>
        <button onclick="deleteEl(${element.id})">Delete</button>
        </td>

    </tr>
        `
        });
    })

    file.addEventListener("input",(e)=>{
        let file=e.target.files[0];
        if(file){
            let reader=new FileReader;
            reader.readAsDataURL(file);
            reader.onload=()=>{
                image.scr=reader.result
            }
        }
    })



    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        if(name.value && cat.value){
            let obj={};
            let reader=new FileReader();
            let scr=file.files[0];
            reader.onload=(e)=>{
                obj={
                    image: e.target.result,
                    name:name.value,
                    cat:cat.value
                }
                axios.post("http://localhost:3000/selling",obj)
                .then(res=>{
                    window.location="./index.html"
                })
            }
            reader.readAsDataURL(scr);
        }
        else{
            alert("Butun xanalari doldurun")
        }
    })


    

    //delete

    function deleteEl (id){
        axios.delete("http://localhost:3000/selling/"+id)
        .then (res=>window.location.reload())
    }