function addAboutPage() {
  const aboutPage = document.createElement('div');
  aboutPage.innerHTML = `
    <h1>About</h1>
    <p>This is a simple single page application that demonstrates how to use the History API to create a client-side router.</p>
  `;
  return aboutPage;
}

export default addAboutPage;