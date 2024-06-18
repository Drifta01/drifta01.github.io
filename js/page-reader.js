import { Octokit } from "https://esm.sh/octokit";

const linksPageData = links.map((l) => {});

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

        document.getElementById("content").innerHTML = marked.parse(decoded);
      }
    });
  } catch (error) {
    console.error("Error fetching directory contents:", error);
  }
}
