const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCMdOvEOcnhsCq1mA_46lbWQ&part=snippet%2Cid&order=date&maxResults=5";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d0b1ad1229msh8d0ad272bbfc5b6p1a73f1jsnae09f0f8b732",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items
      .map(
        (video) => `
    <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `
      )
      .slice(0, 1)
      .join("")}
        `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();


//Playground

// export async function runCode(url) {
//     try {
//      new URL(url);
//      const response = await fetch(url);
//      return response.json();
//     } catch(error) {
//       if (error.message === "Failed to construct 'URL': Invalid URL"){
//         throw new Error('Invalid URL');
//       } else {
//         throw new Error('Something was wrong');
//       }
//     }
//   }
