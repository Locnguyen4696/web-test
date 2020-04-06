var request = new XMLHttpRequest(); 
		request.open('GET', 'https://5e85b87c44467600161c669f.mockapi.io/api/teachers?fbclid=IwAR1D5EWSeL7L8CPQZNAa9xaqVsmjOVMlVRlgms3ySIcB7z6fI-dfmuUHBiQ', true); 
		request.onload = function () {
			var data = JSON.parse(this.response);
			for(i=0;i<data.length;i++){
				let count=data[i].nbCourses;
				let des=data[i].description;
				let name=data[i].name;
				let img=data[i].avatar
				if (data[i].online==false){
					var online="red";
				}else{
					var online="#00FF00";
				}
				$($('.item__records span')[i]).text(count)
				$($('.item__descriptions')[i]).text(des)
				$($('.item__name span')[i]).text(name)
				$($('.item__img')[i]).attr("src",img)
				$($('.item__status--online')[i]).css("background-color",online)

			}
		};
		request.send();	