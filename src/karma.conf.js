// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/devlogger'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};




// let array = ['a', 'b', ['1','2',['c','b']]]

// for (let i = 0; i < array.length; i++) {  
//  if (Array.isArray(array[i])) {
//   for (let j = 0; j < array[i].length; j++) {
//     console.log(`--${array[i][j]}`);
//   }
//  }
 else {console.log(`-${array[i]}`);}
  
// }

let str = '-'


const array = ['a', 'b', ['1','2',['c','b']], [1], [1,[1,2]] ]

const heyArray = (array, str) => {         
    for (let i = 0; i < array.length; i++) {    
    if (Array.isArray(array[i])) { 
      str=str+"-"   
      heyArray(array[i])
                
       }
    else  {   
        console.log(str +array[i])             
    }  
    }
     
    
  }
    

heyArray(array, str)






// let array = ['a', 'b', ['1','2',['c','b']]]
// i=0
// do {
//   j=0
//   while (Array.isArray(array[i]))
//   console.log(array[i]);
//   i++
// }
// while (i<array.length )

let array = ['a', 'b', ['1','2',['c','b']]]


const reduceArray = array.reduce((acc, num)=> { 
  let newArr = []
  if (Array.isArray(num)) {
      newArr.push(num)
    } 

       
},)

console.log(reduceArray);