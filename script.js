









fetch('https://toc.qidianunderground.org/api/v1/pages/public'
)
.then(function (response) {
return response.json()
})
.then(function (data) {
appendData(data)
})
.catch(function (err) {
console.log(err)
});

function appendData(data) {
var mainContainer = document.getElementById("main");
for (var i = 0; i < data.length; i++) {

var article =   document.createElement("ARTICLE");
article.classList.add("thumb");
article.innerHTML = '<a href=" '+  data[i].ID + ' " class="image" ><img src="images/only.jpg" alt="" /></a> <h2>' + data[i].Name + '</h2> <p>'+ '</p>';
mainContainer.appendChild(article);
}
}



