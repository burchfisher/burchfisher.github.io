document.getElementById('teaching-courses').innerHTML = siteContent.courses.map(course => `
  <article class="teaching-course">
    <figure><img src="${course.image}" alt="${course.code}: ${course.title}" loading="lazy"></figure>
    <div><p class="course-code">${course.code}</p><h2>${course.title}</h2><p class="course-description">${course.description}</p></div>
  </article>
`).join('');
