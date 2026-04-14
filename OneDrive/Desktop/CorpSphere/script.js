// ================= ORG DATA =================
const orgData = {
  "Amazon": [
    { name: "Amit Sharma", role: "Backend Engineer", progress: 85 },
    { name: "Neha Gupta", role: "Cloud Architect", progress: 90 }
  ],
  "Google": [
    { name: "Rohan Mehta", role: "Software Engineer", progress: 88 },
    { name: "Sneha Kapoor", role: "AI Engineer", progress: 92 }
  ],
  "InnovateX Startup": [
    { name: "Rahul Verma", role: "Full Stack Dev", progress: 70 },
    { name: "Ananya Singh", role: "UI Designer", progress: 82 }
  ],
  "NextGen Labs": [
    { name: "Kiran Reddy", role: "Frontend Dev", progress: 75 },
    { name: "Pooja Nair", role: "Product Designer", progress: 80 }
  ],
  "IIT Bombay": [
    { name: "Arjun Patel", role: "Student Developer", progress: 65 },
    { name: "Meera Iyer", role: "Research Intern", progress: 78 }
  ],
  "NIT Surathkal": [
    { name: "Vikram Shetty", role: "Backend Dev", progress: 72 },
    { name: "Divya Rao", role: "ML Enthusiast", progress: 85 }
  ]
};

// ================= INIT =================
window.onload = () => {
  const org = localStorage.getItem("orgName") || "Amazon";
  document.getElementById("orgSelect").value = org;
  switchOrg();
};

// ================= SWITCH ORG =================
function switchOrg() {
  const org = document.getElementById("orgSelect").value;

  localStorage.setItem("orgName", org);

  document.getElementById("orgName").innerText = org;
  document.getElementById("orgTitle").innerText = org;
  document.getElementById("orgType").innerText = getOrgType(org);

  loadMembers(org);
}

// ================= ORG TYPE =================
function getOrgType(org) {
  if (org === "Amazon" || org === "Google") return "🏢 Tech Company";
  if (org.includes("Startup") || org.includes("Labs")) return "🚀 Startup";
  return "🎓 College";
}

// ================= LOAD MEMBERS =================
function loadMembers(org) {
  const container = document.getElementById("memberContainer");
  let html = "<h2>Member Directory</h2>";

  orgData[org].forEach(m => {
    html += `
      <div class="member" onclick="openModal('${m.name}','${m.role}',${m.progress})">
        <img src="https://i.pravatar.cc/100">
        <div>
          <h3>${m.name}</h3>
          <p>${m.role}</p>
          <div class="progress"><div style="width:${m.progress}%"></div></div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ================= SEARCH =================
function searchMembers() {
  const input = document.getElementById("search").value.toLowerCase();

  document.querySelectorAll(".member").forEach(m => {
    m.style.display = m.innerText.toLowerCase().includes(input) ? "flex" : "none";
  });
}

// ================= MODAL =================
function openModal(name, role, progress) {
  modal.style.display = "block";
  modalName.innerText = name;
  modalRole.innerText = role;
  modalProgress.style.width = progress + "%";
}

function closeModal() {
  modal.style.display = "none";
}

// ================= THEME =================
function toggleTheme() {
  document.body.classList.toggle("light");
}