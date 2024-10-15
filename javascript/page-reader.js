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

function getPost(file) {
  const postSrc = `${file}`;
  const postContentWrapper = document.getElementById("zd-wrapper");
  const postContent = document.getElementById("zd-content");
  const section = document.getElementById("section");
  const iframe = document.getElementById("iframe"); // const loader = document.getElementById("loader-wrapper");

  // loader.classList.remove("hide");
  // postContentWrapper.classList.add("hide");

  console.log(file);

  if (file.fileName === "index.html") {
    iframe.classList.add("hide");
    postContentWrapper.classList.add("hide");
    section.classList.remove("hide");
    return;
  }

  if (file.type === "html") {
    section.classList.add("hide");
    iframe.classList.remove("hide");
    postContentWrapper.classList.add("hide");

    iframe.src = file.fileName;
  }
  if (file.type === "md") {
    section.classList.add("hide");
    iframe.classList.add("hide");
    postContentWrapper.classList.remove("hide");
      postContent.src = file.fileName;

  }
}

export default getPost;
