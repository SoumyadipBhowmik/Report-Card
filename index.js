var submit = document.getElementById('submit')
var reset = document.getElementById('reset')

var english = document.getElementById('english')
var maths = document.getElementById('maths')
var physics = document.getElementById('physics')
var geography = document.getElementById('geography')
var biology = document.getElementById('biology')
var computer = document.getElementById('computer')

var total = document.getElementById('total')
var grade = document.getElementById('grade')
var percentage = document.getElementById('percentage')
var result = document.getElementById('result')


submit.addEventListener('click', ()=>{

    //storing values in number form
    var eng = Number(english.value);
    var math = Number(maths.value)
    var phy = Number(physics.value)
    var geo = Number(geography.value)
    var bio = Number(biology.value)
    var comp = Number(computer.value)

    //getting total marks and percentage
    var totalResult = eng+math+phy+geo+bio+comp;
    var per = (totalResult / 6).toFixed(2);

    //storing extra variables
    var pass;
    var grader;

    //checking whether pass of fail
    if(eng < 35 || math < 35 || phy < 35 || geo < 35 || bio < 35 || comp < 35){
        pass = `FAIL`
    }
    else{
        pass = `PASS`
    }

    //checking grades based on percentages
    if(per <= 100 && per > 80){
        grader = `A+`
    }
    else if(per <= 80 && per > 70){
        grader = `A`
    }
    else if(per <= 70 && per > 60){
        grader = `B`
    }
    else if(per <= 60 && per > 40){
        grader = `C`
    }
    else if(per >= 35 && per < 40){
        grader = `D`
    }
    else if(per < 35 && per > 1){
        grader = `F`
    }
    else{
        grader = `N/A`
    }


    total.innerHTML = `Total: ${totalResult}`
    grade.innerHTML = `Grade: ${grader}`
    percentage.innerHTML = `Percentage: ${per}%`
    result.innerHTML = `Result: ${pass}`
})

reset.addEventListener('click', ()=>{
    total.innerHTML = `Total: `
    grade.innerHTML = `Grade: `
    percentage.innerHTML = `Percentage: `
    result.innerHTML = `Result: `
})