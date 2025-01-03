const btn = document.querySelector("#btn");
const rowTbody = document.querySelector(".row");
const divTbody = document.querySelector(".divTbody");

async function getUI() {
  const userName = document.querySelector("#userName").value;
  const userApi = "https://api.github.com/users/" + userName;
  const reposApi = "https://api.github.com/users/" + userName + "/repos";

  const response = await fetchData(userApi);

  fetchData(reposApi)
    .then((reposData) => {
      console.log(reposData);
      let startIndex = reposData.length >= 5 ? reposData.length - 5 : 0;

      let reposHtml = "";
      for (let i = startIndex; i < reposData.length; i++) {
        const repo = reposData[i];
        reposHtml += `
                    <tr>
                        <td>${repo.name}</td>
                        <td>${repo.description || "N/A"}</td>
                        <td>${repo.language || "N/A"}</td>
                        <td>${repo.stargazers_count}</td>
                        <td>${repo.forks_count}</td>
                    </tr>`;
      }

      rowTbody.innerHTML = `
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Repository Name</th>
                            <th>Description</th>
                            <th>Language</th>
                            <th>Stars</th>
                            <th>Forks</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${reposHtml}
                    </tbody>
                </table>`;
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      rowTbody.innerHTML = `<p>Error: ${err.message}</p>`;
    });

  divTbody.innerHTML = `<table class="custom-table">
        <thead>
            <tr>
    
                <th>Company</th>
                <th>Created At</th>
                <th>Followers</th>
                <th>ID</th>
                <th>Public Repos</th>
                <th>Avatar Image</th>
    
    
            </tr>
        </thead>
        <tbody>
    
    
            <tr>
    
                <td>${response.company}</td>
                <td>${response.created_at}</td>
                <td>${response.followers}</td>
                <td>${response.id}</td>
                <td>${response.public_repos}</td>
                <td><img src="${response.avatar_url}"</td>
    
    
    
            </tr>
    
    
    
        </tbody>
    </table>`;
  divTbody.style.marginBottom = "4em";
}

function fetchData(userApi) {
  return new Promise((resolve, reject) => {
    fetch(userApi)
      .then((response) => {
        if (response.status == 200) {
          resolve(response.json());
        } else {
          reject("ther's an error");
        }
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

btn.addEventListener("click", getUI);
