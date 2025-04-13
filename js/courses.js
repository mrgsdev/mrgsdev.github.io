const courses = [
    {
      title: "DesignCode",
      description: "SwiftUI & UIKit Courses",
      source: "https://designcode.io/courses",
      repo: "https://github.com/mrgsdev/DesignCode"
    },
    {
      title: "SwiftBook",
      description: "UIKit Courses",
      source: "https://swiftbook.org/shop",
      repo: "https://github.com/mrgsdev/SwiftBook"
    },
  ];
  
  const courseGrid = document.getElementById("courseGrid");
  
  courses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.className = "course";
  
    courseCard.innerHTML = `
      <div class="course-title">${course.title}</div>
      <div class="course-description">${course.description}</div>
      <div class="course-source"><a href="${course.source}" target="_blank" rel="noopener noreferrer">${course.source}</a></div>
      <div class="course-repository"><a href="${course.repo}" target="_blank" rel="noopener noreferrer">my repository</a></div>
    `;
  
    courseGrid.appendChild(courseCard);
  });