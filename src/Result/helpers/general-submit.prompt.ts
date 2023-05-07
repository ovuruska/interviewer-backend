export default (task:string,code:string) => `
Programming task
----------------
${task}

Implementation in TypeScript
Code is given inside triple dashes.
Implementation
--------------
// main.ts
---${code}---
Return as JSON object

`

