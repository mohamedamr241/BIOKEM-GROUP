const goTo=(button)=>{
    if(button=="Soap mani"){
        window.location.href="soapManiDetails.html";
    }
    else if(button.innerText =="Our Products"){
        window.location.href="categories.html";
    }
    else if(button.innerText =="About us"){
        window.location.href="about.html";
    }
    else if(button.getAttribute("name") =="Kitchen and Dish Washer Products"){
        window.location.href="Kitchen and Dish Washer Products subgroups.html";
    }
    else if(button.getAttribute("name") =="Textile and Fabric Care"){
        window.location.href="Textile and Fabric Care Subgroups.html";
    }
    else if(button.getAttribute("name") =="Air care"){
        window.location.href="House Keeping - Air Care/AirCare_products.html";
    }
    else if(button.getAttribute("name") == "Neutralizers, softeners and finishing"){
        window.location.href="Textile and fabric care - Neutralizers, softeners and finishing/Neutralizers_softeners_finishing_products.html";
    }
    else if(button.getAttribute("name") == "Bleaches"){
        window.location.href="Textile and fabric care - Bleaches/Bleaches_products.html";
    }
    else if(button.getAttribute("name") == "Alkaline & Detergent"){
        window.location.href="Textile and fabric care - Alkaline and detergent/Alkaline&Detergent_products.html";
    }
    else if(button.getAttribute("name") == "Spots Remover"){
        window.location.href="Textile and fabric care - Spots Removers/SpotsRemovers_Products.html";
    }
    else if(button.getAttribute("name") == "Liquid System"){
        window.location.href="Textile and fabric care - Liquid system/LiquidSystemDetails.html";
    }
    else if(button.getAttribute("name") == "Hygiene"){
        window.location.href="Kitchen and Dish Washer - Hygiene/Hygiene_products.html";
    }
    else if(button.getAttribute("name") == "Kitchen"){
        window.location.href="Kitchen and Dish Washer - Kitchen/Kitchen_Products.html";
    }
    else if(button.getAttribute("name") == "Dish Washer"){
        window.location.href="Kitchen and Dish Washer - DishWasher/DishWasher_products.html";
    }
    // winner
    else if(button.getAttribute("name") =="House keeping"){
        window.location.href="House Keeping subGroups.html";
    }
    else if(button.getAttribute("name") =="Room Care"){
        window.location.href="Room Care.html";
    }
    else if(button.getAttribute("name") =="Personal Care"){
        window.location.href="Personal Care.html";
    }
    else if(button.getAttribute("name") =="Floor Care"){
        window.location.href="Floor Care.html";
    }
    else if(button=="Flowerto"){
        window.location.href="FlowertoDetails.html";
    }
    else if(button.getAttribute("name") =="Polishing"){
        window.location.href="Polishing.html";
    }
    
    else if(button.childNodes[1].innerText =="Contact Us"){
        window.location.href="contact.html";
    }
    
}