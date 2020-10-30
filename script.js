var blogs = [
    {
        "title": "Jaipur",
        "detail": `Jaipur, the capital of the North Indian State of Rajasthan, is named after its founder Maharaja Jai Singh II (1693-1743). The city is surrounded by hills and dotted with forts. Houses with pink latticed windows line the streets, and look almost magical at sunset. An extremely well planned city, Jaipur was designed by an engineer and scholar Vidyadhar Bhattacharya, in accordance with ancient Hindu treatise on architecture, the Shilpa Shasta (Vastu).
        It was planned in a grid system with wide straight avenues, roads, streets and lanes and uniform rows of shops on either side of the main roads. Jaipur remains the only place where the nine sectors that sub-divide the city symbolise the nine divisions of the universe. Jaipur is surrounded by a wall having seven gates and was built for protection from invading armies and wild animals that lurked just outside in the jungles that surrounded the city.
        The Old City, also known as the Pink City, is a wonderful place to wander around. The whole city was painted pink by Maharaja Man Singh II when Prince of Wales, later Edward VII, visited Jaipur in 1876. Today, every home within the city is obliged by law to maintain this facade - hence Jaipur's is also called the Pink City.
        The arts and crafts of the state are amazing. You'll find elaborately fashioned jewellery, the multi-coloured 'bandhini' fabrics, richly decorated handlooms, and other trinkets at the colourful bazaars of Jaipur. These bazaars are a lot of fun not just for what's available, but also for the cheerful people in their traditional costumes.
        Important places to visit in Jaipur include the Amber Fort, the City Palace and Museum, Jantar Mantar, Hawa Mahal and the Albert Hall Museum.`,
        "image": "./images/Jaipur.jpg",
    
    },
    {
        "title": "Leh Ladakh",
        "detail": "Ladakh is located in the western Himalayan disputed region of Jammu and Kashmir in far northern India. Ladakh is bordered by Tibet to the east, Pakistan to the west, Xinjiang, China to the north and  Himachal Pradesh to the south. Ladakh often referred to as “Little Tibet” is a stunning area with a very unique and preserved culture. It is one of my favorite regions of the Himalaya. It is filled with amazing Himalaya mountain views, stunning alpine lakes, amazing treks and some of the friendliest people I have ever met! Not many travelers make it to this remote area. From 2011 to 2013, Ladakh averaged only about 38,000 foreign travelers per year with another 140,000 Indian tourists per year. Ladakh is divided into 2 districts: Kargil and Leh. Kargil lies in the western section and is predominantly Muslim (with the exception of Zanskar), while Leh lies in the eastern section and is predominantly Buddhist. Ladakh was an independent kingdom for 900 years. To this day, Leh still looks and feels more like Tibet than India. Many dozens of Tibetan Buddhist monasteries are found across Leh and Zanskar. The town of Leh was once the capital of the Kingdom of Ladakh and now serves as the administrative seat of Ladakh.",
        "image": "./images/Ladakh.jpg",
        
    },
    {
        "title": "Sikkim",
        "detail": "Sikkim is a landlocked Indian statelocated in the Himalayan mountains. The state is bordered by Nepal to the west, China's Tibet Autonomous Regionto the north and east, and Bhutan to the east. The Indian state of West Bengal lies to the south. Assembly of Sikkim abolished monarchy and resolved to be a constituent unit of India. A referendum was held on these issues and majority of the voters voted yes. On May 15, 1975 the President of India ratified a constitutional amendment that made Sikkim the 22nd state of India. According to legend, the Buddhist guru Padmasambhava visited Sikkim in the 8th century AD, introduced Buddhism and foretold the era of the Sikkimese monarchy. Sikkim's Namgyal dynasty was established in 1642. Over the next 150 years, the kingdom witnessed frequent raids and territorial losses to Nepalese invaders. In the 19th century, it allied itself with British India, eventually becoming a British protectorate.",
        "image": "./images/Sikkim.jpg",
        
    }
];


var createBlog = function (title, detail, image) {
    var div = document.createElement("div");
    var titleElem = document.createElement("h2");
    var detailElem = document.createElement("p");
    var img = document.createElement("img");
    
    var clear = document.createElement("hr");
    titleElem.innerText = title;
    detailElem.innerText = detail;
    
    img.src = image;
    img.style.float = "left";
    img.style.width = "360px";
    img.style.height = "360px";
    img.classList.add("img-responsive");
    clear.style.clear = "both";
    div.appendChild(img);
    div.appendChild(titleElem);
    
    div.appendChild(detailElem);
    div.appendChild(clear);
    return div;
}

var addToDOM = function (parent, child) {
    parent.appendChild(child);
}

var load_blogs = function () {
    var blog_space = document.getElementById("blog-post");
    for (blog of blogs) {
        var elem = createBlog(blog.title, blog.detail, blog.image);
        addToDOM(blog_space, elem);
    }
    return;
}
var checkAll = function(){
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    var file = document.getElementById("file").value;

    var success = true;
    if(title==""){
        if(document.getElementById("title-error").classList.contains("d-none")){
            document.getElementById("title-error").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("title-error").classList.contains("d-none")){
            document.getElementById("title-error").classList.toggle("d-none");
        }
    }
    if(detail==""){
        if(document.getElementById("detail-error").classList.contains("d-none")){
            document.getElementById("detail-error").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("detail-error").classList.contains("d-none")){
            document.getElementById("detail-error").classList.toggle("d-none");
        }
    }
    if(file==""){
        if(document.getElementById("file-error").classList.contains("d-none")){
            document.getElementById("file-error").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("file-error").classList.contains("d-none")){
            document.getElementById("file-error").classList.toggle("d-none");
        }
    }
    
    if(success){
        
        var file = document.getElementById("file").files[0];
        var reader = new FileReader();
        var filename = "";
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            filename = e.target.result;
            var blog = createBlog(title,detail,filename);
            var blog_space = document.getElementById("blog-post");
            blog_space.removeChild(blog_space.children[0]);
            blog_space.appendChild(blog);
            document.getElementById("post").disabled = false;
            window.scroll(0,1000000);
        }  
        
    }

    return false;
}
var cancelAction = function(){
    var blog_space = document.getElementById("blog-post");
        blog_space.removeChild(blog_space.children[0]);
        document.getElementById("post").disabled = false;
}



var post_new = function(btn){
    btn.disabled = true;
    window.scroll(0,0);
    var blog_space = document.getElementById("blog-post");
    var new_blog = document.createElement("form");
    new_blog.setAttribute("action","javascript:void(0)");
    var div1 = document.createElement("div");
    div1.classList.add("form-group");
    var label1 = document.createElement("label");
    label1.innerText = "Subject: ";
    label1.setAttribute("for","title");
    
    var title_input = document.createElement("input");
    title_input.classList.add("form-control");
    title_input.setAttribute("id","title");
    title_input.type = "text";
    var title_error = document.createElement("small");
    title_error.id = "title-error";
    title_error.innerText = "Your title is blank!! Please type something...";
    title_error.classList.add("text-danger");
    title_error.classList.add("d-none");

    var div2 = document.createElement("div");
    div2.classList.add("form-group");
    var label2 = document.createElement("label");
    label2.innerText = "Content: ";
    label2.setAttribute("for","detail");

    var input1 = document.createElement("textarea");
    input1.classList.add("form-control");
    input1.rows = "3";
    input1.setAttribute("id","detail");

    var detail_error = document.createElement("small");
    detail_error.id = "detail-error";
    detail_error.innerText = "Your textarea is blank!! Please type something...";
    detail_error.classList.add("text-danger");
    detail_error.classList.add("d-none");

    var div3 = document.createElement("div");
    div3.classList.add("form-group");
    var label3 = document.createElement("label");
    label3.innerText = "Image File: ";
    label3.setAttribute("for","detail");

    var input2 = document.createElement("input");
    input2.type = "file";
    input2.classList.add("form-control");
    input2.accept = ".jpg, .jpeg, .png";
    input2.setAttribute("id","file");

    

    var file_error = document.createElement("small");
    file_error.id = "file-error";
    file_error.innerText = "You need one image for posting image";
    file_error.classList.add("text-danger");
    file_error.classList.add("d-none");
    
    var file_help = document.createElement("small");
    file_help.id = "file-help";
    file_help.innerText = "Supports only .png, .jpg, .jepg formats";
    file_help.classList.add("text-muted");
    // file_help.classList.add("d-none");

    var div4 = document.createElement("div");
    div4.classList.add("form-group");
    var input3 = document.createElement("button");
    var input4 = document.createElement("button");
    input3.classList.add("btn");
    input3.classList.add("btn-primary");
    input3.innerText = "Post Blog";
    input3.addEventListener("click",checkAll);
    input4.classList.add("btn");
    input4.classList.add("btn-danger");
    input4.innerText = "Cancel";
    input4.addEventListener("click",cancelAction);
    input4.style.marginLeft = "5px";

    div1.appendChild(label1);
    div1.appendChild(title_input);
    div1.appendChild(title_error);
    div2.appendChild(label2);
    div2.appendChild(input1);
    div2.appendChild(detail_error);
    div3.appendChild(label3);
    div3.appendChild(input2);
    div3.appendChild(file_help);
    div3.appendChild(file_error);
    div4.appendChild(input3);
    div4.appendChild(input4);
    new_blog.appendChild(div1);
    new_blog.appendChild(div2);
    new_blog.appendChild(div3);
    new_blog.appendChild(div4);
    blog_space.insertBefore(new_blog,blog_space.children[0]);
}

var verifyForm = function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    var regx = /^.+@.+$/g;
    var success = true;
    if(name==""){
        if(document.getElementById("nameHelp").classList.contains("d-none")){
            document.getElementById("nameHelp").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("nameHelp").classList.contains("d-none")){
            document.getElementById("nameHelp").classList.toggle("d-none");
        }
    }
    if(feedback==""){
        if(document.getElementById("feedbackHelp").classList.contains("d-none")){
            document.getElementById("feedbackHelp").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("feedbackHelp").classList.contains("d-none")){
            document.getElementById("feedbackHelp").classList.toggle("d-none");
        }
    }
    if(email=="" || !regx.test(email)){
        if(document.getElementById("emailHelp").classList.contains("d-none")){
            document.getElementById("emailHelp").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("emailHelp").classList.contains("d-none")){
            document.getElementById("emailHelp").classList.toggle("d-none");
        }
    }
    if(!success){
        if(document.getElementById("failure").classList.contains("d-none")){
            document.getElementById("failure").classList.toggle("d-none");
        }
        if(!document.getElementById("success").classList.contains("d-none")){
            document.getElementById("success").classList.toggle("d-none");
        }
    }else{
        if(!document.getElementById("failure").classList.contains("d-none")){
            document.getElementById("failure").classList.toggle("d-none");
        }
        if(document.getElementById("success").classList.contains("d-none")){
            document.getElementById("success").classList.toggle("d-none");
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("feedback").value="";
        }
    }
}