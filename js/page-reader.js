import { Octokit } from "https://esm.sh/octokit";

const postElements = document.querySelectorAll(".post");

async function readDirectoryAndOutputHTML(owner, repo, path) {
  const octokit = new Octokit({});
  try {
    const response = await octokit.request(`GET /repos/${owner}/${repo}/contents/${path}`, {
      owner,
      repo,
      path,
      accept: "application/vnd.github.html+json",
    });
    console.log(response);
    response.data.forEach(async (element, index) => {
      if (element.type === "file") {
        const fileResponse = await octokit.request(`GET /repos/${owner}/${repo}/git/blobs/${element.sha}`, {
          owner,
          repo,
          accept: "application/vnd.github.html+json",
        });
        console.log(fileResponse);
        const data = await fileResponse.data;
        const decoded = atob(data.content);
        document.getElementById("post-content").innerHTML = marked.parse(decoded);
      }
    });
  } catch (error) {
    console.error("Error fetching directory contents:", error);
  }
}

function getPost(fileName, type) {
  const postSrc = `${fileName}`;

  const postContentWrapper = document.getElementById("zd-wrapper");
  const postContent = document.getElementById("zd-content");
  const section = document.getElementById("section");
  const loader = document.getElementById("loader-wrapper");

  loader.classList.remove("hide");
  postContentWrapper.classList.add("hide");
  postContent.src = "";

  if (fileName === "index.html") {
    section.classList.remove("hide");
  } else {
    section.classList.add("hide");
    setTimeout(() => {
      postContent.src = postSrc;
      postContentWrapper.classList.remove("hide");
      loader.classList.add("hide");
    }, 2000);
  }
}

export default getPost;
