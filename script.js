//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.onclick=function(){
	const promiseall=images.map((img)=>{
		return new Promise((res,rej)=>{
		setTimeout((res,rej)=>{
			res(images.url);
			rej(`Failed to load image's URL: ${image.url}`)
		})
	})
	})
		
}

Promise.all((promiseall)=>{
	output.innerHTML=``
	promiseall.forEach((img)=>{
		output.innetHTML+=`
		<img src="img.url">
		`
	})
}).catch(error)=>{
	console.error(error);
};

