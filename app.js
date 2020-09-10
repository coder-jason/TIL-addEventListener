const userList = document.querySelectorAll(".laptop li");

for(user of userList){
	user.addEventListener('click', function(){
		this.style.color = "red";
	});
};

