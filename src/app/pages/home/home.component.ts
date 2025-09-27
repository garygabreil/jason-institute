import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  courses: any[] = [
    {
      id: 'javaCore',
      title: 'Java Core',
      icon: 'fab fa-java',
      duration: '6 weeks',
      description: 'Master the fundamentals of Java programming language',
      syllabus: [
        'Java Basics & OOP Concepts',
        'Data Structures & Collections',
        'Exception Handling & Multithreading',
        'JDBC & Database Connectivity',
        'File I/O Operations',
      ],
    },
    {
      id: 'javaFullStack',
      title: 'Java Full-Stack Development',
      icon: 'fas fa-layer-group',
      duration: '16 weeks',
      description: 'End-to-end web development with Java technologies',
      syllabus: [
        'Spring Framework & Spring Boot',
        'RESTful Web Services',
        'Hibernate & JPA',
        'Frontend Technologies (HTML, CSS, JS)',
        'Microservices Architecture',
      ],
    },
    {
      id: 'javascriptCore',
      title: 'JavaScript Core',
      icon: 'fab fa-js-square',
      duration: '5 weeks',
      description: 'Comprehensive JavaScript programming fundamentals',
      syllabus: [
        'JavaScript Fundamentals & ES6+',
        'DOM Manipulation & Events',
        'Asynchronous JavaScript & APIs',
        'Object-Oriented JavaScript',
        'Error Handling & Debugging',
      ],
    },
    {
      id: 'javascriptFullStack',
      title: 'JavaScript Full-Stack (MERN/MEAN)',
      icon: 'fab fa-node-js',
      duration: '18 weeks',
      description: 'Full-stack development with modern JavaScript frameworks',
      syllabus: [
        'React.js / Angular Fundamentals',
        'Node.js & Express.js',
        'MongoDB / MySQL Database',
        'Authentication & Authorization',
        'Deployment & DevOps Basics',
      ],
    },
    {
      id: 'pythonCore',
      title: 'Python Core',
      icon: 'fab fa-python',
      duration: '5 weeks',
      description: 'Learn Python programming from basics to advanced concepts',
      syllabus: [
        'Python Syntax & Data Types',
        'Functions & Modules',
        'File Handling & Exception Handling',
        'OOP in Python',
        'Popular Python Libraries',
      ],
    },
    {
      id: 'pythonFullStack',
      title: 'Python Full-Stack Development',
      icon: 'fas fa-code',
      duration: '16 weeks',
      description: 'Build complete web applications with Python',
      syllabus: [
        'Django/Flask Framework',
        'Database Integration (SQL/NoSQL)',
        'REST API Development',
        'Frontend Integration',
        'Deployment & Scalability',
      ],
    },
    {
      id: 'dataScience',
      title: 'Data Science',
      icon: 'fas fa-chart-line',
      duration: '20 weeks',
      description: 'Master data analysis, visualization, and machine learning',
      syllabus: [
        'Statistics & Probability',
        'Data Wrangling with Pandas',
        'Data Visualization',
        'Machine Learning Algorithms',
        'Big Data Fundamentals',
      ],
    },
    {
      id: 'mobileDevelopment',
      title: 'Mobile Development (Ionic, React Native)',
      icon: 'fas fa-mobile-alt',
      duration: '14 weeks',
      description: 'Build cross-platform mobile applications',
      syllabus: [
        'Mobile UI/UX Principles',
        'Ionic Framework / React Native',
        'Native Device Features',
        'App Store Deployment',
        'Performance Optimization',
      ],
    },
    {
      id: 'cloudDevOps',
      title: 'Cloud Technologies & DevOps',
      icon: 'fas fa-cloud',
      duration: '16 weeks',
      description: 'Master cloud platforms and DevOps practices',
      syllabus: [
        'AWS/Azure Fundamentals',
        'Infrastructure as Code (Terraform)',
        'CI/CD Pipelines',
        'Containerization (Docker, Kubernetes)',
        'Monitoring & Logging',
      ],
    },
    {
      id: 'osAdministration',
      title: 'Windows & Linux Administration',
      icon: 'fas fa-server',
      duration: '10 weeks',
      description: 'Become proficient in system administration',
      syllabus: [
        'Windows Server Administration',
        'Linux Command Line & Shell Scripting',
        'User & Permission Management',
        'Network Configuration',
        'System Security & Hardening',
      ],
    },
  ];

  // Method to generate unique IDs for Bootstrap collapse
  getSyllabusId(courseId: string): string {
    return courseId + 'Syllabus';
  }

  getButtonId(courseId: string): string {
    return courseId + 'Button';
  }
}
