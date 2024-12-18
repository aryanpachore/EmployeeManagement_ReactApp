const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 101",
        description: "Description for task 101",
        date: "2024-01-15",
        category: "Category 3"
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        title: "Task 102",
        description: "Description for task 102",
        date: "2024-02-25",
        category: "Category 1"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 103",
        description: "Description for task 103",
        date: "2024-03-05",
        category: "Category 2"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Task 201",
        description: "Description for task 201",
        date: "2024-01-20",
        category: "Category 1"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 202",
        description: "Description for task 202",
        date: "2024-02-15",
        category: "Category 3"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 301",
        description: "Description for task 301",
        date: "2024-01-10",
        category: "Category 2"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Task 302",
        description: "Description for task 302",
        date: "2024-02-01",
        category: "Category 4"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 401",
        description: "Description for task 401",
        date: "2024-01-12",
        category: "Category 1"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 402",
        description: "Description for task 402",
        date: "2024-02-28",
        category: "Category 3"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        title: "Task 501",
        description: "Description for task 501",
        date: "2024-03-18",
        category: "Category 2"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 502",
        description: "Description for task 502",
        date: "2024-04-05",
        category: "Category 4"
      }
    ]
  },
  {
    id: 6,
    email: "employee6@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 601",
        description: "Description for task 601",
        date: "2024-03-11",
        category: "Category 1"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 602",
        description: "Description for task 602",
        date: "2024-04-20",
        category: "Category 2"
      }
    ]
  },
  {
    id: 7,
    email: "employee7@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 701",
        description: "Description for task 701",
        date: "2024-02-10",
        category: "Category 4"
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        title: "Task 702",
        description: "Description for task 702",
        date: "2024-03-22",
        category: "Category 3"
      }
    ]
  },
  {
    id: 8,
    email: "employee8@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 801",
        description: "Description for task 801",
        date: "2024-01-30",
        category: "Category 2"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 802",
        description: "Description for task 802",
        date: "2024-04-10",
        category: "Category 1"
      }
    ]
  }
];

const admin = {
  email: "admin@example.com",
  password: "admin123"
};


export const setLocalstorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalstorage = ()=>{
 const employees=JSON.parse(localStorage.getItem('employees'))
const admin = JSON.parse(localStorage.getItem('admin'))


return {employees,admin}
}