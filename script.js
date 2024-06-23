//your JS code here. If required.
const output = document.getElementById("output");


const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
let promiseall;
const btn = document.getElementById("download-images-button").addEventListener('click',function(){
	
	promiseall=images.map((img)=>{
		return new Promise((res,rej)=>{
			fetch(img.url)
			.then((res)=>res.blob())
			.then((blob)=>{
				let imgURL=URL.createObjectURL(blob);
				res(imgURL);
				
			})
			.catch(()=>rej(`Failed to load image's URL: ${img.url}`));
			
		
	});
	
});

Promise.all(promiseall).then((imgURLs)=>{
	output.innerHTML=``
	imgURLs.forEach((imgis)=>{
		output.innerHTML+=`<img src=${imgis}>`;
	});
}).catch((error)=>{
	console.error(error);
});
});


