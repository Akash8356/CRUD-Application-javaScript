


// Add update layout

// document.getElementById("updateLayout").classList.add("editdetailFormContainer");
// document.getElementById("detailLayout").classList.add("updateEmployeeDetailLayout");
// document.getElementById("updateformid").style.visibility = "visible";
// document.getElementById("tableHeading").style.paddingTop=0;






// remove update layout
document.getElementById("updateLayout").classList.remove("editdetailFormContainer");
document.getElementById("detailLayout").classList.remove("updateEmployeeDetailLayout");
document.getElementById("updateformid").style.visibility = "hidden";
document.getElementById("tableHeading").style.paddingTop = "10px";



employeeData = [
    { id: "1", firstName: "akash", lastName: "prajapati", age: 22, gender: "male" },
    { id: "2", firstName: "ajay", lastName: "prajapati", age: 22, gender: "male" },
    { id: "3", firstName: "rakesh", lastName: "prajapati", age: 22, gender: "male" },
    { id: "4", firstName: "raju", lastName: "prajapati", age: 22, gender: "male" },
    { id: "5", firstName: "bheem", lastName: "prajapati", age: 22, gender: "male" },
    { id: "6", firstName: "chutaki", lastName: "Dholakiya", age: 21, gender: "female" },
    { id: "7", firstName: "jaggu", lastName: "prajapati", age: 22, gender: "male" },
    { id: "8", firstName: "akash", lastName: "prajapati", age: 22, gender: "male" },
    { id: "9", firstName: "akash", lastName: "prajapati", age: 22, gender: "male" },
    { id: "10", firstName: "akash", lastName: "prajapati", age: 22, gender: "male" },
    { id: "11", firstName: "akash", lastName: "prajapati", age: 22, gender: "male" },
    { id: "12", firstName: "akash", lastName: "prajapati", age: 22, gender: "male" }


];
let deletedItem = [];
let tabledata = '';

// for(let i=0;i<employeeData.length;i++){
//     console.log(employeeData[i].id)

// }
// for(let i=0;i<employeeData.length;i++){

//     // console.log(employeeData[i].id)
//     // tabledata += 
//             tabledata += "<tr>"+"<td>" + employeeData[i].id + "</td>"
//             tabledata += "<td>" + employeeData[i].firstName + "</td>"
//             tabledata += "<td>" + employeeData[i].lastName + "</td>"
//             tabledata += "<td>" + employeeData[i].age + "</td>"
//             tabledata += "<td>" + employeeData[i].gender + "</td>"
//             tabledata += "<td>" + `<button type="button">edit</button> <button type="button" onclick='removeData(${employeeData[i].id})'>delete</button>` + "</td</tr>"
//             tabledata += "</tr>"

// document.getElementById('table_body').innerHTML=tabledata;

// }
// console.log(employeeData);
// let tabledata="";
// employeeData.map((values)=>{
//     tabledata+=`<tr>
//     <td >${values.id}</td>
//     <td >${values.firstName}</td>
//     <td >${values.lastName}</td>
//     <td >${values.age}</td>
//     <td >${values.gender}</td>

//     </tr>`
//     // <td ><span>Edit</span><span>Delete</span></td>

// document.getElementById('table_body').innerHTML=tabledata;

// });
// let tabledata = "";
// let objectArrayIndex = "";

// employeeData.map((values) => {

//     // onclick="getIndexOfRow(this)"
//     tabledata += `<tr >
//         <td>${values.id}</td>
//         <td>${values.firstName}</td>
//         <td>${values.lastName}</td>
//         <td>${values.age}</td>
//         <td>${values.gender}</td>
//         <td ><a class="button" href="javascript:void(0)"  onclic="getRowData(${values.id})">Edit</a><a class="button"href="javascript:void(0)" onclick="deleteData()">Delete</a></td>

//         </tr>`
//     // onclick="editeData(${values})"


//     // <td ><span>Edit</span><span>Delete</span></td>

//     document.getElementById('table_body').innerHTML = tabledata;
//     // document.getElementById('tableBody').getElementsByTagName('span').style.classList.add('tabledata')
//     // function getRowData(y){
//     //     console.log(y);
//     // }



// });

tabledata = ""
function displayTableData() {
    for (let i = 0; i < employeeData.length; i++) {
        // console.log(employeeData[i])
        tabledata += '<tr class="rowData">'
        tabledata += '<td class="data">' + employeeData[i].id + "</td>"
        tabledata += '<td class="data">' + employeeData[i].firstName + "</td>"
        tabledata += '<td class="data">' + employeeData[i].lastName + "</td>"
        tabledata += '<td class="data">' + employeeData[i].age + "</td>"
        tabledata += '<td class="data">' + employeeData[i].gender + "</td>"
        tabledata += '<td class="data">' + `<button type="button" class="editbutton" onclick='editData(${employeeData[i].id})'>edit</button> <button class="deletbutton" type="button" onclick='removeData(${employeeData[i].id})'>delete</button >` + "</td</tr>"
        // tabledata += "</tr>"


    }
    document.getElementById('table_body').innerHTML = tabledata;

}
// if(employeeData!=null){
displayTableData();
// }



//     // employeeData.map((values)=>{
//     //     tabledata += "<tr>"
//     //         tabledata += "<td>" + values.id + "</td>"
//     //         tabledata += "<td>" + values.firstName + "</td>"
//     //         tabledata += "<td>" + values.lastName + "</td>"
//     //         tabledata += "<td>" + values.age + "</td>"
//     //         tabledata += "<td>" + values.gender + "</td>"
//     //         // tabledata += "<td>" + `<button type="button">edit</button> <button type="button" onclick='removeData(${values.id})'>delete</button>` + "</td"
//     //         tabledata += "</tr>"


//     // })


//     document.getElementById('table_body').innerHTML = tabledata;
//     console.log(tabledata)
// }
// displayTableData();
// function removeData(remove) {
// console.log(remove);
// let filter = employeeData.filter((a, i) => {
//     if (remove == a.id) {
//         // employeeData.slice(I,1);
//         console.log(i)

//     }
// }
// );
// console.log(employeeData)
// }

// function getRowData(y) {

//     console.log(y.parseInt());

// }

// function getIndexOfRow(x) {
//     let edit = x;

// console.lo

//     return console.log(edit);
// }


// function getRowData(y){

//     console.log(y);

// }
// console.log(getRowData(1))

// function editeData(hi){
//     // h1.get
//     console.log(hi)
// }
// function deleteData(){
//     alert("wuw")
// }




function addData() {
    let fname = document.getElementById('addfname').value.trim();
    let lname = document.getElementById('addlname').value.trim();
    let age = document.getElementById('addage').value.trim();
    let gender = document.getElementById('addgender').value.trim();
    let empid = document.getElementById('addId').value.trim();
    // console.log(fname,lname,age,gender);
    validation(fname, lname, age, gender, empid);
}
function validation(fname, lname, age, gender, empid) {
    // if(fname==''){
    //     console.log(null);
    //     // return 1;

    // } 
    // if(fname.length<3){
    //     console.log("not a valid name");
    //     // return 1;
    // }
    // else if(includenumber(fname)){
    //     console.log("name include number");
    //     // return 1;

    // }
    // if (!includenumber(fname))
    // {
    //     console.log("valid name");
    //     // return 1;

    // }
    /////Name Validation only
    if (empid == "") {
        console.log("please enter id")
    } else
        if (fname == '') {
            console.log("Please Enter name");
            // return 1;

        } else if (fname.length < 3) {
            console.log("name length is invalid ");

        } else if (includeSpecialChar(fname)) {
            console.log("name include Special Char");


        } else if (includenumber(fname)) {
            console.log("name include number");

        } else
            if (lname == '') {
                console.log("Please Enter lname");
                // return 1;

            } else if (lname.length < 3) {
                console.log("lname length is invalid ");

            } else if (includeSpecialChar(lname)) {
                console.log("lname include Special Char");


            } else if (includenumber(lname)) {
                console.log("lname include number");

            } else if (age == '' || age == 0) {
                console.log("Please Enter your Edge");

            }
            else if ((age < 18 || age > 65)) {

                console.log("Not perfect for job");
            }
            else if (gender == "selectGender") {
                console.log("Please Chose Your Gender");

            } else if (idDiscarded(empid)) {
                console.log("this id has been discarded");



            }
            else {
                console.log("perfect User for job");
                registrationCHecks(fname, lname, age, gender, empid);

            }
}

function updateValidation(fname, lname, age, gender, empid) {
    if (fname == '') {
        console.log("Please Enter name");
        // return 1;

    } else if (fname.length < 3) {
        console.log("name length is invalid ");

    } else if (includeSpecialChar(fname)) {
        console.log("name include Special Char");


    } else if (includenumber(fname)) {
        console.log("name include number");

    } else if (lname == '') {
        console.log("Please Enter lname");
        // return 1;

    } else if (lname.length < 3) {
        console.log("lname length is invalid ");

    } else if (includeSpecialChar(lname)) {
        console.log("lname include Special Char");


    } else if (includenumber(lname)) {
        console.log("lname include number");

    } else if (age == '' || age == 0) {
        console.log("Please Enter your Edge");

    }
    else if ((age < 18 || age > 65)) {

        console.log("Not perfect for job");
    }
    else if (gender == "selectGender") {
        console.log("Please Chose Your Gender");

    }
    else {
        console.log("perfect User for job");
        updateCHecks(empid);
        // checkUpdateData(empid);

    }
}

function updateCHecks(empid) {
    if (idDiscarded(empid)) {
        console.log("This EMployee ID Discarded");
    } else if (Ridvalidation(empid)) {
        console.log("This EMployee ID Already Exist");

    }
    else {
        // ************************************** need to write code for instance update using for loop and id
        // employeeData.push({ id: empid, firstName: fname, lastName: lname, age: age, gender: gender });
        // tabledata = '';
        // displayTableData();
        // clearInputField();
        console.log("validation done", empid);
        checkUpdateData(empid);
        // checkUpdateData(empid);




    }


}
// function updatingData(fname, lname, age, gender, empid){



// }

// updateData(i){
//     document.getElementById('addId').value = employeeData[i].id;
//     document.getElementById('addfname').value = employeeData[i].firstName;
//     document.getElementById('addlname').value = employeeData[i].lastName;
//     document.getElementById('addage').value = employeeData[i].age;
//     document.getElementById('addgender').value = employeeData[i].gender;
//     document.getElementById('add').innerHTML = "Update";
// }

function removeData(rid) {
    // console.log(rid);
    // rid.filter();
    for (let i = 0; i < employeeData.length; i++) {
        if (rid == employeeData[i].id) {
            console.log(i);
            // employeeData.pop(i);
            // displayTableData();
            let filter = employeeData.filter((empdata, current) => {
                if (rid == empdata.id) {
                    employeeData.splice(current, 1);
                }

            });
        }
    }
    deletedItem.push(rid);
    // console.log("deleted Item",deletedItem)
    // console.log(employeeData);
    tabledata = '';
    displayTableData();
    // updateDataHideForm();

}
let update="";
function editData(rid) {
    // console.log(rid);
    // rid.filter();
    // id=deleteHide
    // deletbutton
    // document.getElementById()
    // document.getElementsByClassName("deletbutton").style.visibility = "hidden";
    // document.getElementsByClassName("deletbutton").style.visibility="hidden" ;



    update=rid;

    for (let i = 0; i < employeeData.length; i++) {
        if (rid == employeeData[i].id) {
            console.log(i);
            loadingForm(i);
            idupdate = i;

        }
    }
}
let idupdate = ""
function checkUpdateData(rid) {
    // console.log(rid);
    // rid.filter();
    // for (let i = 0; i < employeeData.length; i++) {
    //     if (rid == employeeData[i].id) {
    //         console.log(i);
    //         updateData(i);
    //     }
    // }
    console.log("id is  valid");
            updateData(idupdate);

}
function updateData(i) {
    let empid = document.getElementById('addId').value;
    let fname = document.getElementById('addfname').value;
    let lname = document.getElementById('addlname').value;
    let age = document.getElementById('addage').value;
    let gender = document.getElementById('addgender').value;
    let current = i;


    
    employeeData[i].id = empid;
    employeeData[i].firstName = fname;
    employeeData[i].lastName = lname;
    employeeData[i].age = age;
    employeeData[i].gender = gender;
    // console.log("aklndnidni ebi".empid, fname, lname, age, gender);
    clearInputField();
    tabledata = ''
    displayTableData();
    document.getElementById('add').innerHTML = "Add";





}
function loadingForm(i) {
    // document.getElementById("updateLayout").classList.add("editdetailFormContainer");
    // document.getElementById("detailLayout").classList.add("updateEmployeeDetailLayout");
    // document.getElementById("updateformid").style.visibility = "visible";
    // document.getElementById("tableHeading").style.paddingTop=0;
    document.getElementById('addId').value = employeeData[i].id;
    document.getElementById('addfname').value = employeeData[i].firstName;
    document.getElementById('addlname').value = employeeData[i].lastName;
    document.getElementById('addage').value = employeeData[i].age;
    document.getElementById('addgender').value = employeeData[i].gender;
    employeeData[i].id="";
    document.getElementById('add').innerHTML = "Update";
}
function checkevent() {
    let checkadd = document.getElementById('add').innerHTML;
    if (checkadd == "Add") {
        addData();

    } else {







        console.log("updata");
        let empid = document.getElementById('addId').value;
        let fname = document.getElementById('addfname').value;
        let lname = document.getElementById('addlname').value;
        let age = document.getElementById('addage').value;
        let gender = document.getElementById('addgender').value;

        updateValidation(fname, lname, age, gender, empid);









    }

}

function updateDataHideForm() {
    // for(let i=0;i<employeeData.length;i++){
    //   for(j=0;j<deletedItem.length;j++){
    //     if(employeeData[i].id==deletedItem[j]){

    //         console.log("DDeleted",employeeData[i],deletedItem[j]);
    //     }
    //   }

    // }

    if (idDiscarded) {
        console.log("this id has been discarded");
    } else {
        console.log("the data has been updated");

        document.getElementById("updateLayout").classList.remove("editdetailFormContainer");
        document.getElementById("detailLayout").classList.remove("updateEmployeeDetailLayout");
        document.getElementById("updateformid").style.visibility = "hidden";



    }




}
function registrationCHecks(fname, lname, age, gender, empid) {
    if (Ridvalidation(empid)) {
        console.log("This EMployee ID Already Exist");
    } else {
        employeeData.push({ id: empid, firstName: fname, lastName: lname, age: age, gender: gender });
        tabledata = '';
        displayTableData();
        clearInputField();

    }


}

function idDiscarded(empid) {

    for (let i = 0; i < deletedItem.length; i++) {
        if (empid == deletedItem[i]) {
            console.log(true);
            return 1;
        }


    }

    return 0;



}

function Ridvalidation(empid) {
    console.log("function")
    for (let i = 0; i < employeeData.length; i++) {
        if (empid == employeeData[i].id) {
            console.log("This EMployee ID Already Exist");
            return 1;
        }
    }
    console.log("This EMployee ID Available and added");
    return 0;

}
function clearInputField() {
    document.getElementById('addfname').value = "";
    document.getElementById('addlname').value = "";
    document.getElementById('addage').value = "";
    document.getElementById('addgender').value = "selectGender";
    document.getElementById('addId').value = "";
}


// if(includeSpecialChar(string)){
//     console.log("very bad")
// }
// if(!includeSpecialChar(string)){
//     // console.log("very bad")
//     console.log("very Good")

// }

function includeSpecialChar(string) {
    let data = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ':', ';', '"', '/', '?', '<', '>', ',', '.', '|']
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (string[i] == data[j]) {
                // console.log("bad char");
                return 1;
            }
        }
    }
    // console.log("Good Char");
    return 0;

}



function includenumber(fname) {
    for (let i = 0; i < fname.length; i++) {
        if (fname[i] == 0 || fname[i] == 1 || fname[i] == 2 || fname[i] == 3 || fname[i] == 4 || fname[i] == 5 || fname[i] == 6 || fname[i] == 7 || fname[i] == 8 || fname[i] == 9) {
            // console.log("include number")
            return 1;

        }

    }
    return 0;
}






