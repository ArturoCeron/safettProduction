function userSectionCancel(){

}

function userSectionNext(){
    let userSection = document.getElementById("companyUserSection");
    let infoSection = document.getElementById("companyInfoSection");
    userSection.classList.add("sectionHidden");
    infoSection.classList.remove("sectionHidden");
}

function infoSectionBack(){
    let userSection = document.getElementById("companyUserSection");
    let infoSection = document.getElementById("companyInfoSection");
    userSection.classList.remove("sectionHidden");
    infoSection.classList.add("sectionHidden");
}

function infoSectionNext(){
    let infoSection = document.getElementById("companyInfoSection");
    let branchSection = document.getElementById("branchInfoSection");
    infoSection.classList.add("sectionHidden");
    branchSection.classList.remove("sectionHidden");
}

function branchSectionBack(){
    let infoSection = document.getElementById("companyInfoSection");
    let branchSection = document.getElementById("branchInfoSection");
    infoSection.classList.remove("sectionHidden");
    branchSection.classList.add("sectionHidden");
}