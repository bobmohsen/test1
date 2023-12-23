let spanStart = document.querySelector('.control-gem span')
let nemeSpan = document.querySelector('.name span')
let blocscontanr = document.querySelector('.mmre-gem-blok') // ده عنصر الاب 

let blce = Array.from(blocscontanr.children) // العنصر الاب هاتي الابن الي فيه وحطهم في مصفوفه 

// let reng = [ ...Array(blce.length).keys() ]  // علشان تفضيلك العدد في مصفوفه  keys.   ... علشان تجبلك عدد العناصر وتحطهم في مصفوفه 

let reng = Array.from(Array(blce.length).keys())  // نفس فكره الي فوق عرفت مصفوفه  وفضيت فيها عدد العناصر وحولتهم لي ارقام 

let trez = document.querySelector('.trez span') // ده الرقم الي بيعد عدد الغلطلت 

console.log(reng);

shafal(reng)


spanStart.onclick = function(){
let yorNam = prompt ('wats you Name')
// ده البكس الي هيطلع لو هو فاضي ومكتبش حاجه فيها اطبعلي الكلمه دي 
if(yorNam == null || yorNam== ''){
    nemeSpan .innerHTML= 'Nall yor name'
}else{// لو مش فاضي وكتب فيها خد الي كتبه واطبعه في الانبت 


nemeSpan.innerHTML=yorNam
}
// كتب او مكتبش شلي الون ده 
document.querySelector('.control-gem').remove()
///دي بضفبك الكلاس في الاب عاشان يظهرهم 
setTimeout(() => {
    blocscontanr.classList.add('start')
}, 300);

////دي بتشيل الكلاس من الاب علشان تخفيهم
setTimeout(() => {
    blocscontanr.classList.remove('start')
}, 3000);

//
// document.getElementById('auto-1').play()


}

// 



/// دي هتلف علي كلهم 

blce.forEach(function(n,i){ // n ده متفير بيجبلك العنصر نفسه   iدي متغير بيجبلك عدد العناصر 
    n.style.order =reng [i] //     دي بتلخبط ترتيبهم حطهالي علي عددهم كلهم orderدي العنصر نفسه nحطلي خصيه 
    // console.log(n);

    // دي لما ادوس علي العنصر اعملي 
    n.addEventListener('click',function(){

        felbblock(n)  // الفنكشن بتعت اضافت الكلاس شغلتها علي العنصر نفسه بحيث تطبق عليه 
        //

    })
})

// دي فنكشن بضيف الكلاس ده
function felbblock(select){
    select.classList.add('is-flbt')

    // عرفت تغير وبقله البلك الي هو العناصر اعملي فيلتر العناصر الي تحتوي علي الكلاس 

let alfeed = blce.filter(e => e.classList.contains('is-flbt'))// دي جواها فنكشن المختصره

// دي لو عدد البلوك اتنين اعملي 
if(alfeed.length === 2){


    // اتسب كلاك فنكشن يعني مقدرش ادوس تاني 
stobclek()

    // اتشك بلوك بتشوفهم هما التنين شب بعض ولا لا 
    shecbloc(alfeed[0],alfeed[1])
}
}


    // استوب كلاك فنكشن يعني مقدرش ادوس تاني 
function stobclek(){
    blocscontanr.classList.add('noclek')


    setTimeout(() => {
        blocscontanr.classList.remove('noclek')

    }, 1000);
}


    // اتشك بلوك بتشوفهم هما التنين شب بعض ولا لا 
 function shecbloc(frstblc,lastblc){

    //لو هما شبه بعض اعملي 
    if(frstblc.dataset.technology === lastblc.dataset.technology){  // dataset.technology دي الي عملها في الصفحه لكل صورتين رقم واحد 

        frstblc.classList.remove('is-flbt')// لو شبه بعض شلي الكلاس ده الي حططهم علي كلهم 
        lastblc.classList.remove('is-flbt')


frstblc.classList.add('has-mtsh')// وضفلي الكلاس ده رغم ده نفس خصاص الي شلته بس علشان يرجع تاني الصوره تلف 
lastblc.classList.add('has-mtsh')

document.getElementById('auto-1').play()

    }else{ // لو مش شبه بعض عدلي الغلطات بقي وشلي الكلاس 

        trez.innerHTML = parseInt(trez.innerHTML) + 1 // parseInt  دي فنكشن جاهزه بتخلي الرقم لو هو نص يبقا رقم وعلشان اشغلها كتبت جواها نفس الي جنبيها وهتجود واحد علي الرقم
    
    
    setTimeout(() => {
        frstblc.classList.remove('is-flbt')
    lastblc.classList.remove('is-flbt')
    }, 1000);


    document.getElementById('auto-2').play()

    }


 }


// function  shafal  دي بتخلي الارقام تجيلك بطريقه عشوايه 

function shafal(Array){

    let crntt = Array.length //

   let temp // دي القيمه الماقته الي هنحط فيها 
   let random ; // دي الرقم العشواي الي هنستخدمه 

    while(crntt > 0){ // دي فور لو المصفوفه اكبر من الصفر اعملي 

        random = Math.floor(Math.random() * crntt) // دي كده هتجبلي رقم عشواي في عدد المصفوفه
        crntt--  // دي هقلل ناصر المصفوفه واحد لحد م يوصل للصفر و الفور يوقف

        console.log(random);


        temp = Array[crntt]

        // 
        Array[crntt] = Array[random]


        //
        Array[random]=temp
    }


return Array


//  هنحفظ الرقم في المخزن
//
//
}

