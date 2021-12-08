  /**
   * To run this file in Gitpod, use the 
   * command node map.js in the terminal
   */

  // Using a for loop
  let nums = [1, 2, 3, 4, 5]

  let result = []

  for (let num of nums) {
      result.push(num * 2)
  }

  console.log(result)

  // Using map()
  const multiByTwo = function(num) {
      return num * 2
  }
  const mapRes = nums.map(multiByTwo);

  console.log(mapRes)

  // Simplified w/ map()

  const results = nums.map(function(num) {
      return num * 2
  })

  console.log(results)
  // Simplified w/ map() + arrow function

  const newResult = nums.map(num => num * 2)

  console.log(newResult)

  // With objects:
  const students = [{
          id: 1,
          name: 'Mark',
          profession: 'Developer',
          skill: 'JavaScript'
      },
      {
          id: 2,
          name: 'Ariel',
          profession: 'Developer',
          skill: 'HTML'
      },
      {
          id: 3,
          name: 'Jason',
          profession: 'Designer',
          skill: 'CSS'
      },
  ];


  const studentsWithIds = students.map(student => [student.name, student.id]);
  console.log(studentsWithIds)