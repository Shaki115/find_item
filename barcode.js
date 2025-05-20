var brand = "";
var cartridge_type = "";
var cartridge_size = "";
var cartridge_model = "";
var searched_item = "";
let brand_sect = document.getElementById('brand_sect');
let brands_click = document.getElementById('brands_click');
let type_sect = document.getElementById('type_sect');
let size_sect = document.getElementById('size_sect');
let model_sect = document.getElementById('model_sect');
let selected_brand_show = document.getElementById('selected_brand');
let selected_type_show = document.getElementById('selected_type');
let selected_size_show = document.getElementById('selected_size');
let selected_model_show = document.getElementById('selected_model');
let opacityForWindows = document.getElementById("opacityForWindows");
let clear_btn = document.getElementById("clear_btn");

window.onload = function () {

    frappe.call({
        method: "find_item.templates.pages.barcode.get_datas",
        callback: function(r) {
            if (r.message) {
                contentList(r.message);
            }
        }
    });

}

function searchBrand() {
    var input, filter, section, div, i, txtValue, noMatch;
    input = document.getElementById("search_brand");
    filter = input.value.toUpperCase();
    section = document.getElementById("brand_list");
    div = section.getElementsByClassName("select_list");

    noMatch = true; 
    allHidden = true;

    for (i = 0; i < div.length; i++) {
        txtValue = div[i].textContent || div[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
            noMatch = false;
        } else {
            div[i].style.display = "none";
        }
    }
    
    let noResultsMessage = document.getElementById("noResultsMessageBrand");
    if (noMatch) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
}

function searchType() {
    var input, filter, section, div, i, txtValue, noMatch;
    input = document.getElementById("search_type");
    filter = input.value.toUpperCase();
    section = document.getElementById("type_list");
    div = section.getElementsByClassName("select_list");

    noMatch = true;

    for (i = 0; i < div.length; i++) {
        txtValue = div[i].textContent || div[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
            noMatch = false;
        } else {
            div[i].style.display = "none";
        }
    }
    
    let noResultsMessage = document.getElementById("noResultsMessageType");
    if (noMatch) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
}

function searchSize() {
    var input, filter, section, div, i, txtValue, noMatch;
    input = document.getElementById("search_size");
    filter = input.value.toUpperCase();
    section = document.getElementById("size_list");
    div = section.getElementsByClassName("select_list");

    noMatch = true;

    for (i = 0; i < div.length; i++) {
        txtValue = div[i].textContent || div[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
            noMatch = false;
        } else {
            div[i].style.display = "none";
        }
    }
    
    let noResultsMessage = document.getElementById("noResultsMessageSize");
    if (noMatch) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
}

function searchModel() {
    var input, filter, section, div, i, txtValue, noMatch;
    input = document.getElementById("search_model");
    filter = input.value.toUpperCase();
    section = document.getElementById("model_list");
    div = section.getElementsByClassName("select_list");

    noMatch = true; 

    for (i = 0; i < div.length; i++) {
        txtValue = div[i].textContent || div[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
            noMatch = false;
        } else {
            div[i].style.display = "none";
        }
    }
    
    let noResultsMessage = document.getElementById("noResultsMessageModel");
    if (noMatch) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
}

function showBrandSect(){
    opacityForWindows.style.display= "flex";
    brand_sect.style.display = "flex";
    clear_btn.style.display = "none";
}

function showTypeSect(){
    opacityForWindows.style.display= "flex";
    type_sect.style.display = "flex";
    clear_btn.style.display = "none";
}

function showSizeSect(){
    opacityForWindows.style.display= "flex";
    size_sect.style.display = "flex";
    clear_btn.style.display = "none";
}

function showModelSect(){
    opacityForWindows.style.display= "flex";
    model_sect.style.display = "flex";
    clear_btn.style.display = "none";
}

function closeOpacityWindows(){
	opacityForWindows.style.display= "none";
    brand_sect.style.display = "none";
    type_sect.style.display = "none";
    size_sect.style.display = "none";
    model_sect.style.display = "none";
    let searchbars = document.querySelectorAll('.search');
    for(let searchbar of searchbars){
        searchbar.value = "";
    }
    clear_btn.style.display = "flex";
}

function selectBrand(input,id){
    clearAll();
    let brand_html = input.innerHTML;
    selected_brand_show.innerHTML = `${brand_html}`;
    selected_brand_show.style.display = "flex";
    brand_sect.style.display = "none";
    opacityForWindows.style.display= "none";
    brands_click.style.backgroundColor = "palegreen";
    clear_btn.style.display = "flex";
    
    brand = id;
    findItem();
}

function selectType(input,id){
    let type = input.innerHTML;
    selected_type_show.innerHTML = `${type}`;
    selected_type_show.style.display = "flex";
    type_sect.style.display = "none";
    opacityForWindows.style.display= "none";
    types_click.style.backgroundColor = "palegreen";
    clear_btn.style.display = "flex";
    
    selected_size_show.style.display = "none";
    selected_model_show.style.display = "none";
    document.getElementById("sizes_click").style.backgroundColor = "var(--bg-color)";
    document.getElementById("models_click").style.backgroundColor = "var(--bg-color)";
    cartridge_size = "";
    cartridge_model = "";

    cartridge_type = id;
    findItem();
}

function selectSize(input,id){
    let size = input.innerHTML;
    selected_size_show.innerHTML = `${size}`;
    selected_size_show.style.display = "flex";
    size_sect.style.display = "none";
    opacityForWindows.style.display= "none";
    sizes_click.style.backgroundColor = "palegreen";
    clear_btn.style.display = "flex";
    
    selected_model_show.style.display = "none";
    document.getElementById("models_click").style.backgroundColor = "var(--bg-color)";
    cartridge_model = "";

    cartridge_size = id;
    findItem();
}

function selectModel(input,id){
    let model = input.innerHTML;
    selected_model_show.innerHTML = `${model}`;
    selected_model_show.style.display = "flex";
    model_sect.style.display = "none";
    opacityForWindows.style.display= "none";
    models_click.style.backgroundColor = "palegreen";
    clear_btn.style.display = "flex";

    cartridge_model = id;
    findItem();
}

function clearAll(){
    let selected = document.querySelectorAll(".selected");
    for(let element of selected){
        element.innerHTML = "";
        element.style.display = "none";
    }

    brand = "";
    cartridge_type = "";
    cartridge_size = "";
    cartridge_model = "";
    document.getElementById("brands_click").style.backgroundColor = "var(--bg-color)";
    document.getElementById("types_click").style.backgroundColor = "var(--bg-color)";
    document.getElementById("sizes_click").style.backgroundColor = "var(--bg-color)";
    document.getElementById("models_click").style.backgroundColor = "var(--bg-color)";

    document.getElementById("item_barcode").innerHTML = "";
    document.getElementById("item_id").innerHTML = "";
    document.getElementById("item_thumbnail").innerHTML = "";

    document.getElementById("barcode_sect").style.display = "none";
    document.querySelectorAll(".sections").forEach(function(section) {
        section.style.height = "50vh";
    });
}

function findItem(){
    frappe.call({
        method: "find_item.templates.pages.barcode.find_item",
        args: {
            brand: brand,
            cartridge_type: cartridge_type,
            cartridge_size: cartridge_size,
            cartridge_model: cartridge_model
        },
        callback: function(r) {
            if (r.message) {
                searched_item = r.message;
                showItem(searched_item);
            }else{
                document.getElementById("item_barcode").innerHTML = "";
                document.getElementById("barcode_sect").style.display = "none";
                document.querySelectorAll(".sections").forEach(function(section) {
                    section.style.height = "50vh";
                });
            }
        }
    });
}

function showItem(item){
    if(item.attach_thumbnail1){
        document.getElementById("item_thumbnail").src = item.attach_thumbnail1;
        document.getElementById("item_thumbnail").style.display = "block";
    }else{
        document.getElementById("item_thumbnail").src = "";
        document.getElementById("item_thumbnail").style.display = "none";
    }
    document.getElementById("item_id").innerText = item.identification;
    document.getElementById("item_id").style.display = "block";
    document.getElementById("item_barcode").innerHTML = searched_item.barcode_reference;
    document.getElementById("barcode_sect").style.display = "flex";
    document.querySelectorAll(".sections").forEach(function(section) {
        section.style.height = "42vh";
    });
}

function contentList(data){
    let brands = data.brands;
    let types = data.types;
    let sizes = data.sizes;
    let models = data.models;

    for (let brand of brands) {
        document.getElementById("brand_list").innerHTML += `<div class="select_list" onclick="selectBrand(this,'${brand.identification}')">${brand.identification}</div>`;
    }
    for (let type of types) {
        document.getElementById("type_list").innerHTML += `<div class="select_list" onclick="selectType(this,'${type.identification}')">${type.description}</div>`;
    }
    for (let size of sizes) {
        document.getElementById("size_list").innerHTML += `<div class="select_list" onclick="selectSize(this,'${size.identification}')">${size.description}</div>`;
    }
    for (let model of models) {
        document.getElementById("model_list").innerHTML += `<div class="select_list" onclick="selectModel(this,'${model.identification}')">${model.description}</div>`;
    }
}















