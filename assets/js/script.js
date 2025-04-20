function showSection(sectionId) {
  const sections = document.querySelectorAll('.card-container');
  sections.forEach(section => section.classList.remove('active'));

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
}

window.onload = () => {
  showSection('home');
};

function showSection(section) {
  // Hide all sections
  document.querySelectorAll('.card-container').forEach(sec => {
    sec.classList.remove('active');
  });

  // Show the clicked section
  document.getElementById(section).classList.add('active');
}
